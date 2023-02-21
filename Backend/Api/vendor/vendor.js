const express = require("express");
const router = express.Router();
const conn = require("../../config");
const multer = require("multer");
const moment = require("moment");
// const bcrypt = require("bcrypt");
// const saltRounds = 10;

// --------------------------Upload-Image----------------------------------------------------------
//! Use of Multer
var storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "././public/images"); // './public/images/' directory name where save the file
  },
  filename: (req, file, callBack) => {
    callBack(null, `image-${Date.now()}.${file.originalname}`);
    // callBack(null, req.body.first_name + '-' + file.originalname);
  },
});
// img filter
const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback(null.Error("only Image is allowd"));
  }
};

var upload = multer({
  storage: storage,
  fileFilter: isImage,
});

var uploadMultiple = upload.fields([{ name: "file" }, { name: "file2" }]);

// ---------------Admin/User-Post-Data------------------------------------------------------------
router.post("/", uploadMultiple, (req, res) => {
  // console.log(req.body);

  const {
    user_role,
    first_name,
    last_name,
    email,
    gender,
    country,
    state,
    city,
    address,
    mobile_no,
    area,
    experience,
    service_charge,
    service_name,
    document_type,
    password,
  } = req.body;

  let date = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");
  // bcrypt.hash(password, saltRounds, (err, hash) => {
  //   if (err) throw err;

  if (req.files === undefined) {
    var file_1 = null;
    var file_2 = null;
  }
  if (req.files !== undefined) {
    var file_1 = req.files.file[0].filename;
    var file_2 = req.files.file2[0].filename;
  }

  conn.query(
    "INSERT  INTO user SET ?",
    {
      user_role: user_role,
      first_name: first_name,
      last_name: last_name,
      email: email,
      gender: gender,
      country: country,
      state: state,
      city: city,
      mobile_no: mobile_no,
      address: address,
      area: area,
      experience: experience,
      service_charge: service_charge,
      document_type: document_type,
      current_date: date,
      password: password,
      upload_file: file_1,
      document_file: file_2,
      service_name: service_name,
      // password: hash,
    },
    (err, result) => {
      if (err) {
        res.send({
          msgType: "error",
          message: "Check felds.",
        });
      } else {
        // res.send(result);
        res.send({
          msgType: "success",
          message: "Data Submit Successfully",
          email: email,
        });
      }
    }
  );
  // })
});

// -----------------Get-All-vendor-Data-------------------------------------------------------

router.get("/vendor", (req, res) => {
  conn.query("select * from user where user_role=2", (err, result) => {
    if (err) {
      res.send("error");
    } else {
      res.send(result);
    }
  });
});
// -----------------service-acording-vendor-Data------------------------------------------------------

router.get("/service_vendor_list/:service_name", (req, res) => {
  const service_name = req.params.service_name;
  // console.log(req.params.service_name);

  conn.query(
    `SELECT * FROM user WHERE service_name LIKE '%${service_name}%'`,
    (err, result) => {
      // console.log(result);

      if (err) {
        res.send("error");
      } else {
        res.send(result);
      }
    }
  );
});
// -----------------Get-All-User-Data-------------------------------------------------------

router.get("/user", (req, res) => {
  conn.query("select * from user where user_role=3", (err, result) => {
    if (err) {
      res.send("error");
    } else {
      res.send(result);
    }
  });
});
// -----------------Get-particular-Data-------------------------------------------------
router.get("/data/:id", (req, res) => {
  const id = req.params.id;
  conn.query("SELECT * FROM user WHERE id = ?", id, (error, result) => {
    if (error) throw error;
    res.send(result);
  });
});
// -----------------Delete-particular-Data----------------------------------------------
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  conn.query("DELETE FROM user WHERE id = ?", id, (error, result) => {
    if (error) {
      res.send({
        msgType: "error",
        message: "Check felds...",
      });
    } else {
      res.send({
        msgType: "success",
        message: "Data Delete Successfully",
      });
    }
  });
});
// -----------------Update-Data---------------------------------------------------------
router.put("/:id", (req, res) => {
  // console.log("update", req.body);

  const services = req.body.service_name.join(", ");

  let date = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");
  const sql = `UPDATE user SET first_name = ?, last_name = ?,  address = ?, mobile_no = ?, service_charge = ?, area = ?, experience = ? , city = ?,gender=?, state=?, country=? ,service_name=? ,update_date = ?   WHERE id = ?`;
  const values = [
    req.body.first_name,
    req.body.last_name,
    req.body.address,
    req.body.mobile_no,
    req.body.service_charge,
    req.body.area,
    req.body.experience,
    req.body.city,
    req.body.gender,
    req.body.state,
    req.body.country,
    services,
    date,
    req.params.id,
  ];

  conn.query(sql, values, (err, result) => {
    if (err) {
      res.send({
        msgType: "error",
        message: "Check felds...",
      });
    } else {
      res.send({
        msgType: "success",
        message: "Data Update Successfully",
      });
      // console.log(res);
    }
  });
});

module.exports = router;

const express = require("express");
const router = express.Router();
const conn = require("../../Config/config");
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

// -----------------Post-Data------------------------------------------------------------
router.post("/", uploadMultiple, (req, res) => {
  const {
    user_role,
    first_name,
    last_name,
    email,
    address,
    city,
    mobile_no,
    service_charge,
    document_type,
    password,
  } = req.body;

  let date = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");
  // bcrypt.hash(password, saltRounds, (err, hash) => {
  //   if (err) throw err;
  conn.query(
    "INSERT  INTO user SET ?",
    {
      user_role: user_role,
      first_name: first_name,
      last_name: last_name,
      email: email,
      address: address,
      city: city,
      mobile_no: mobile_no,
      service_charge: service_charge,
      upload_file: req.files.file[0].filename,
      document_type: document_type,
      document_file: req.files.file2[0].filename,
      current_date: date,
      password: password,
      // password: hash,
    },
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        // res.send(result);
        res.send({
          success: true,
          message: "Data Submit Successfully",
        });
      }
    }
  );
  // })
});

// -----------------Get-All-Data-------------------------------------------------------

router.get("/", (req, res) => {
  conn.query("select * from user", (err, result) => {
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
    if (error) throw error;
    res.send(result);
  });
});
// -----------------Update-Data---------------------------------------------------------
router.put("/:id", (req, res) => {
  const sql = `UPDATE user SET first_name = ?, last_name = ?, address = ?, mobile_no = ?, service_charge = ?, city = ? WHERE id = ?`;
  const values = [
    req.body.first_name,
    req.body.last_name,
    req.body.address,
    req.body.mobile_no,
    req.body.service_charge,
    req.body.city,
    req.params.id,
  ];

  conn.query(sql, values, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

module.exports = router;

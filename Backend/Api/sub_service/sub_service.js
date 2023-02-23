const express = require("express");
const router = express.Router();
const conn = require("../../config");
const multer = require("multer");
const moment = require("moment");

// --------------------------Upload-Image----------------------------------------------------------
//! Use of Multer
var storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "././public/Sub_service"); // image-directory name
  },
  filename: (req, file, callBack) => {
    callBack(null, `image-${Date.now()}.${file.originalname}`);
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

// ---------------Sub_service-Post-Data------------------------------------------------------------
router.post("/", upload.single("file"), (req, res) => {
  const { services, sub_service_name, description } = req.body;
  const { filename } = req.file;

  conn.query(
    "INSERT  INTO sub_service SET ?",
    {
      service_name: services,
      sub_service_name: sub_service_name,
      description: description,
      img_path: filename,
    },
    (err, result) => {
      if (err) {
        res.send({
          msgType: "error",
          message: "Check felds.....",
        });
      } else {
        // res.send(result);
        res.send({
          msgType: "success",
          message: "Data Submit Successfully",
        });
      }
    }
  );
});

// -----------------Get-All-Data-------------------------------------------------------

router.get("/", (req, res) => {
  conn.query("select * from sub_service ", (err, result) => {
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
  conn.query("SELECT * FROM sub_service WHERE id = ?", id, (error, result) => {
    // console.log(result);
    if (error) {
      res.send("error");
    } else {
      res.send(result);
    }
  });
});

// -----------------Delete-particular-Data----------------------------------------------
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  conn.query("DELETE FROM sub_service WHERE id = ?", id, (error, result) => {
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

//! Use of Multer
var UpdateStorage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "././public/Sub_Service"); // image-directory name
  },
  filename: (req, file, callBack) => {
    callBack(null, `image-${Date.now()}.${file.originalname}`);
    // callBack(null, req.body.first_name + '-' + file.originalname);
  },
});
// img filter
const UpdateImage = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback(null.Error("only Image is allowd"));
  }
};

var Updateupload = multer({
  storage: UpdateStorage,
  fileFilter: UpdateImage,
});

router.put("/:id", Updateupload.single("file"), (req, res) => {
  // console.log(req.body);

  // let date = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");
  const sql = `UPDATE sub_service SET service_name = ?, sub_service_name=?, description = ?,img_path=? WHERE id = ?`;
  const values = [
    req.body.services,
    req.body.sub_service_name,
    req.body.description,
    req.file.filename,
    req.params.id,
  ];

  conn.query(sql, values, (err, result) => {
    if (err) {
      res.send({
        msgType: "error",
        message: "Check felds...",
      });
    } else {
      // res.send(result);
      res.send({
        msgType: "success",
        message: "Data Update Successfully",
      });
    }
  });
});

module.exports = router;

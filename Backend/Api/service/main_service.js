const express = require("express");
const router = express.Router();
const conn = require("../../config");
const multer = require("multer");
const sharp = require("sharp");
const moment = require("moment");

// --------------------------Upload-Image----------------------------------------------------------
//! Use of Multer
var storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "././public/Service"); // image-directory name
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

// ---------------Main_service-Post-Data------------------------------------------------------------
router.post("/", upload.single("file"), async (req, res) => {
  const { service_name, service_type, description } = req.body;
  const { filename } = req.file;

  const thumbnailFilename = `thumbnail-${filename}`;
  const thumbnailPath = `././public/Service/Service_Thumbnail/${thumbnailFilename}`;

  await sharp(`././public/Service/${filename}`)
    .resize(65, 65)
    .toFile(thumbnailPath);

  conn.query(
    "INSERT  INTO services_tbl SET ?",
    {
      service_name: service_name,
      service_type: service_type,
      description: description,
      img_path: filename,
      thumbnail_path: thumbnailFilename,
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
  const sql = `SELECT * FROM services_tbl WHERE service_type = 'main_service'`;
  conn.query(sql, (err, result) => {
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
  conn.query("SELECT * FROM services_tbl WHERE id = ?", id, (error, result) => {
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
  conn.query("DELETE FROM services_tbl WHERE id = ?", id, (error, result) => {
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
    callBack(null, "././public/Service"); // image-directory name
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

router.put("/:id", Updateupload.single("file"), async (req, res) => {
  const thumbnailFilename = `thumbnail-${req.file.filename}`;
  const thumbnailPath = `././public/Service/Service_Thumbnail/${thumbnailFilename}`;

  await sharp(`././public/Service/${req.file.filename}`)
    .resize(65, 65)
    .toFile(thumbnailPath);

  const sql = `UPDATE services_tbl SET service_name = ?, description = ?, img_path=?,thumbnail_path=? WHERE id = ?`;
  const values = [
    req.body.service_name,
    req.body.description,
    req.file.filename,
    thumbnailFilename,
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

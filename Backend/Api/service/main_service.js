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
  const { service_name, title, description, start_date, end_date } = req.body;
  const { filename } = req.file;

  const thumbnailFilename = `thumbnail-${filename}`;
  const thumbnailPath = `././public/Service/Service_Thumbnail/${thumbnailFilename}`;

  await sharp(`././public/Service/${filename}`)
    .resize(65, 65)
    .toFile(thumbnailPath);

  conn.query(
    "INSERT  INTO main_service SET ?",
    {
      service_name: service_name,
      title: title,
      description: description,
      start_date: start_date,
      end_date: end_date,
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
  conn.query("select * from main_service ", (err, result) => {
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
  conn.query("SELECT * FROM main_service WHERE id = ?", id, (error, result) => {
    // console.log(result);
    if (error) {
      res.send("error");
    } else {
      res.send(result);
    }
  });
});
// router.get("/:service_name", (req, res) => {
//   const service_name = req.params.service_name;
//   conn.query(
//     "SELECT * FROM main_service WHERE service_name = ?",
//     service_name,
//     (error, result) => {
//       // console.log(result);
//       if (error) {
//         res.send("error");
//       } else {
//         res.send(result);
//       }
//     }
//   );
// });
// -----------------Delete-particular-Data----------------------------------------------
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  conn.query("DELETE FROM main_service WHERE id = ?", id, (error, result) => {
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
  // console.log(req.body);

  const thumbnailFilename = `thumbnail-${req.file.filename}`;
  const thumbnailPath = `././public/Service/Service_Thumbnail/${thumbnailFilename}`;

  await sharp(`././public/Service/${req.file.filename}`)
    .resize(65, 65)
    .toFile(thumbnailPath);

  const sql = `UPDATE main_service SET service_name = ?, title = ?,  description = ?, start_date = ?, end_date = ?,img_path=?,thumbnail_path=? WHERE id = ?`;
  const values = [
    req.body.service_name,
    req.body.title,
    req.body.description,
    req.body.start_date,
    req.body.end_date,
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

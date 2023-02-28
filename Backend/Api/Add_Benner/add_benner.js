const express = require("express");
const router = express.Router();
const conn = require("../../config");
const multer = require("multer");
const moment = require("moment");

// --------------------------Upload-Image----------------------------------------------------------
//! Use of Multer
var storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "././public/Benner"); // image-directory name
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

router.put("/", upload.single("file"), (req, res) => {
  // console.log(req.body);

  const sql = `UPDATE add_benner SET img_path=? `;
  const values = [req.file.filename];

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
    }
  });
});

// ----------------Post-Data------------------------------------------------------------
// router.post("/", upload.single("file"), (req, res) => {
//   const { filename } = req.file;

//   conn.query(
//     "INSERT  INTO add_benner SET ?",
//     {
//       img_path: filename,
//     },
//     (err, result) => {
//       if (err) {
//         res.send({
//           msgType: "error",
//           message: "Check felds.....",
//         });
//       } else {
//         res.send({
//           msgType: "success",
//           message: "Data Submit Successfully",
//         });
//       }
//     }
//   );
// });

// -----------------Get-Data-------------------------------------------------------

router.get("/", (req, res) => {
  conn.query("select * from add_benner ", (err, result) => {
    if (err) {
      res.send("error");
    } else {
      res.send(result);
    }
  });
});

module.exports = router;

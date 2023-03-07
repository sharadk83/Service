const express = require("express");
const router = express.Router();
const conn = require("../../config");

// ----------------Post-Data------------------------------------------------------------
router.post("/", (req, res) => {
  const { sub_service_id, sub_service_name, service_type, question, answer } =
    req.body;

  conn.query(
    "INSERT  INTO faq_tbl SET ?",
    {
      service_id: sub_service_id,
      service_name: sub_service_name,
      service_type: service_type,
      question: question,
      answer: answer,
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

module.exports = router;

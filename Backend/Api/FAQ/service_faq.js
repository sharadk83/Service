const express = require("express");
const router = express.Router();
const conn = require("../../config");

// ----------------Post-Data------------------------------------------------------------
router.post("/", (req, res) => {
  const { service_id, service_name, service_type, question, answer } = req.body;

  conn.query(
    "INSERT  INTO faq_tbl SET ?",
    {
      service_id: service_id,
      service_type: service_type,
      service_name: service_name,
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
        res.send({
          msgType: "success",
          message: "Data Submit Successfully",
        });
      }
    }
  );
});

// // -----------------Get-All-Data-------------------------------------------------------

router.get("/", (req, res) => {
  conn.query("select * from faq_tbl ", (err, result) => {
    if (err) {
      res.send("error");
    } else {
      res.send(result);
    }
  });
});

// -----------------Get-service-particular-Data-------------------------------------------------
router.get("/service/:service_id", (req, res) => {
  const id = req.params.service_id;
  // console.log(id);
  conn.query(
    "SELECT * FROM faq_tbl WHERE service_id = ?",
    id,
    (error, result) => {
      if (error) {
        res.send("error");
      } else {
        res.send(result);
      }
    }
  );
});
// -----------------Get-particular-Data-------------------------------------------------
router.get("/data/:id", (req, res) => {
  const id = req.params.id;
  conn.query("SELECT * FROM faq_tbl WHERE id = ?", id, (error, result) => {
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
  //   console.log(id);

  conn.query("DELETE FROM faq_tbl WHERE id = ?", id, (error, result) => {
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

// ------------------------Update-Data---------------------------------------------------------

router.put("/:id", (req, res) => {
  // console.log(req.body);

  const sql = `UPDATE faq_tbl SET   question = ?,  answer = ? WHERE id = ?`;
  const values = [req.body.question, req.body.answer, req.params.id];

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

module.exports = router;

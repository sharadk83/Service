const express = require("express");
const router = express.Router();
const conn = require("../../Config/config");

router.get("/", (req, res) => {
  conn.query("select * from user", (err, result) => {
    if (err) {
      res.send("error");
    } else {
      res.send(result);
    }
  });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  conn.query("DELETE FROM user WHERE id = ?", id, (error, result) => {
    if (error) throw error;
    res.send(result);
  });
});

// router.put("/:id", (req, res) => {
//   const data = req.body;
//   conn.query("UPDATE SET user id=? WHERE id  = ?", data, (err, result) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(result);
//     }
//   });
// });
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updatedItem = req.body;
    conn.query('UPDATE user SET ? WHERE id = ?', [updatedItem, id], (error, results) => {
      if (error) throw error;
      res.send(`Item updated with ID: ${id}`);
    });
  });

router.post("/", (req, res) => {
  const data = req.body;
  conn.query("INsert INTO user SET?", data, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
module.exports = router;

const express = require("express");
const router = express.Router();
const conn = require("../../config");
// const bcrypt = require("bcrypt");

router.post("/", (req, res) => {
  // Get email and password from client
  const { email, password } = req.body;

  // Check if email and password match
  const query = `SELECT * FROM user_tbl WHERE email = '${email}' AND password = '${password}'`;
  conn.query(query, (err, result) => {
    const userName = result[0].first_name;
    const userId = result[0].id;

    if (err) throw err;
    if (result.length > 0) {
      res.send({
        msgType: "success",
        message: "Successful login",
        id: userId,
        user: userName,
      });
    } else {
      res.send({
        msgType: "error",
        message: "Email and password do not match.",
      });
    }
  });
});

module.exports = router;

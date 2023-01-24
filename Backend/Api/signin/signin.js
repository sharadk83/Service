const express = require("express");
const router = express.Router();
const conn = require("../../Config/config");
// const bcrypt = require("bcrypt");

router.post("/", (req, res) => {
  // Get email and password from client
  const { email, password } = req.body;

  // Check if email and password match
  const query = `SELECT * FROM user WHERE email = '${email}' AND password = '${password}'`;
  conn.query(query, (err, result) => {
    // console.log(result);

    if (err) throw err;
    if (result.length > 0) {
      res.send({
        success: true,
        message: "Successful login",
        email: email,
      });
    } else {
      res.send({
        success: false,
        message: "Email and password do not match.",
      });
    }
  });
});

// router.post("/", (req, res) => {
//   const email = req.body.email;
//   const password = req.body.password;
//   console.log(email);
//   console.log(password);

//   const query = `SELECT * FROM user WHERE email = '${email}'`;
//   conn.query(query, (error, results) => {
//     if (error) {
//       res.send({
//         success: false,
//         message: "Error: " + error,
//       });
//     } else {
//       if (results.length > 0) {
//         console.log(results);

//         bcrypt.compare(password, results[0].password, (err, isMatch) => {
//           console.log(results[0].password);

//           if (err) {
//             res.send({
//               success: false,
//               message: "Error: " + err,
//             });
//           } else if (isMatch) {
//             res.send({
//               success: true,
//               message: "Successful login",
//             });
//           } else {
//             res.send({
//               success: false,
//               message: "Incorrect password",
//             });
//           }
//         });
//       } else {
//         res.send({
//           success: false,
//           message: "Email not found",
//         });
//       }
//     }
//   });
// });

module.exports = router;

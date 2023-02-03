const express = require("express");
const router = express.Router();
const connection = require("../../config");
const nodemailer = require("nodemailer");

// Set up the nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});
// --------------------------------Forget-Password------------------------------------
router.post("/", (req, res) => {
  const email = req.body.email;
  // Check if email exists in database
  connection.query(
    `SELECT * FROM user WHERE email = '${email}'`,
    (error, results) => {
      if (error) throw error;
      if (results.length > 0) {
        // Email exists in database
        const otp = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP
        // Save OTP to MySQL table
        const times = new Date().toISOString().slice(0, 19).replace("T", " ");
        const query = `INSERT INTO otp_tbl (email, otp, times) VALUES ('${email}', ${otp}, '${times}')`;
        connection.query(query, (error, results) => {
          if (error) throw error;
          // Send email with OTP
          const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: "OTP for Forget Password",
            html: `<h3>Your OTP is:</h3><h2 > ${otp}</h2> <p>If you didn’t request this, you can ignore this email.</p>
            Thanks,`,
          };
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) throw error;
            console.log(`OTP sent to ${email}`);
          });
        });

        res.send({
          msgType: "success",
          message: "Successfully",
          email: email,
        });
      } else {
        // Email does not exist in database
        res.send({
          msgType: "error",
          message: "Email not found",
        });
      }
    }
  );
});
// ---------------------------------------OTP_Url---------------------------------------
router.post("/check_otp", (req, res) => {
  const email = req.body.email;
  const otp = req.body.otp;
  // Check if email exists in database
  const query = `SELECT * FROM otp_tbl WHERE email = '${email}' AND otp = '${otp}'`;
  connection.query(query, (err, result) => {
    // console.log(result);
    if (err) throw err;
    if (result.length > 0) {
      res.send({
        msgType: "success",
        message: "Success",
        email: email,
      });
    } else {
      res.send({
        msgType: "error",
        message: "OTP do not match.",
      });
    }
  });
});
// --------------------------------Update_Password_Url--------------------------------------
router.put("/update_password", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  connection.query(
    "UPDATE user SET password = ? WHERE email = ?",
    [password, email],
    (err, results) => {
      if (err) {
        return res.send({ error: "Error updating the password" });
      }
      // Return success message
      res.send({
        msgType: "success",
        message: "Password updated successfully",
        email: email,
      });
    }
  );
});

module.exports = router;

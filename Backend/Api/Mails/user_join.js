const express = require("express");
const router = express.Router();
const connection = require("../../config");
const nodemailer = require("nodemailer");
const moment = require("moment");

// Set up the nodemailer transporter

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ayusharya0506@gmail.com",
    pass: "gmbuoxinqnizcnjl",
    // user: process.env.EMAIL,
    // pass: process.env.PASS,
  },
});
// --------------------------------Post------------------------------------
router.post("/", (req, res) => {
  const { firstname, lastname, email, address, mobile, purpose } = req.body;
  console.log(req.body);

  let date = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");
  connection.query(
    "INSERT  INTO contact_details SET ?",
    {
      first_name: firstname,
      last_name: lastname,
      email: email,
      mobile: mobile,
      address: address,
      purpose: purpose,
      date: date,
    },
    (err, result) => {
      if (err) {
        res.send({
          msgType: "error",
          message: "Check felds.....",
        });
      } else {
        // -----------------------------Admin-send-Email-----------------------------
        const mailOptions = {
          from: "ayusharya0506@gmail.com",
          to: "ayusharya0506@gmail.com",
          subject: "Take advantage of the services",
          html: `<!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1">
              <title>Table Email Template</title>
              <style type="text/css">
                /* Add your custom styles here */
                body {
                  font-family: Arial, sans-serif;
                  background-color: #f2f2f2;
                  padding: 50px;
                }
                h1 {
                  font-size: 36px;
                  color: #333;
                  text-align: center;
                  margin-bottom: 50px;
                }
                table {
                  width: 100%;
                  border-collapse: collapse;
                  margin-bottom: 50px;
                }
                th,
                td {
                  padding: 10px 20px;
                  text-align: left;
                  border-bottom: 1px solid #ddd;
                }
                th {
                  background-color: #333;
                  color: #fff;
                  font-size: 18px;
                }
                td {
                  font-size: 16px;
                  color: #555;
                }
                .btn {
                  display: inline-block;
                  padding: 10px 20px;
                  font-size: 18px;
                  color: #fff;
                  background-color: #333;
                  border-radius: 20px;
                  text-decoration: none;
                  text-align: center;
                  margin-top: 50px;
                }
              </style>
            </head>
            <body>
              <h1>Your Recent Order</h1>
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Product 1</td>
                    <td>$10</td>
                    <td>2</td>
                    <td>$20</td>
                  </tr>
                  <tr>
                    <td>Product 2</td>
                    <td>$15</td>
                    <td>1</td>
                    <td>$15</td>
                  </tr>
                  <tr>
                    <td>Product 3</td>
                    <td>$20</td>
                    <td>3</td>
                    <td>$60</td>
                  </tr>
                </tbody>
              </table>
              <a href="#" class="btn">View Order Details</a>
            </body>
          </html>
          `,
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log("Error", error);
          } else {
            console.log("Email sent" + info.response);
            res.status(201).json({ status: 201, info });
          }
        });
        // -----------------------------user-send-Email-----------------------------

        const mailOptions2 = {
          from: "ayusharya0506@gmail.com",
          to: email,
          subject: "Take advantage of the services",
          html: `<!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1">
              <title>Thank You Email Template</title>
              <style type="text/css">
                /* Add your custom styles here */
                body {
                  font-family: Arial, sans-serif;
                  background-color: #f2f2f2;
                  padding: 50px;
                  text-align: center;
                }
                h1 {
                  font-size: 36px;
                  color: #333;
                  margin-bottom: 20px;
                }
                p {
                  font-size: 18px;
                  color: #555;
                  line-height: 1.5;
                  margin-bottom: 50px;
                }
                .thank-you-icon {
                  width: 100px;
                  height: 100px;
                  margin: 0 auto;
                  background-image: url(https://via.placeholder.com/100x100);
                  background-repeat: no-repeat;
                  background-position: center;
                  background-size: contain;
                }
                .btn {
                  display: inline-block;
                  padding: 10px 20px;
                  font-size: 18px;
                  color: #fff;
                  background-color: #333;
                  border-radius: 20px;
                  text-decoration: none;
                }
              </style>
            </head>
            <body>
              <div class="thank-you-icon"></div>
              <h1>Thank You!</h1>
              <p>We appreciate your support and are grateful for the opportunity to serve you. If there's anything else we can do, don't hesitate to reach out.</p>
              <a href="#" class="btn">Learn More</a>
            </body>
          </html>
          `,
        };
        transporter.sendMail(mailOptions2, (error, info) => {
          if (error) {
            console.log("Error", error);
          } else {
            console.log("Email sent" + info.response);
            res.status(201).json({ status: 201, info });
          }
        });

        res.send({
          msgType: "success",
          message: "Data send Successfully",
        });
      }
    }
  );
});

module.exports = router;

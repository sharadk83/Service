require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 4000;
// ------------------Routs-------------------
const add_Benner = require("./Api/Add_Benner/add_benner");
const signinRoute = require("./Api/signin/signin");
const forget_pass = require("./Api/signin/forget_password");
const user_join = require("./Api/Mails/user_join");
const vendorRoute = require("./Api/vendor/vendor");
const mainServiceRoute = require("./Api/service/main_service");
const subServiceRoute = require("./Api/sub_service/sub_service");
const Service_FAQ = require("./Api/FAQ/service_faq");
const Sub_Service_FAQ = require("./Api/FAQ/sub_service_faq");
// const couponRoute = require("./Api/add_coupon/add_coupon");
// const addNewPageRoute = require("./Api/add_new_page/add_new_page");
// const mediaRoute = require("./Api/media/media");

// ---------------------Api-------------------
app.use("/uploads", express.static("./public/Vendor_IMG"));
app.use("/uploads", express.static("./public/Docx_IMG"));
//--------------------Service-Image---------------------------
app.use("/sevice_img", express.static("./public/Service"));
app.use("/sevice_img", express.static("./public/Service/Service_Thumbnail"));
//-------------------Sub-Service-Image---------------------------
app.use("/Sub_service_img", express.static("./public/Sub_service"));
app.use(
  "/Sub_service_img",
  express.static("./public/Sub_service/Sub_Service_Thumbnail")
);
app.use("/benner", express.static("./public/Benner"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/api/add_benner", add_Benner);
app.use("/api/signin", signinRoute);
app.use("/api/forget_pwd", forget_pass);
app.use("/api/users", vendorRoute);
app.use("/api/user_join", user_join);
app.use("/api/main_service", mainServiceRoute);
app.use("/api/sub_service", subServiceRoute);
app.use("/api/service_faq", Service_FAQ);
app.use("/api/sub_service_faq", Sub_Service_FAQ);
// app.use("/api/coupon", couponRoute);
// app.use("/api/add_new_page", addNewPageRoute);
// app.use("/api/media", mediaRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 4000;
// ------------------Routs-------------------
const signinRoute = require("./Api/signin/signin");
const vendorRoute = require("./Api/vendor/vendor");
const couponRoute = require("./Api/add_coupon/add_coupon");
const mainServiceRoute = require("./Api/main_service/main_service");
const subServiceRoute = require("./Api/sub_service/sub_service");
const addNewPageRoute = require("./Api/add_new_page/add_new_page");
const mediaRoute = require("./Api/media/media");

// ---------------------Api-------------------
app.use("/uploads", express.static("./public/images"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/api/signin", signinRoute);
app.use("/api/users", vendorRoute);
app.use("/api/coupon", couponRoute);
app.use("/api/main_service", mainServiceRoute);
app.use("/api/sub_service", subServiceRoute);
app.use("/api/add_new_page", addNewPageRoute);
app.use("/api/media", mediaRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

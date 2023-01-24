import React, { useState, useEffect } from "react";
import axios from "axios";
import MainLayout from "../../../Layout/MainLayout";
import { useNavigate, useLocation } from "react-router-dom";

const Vendor = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log(pathname);

  const [formErrors, setFormError] = useState({});
  const [imageFile, setImageFile] = useState("");
  const [document_file, setDocument_file] = useState("");
  const [user_role, setUserRole] = useState("");

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    city: "",
    mobile_no: "",
    service_charge: "",
    password: "",
    confirm_password: "",
    document_type: "",
    // user_role: "",
  });

  const {
    document_type,
    first_name,
    last_name,
    email,
    address,
    city,
    mobile_no,
    service_charge,
    password,
    confirm_password,
    // user_role,
  } = formData;
  // ------------------Onchange-event-function--------------------

  const handleFile = (e) => {
    const Imgfile = e.target.files[0];
    setImageFile(Imgfile);
    console.log(Imgfile);
  };
  const handleDocxFile = (e) => {
    const docxfile = e.target.files[0];
    setDocument_file(docxfile);
    console.log(docxfile);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // -------------------custom-validation--------------------

  const validate = () => {
    let inputValid = formData;
    let formErrors = {};
    let isValid = true;
    const reg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const textRegex = /^[a-zA-Z]+$/;
    const numberReg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!inputValid.first_name) {
      isValid = false;
      formErrors.first_name = "Firstname field is required!";
    } else if (!textRegex.test(inputValid.first_name)) {
      isValid = false;
      formErrors.first_name = "This is not a valid Text";
    }
    if (!inputValid.last_name) {
      isValid = false;
      formErrors.last_name = "Lastname field is required!";
    } else if (!textRegex.test(inputValid.last_name)) {
      isValid = false;
      formErrors.last_name = "This is not a valid Text";
    }
    if (!inputValid.email) {
      isValid = false;
      formErrors.email = "Email field is required ";
    } else if (!reg.test(inputValid.email)) {
      isValid = false;
      formErrors.email = "This is not a valid email";
    }
    if (!inputValid.address) {
      isValid = false;
      formErrors.address = "Address field is required!";
    }
    if (!inputValid.city) {
      isValid = false;
      formErrors.city = "City field is required!";
    } else if (!textRegex.test(inputValid.city)) {
      isValid = false;
      formErrors.city = "This is not a valid Text";
    }
    if (!inputValid.mobile_no) {
      isValid = false;
      formErrors.mobile_no = "Number field is required!";
    } else if (!numberReg.test(inputValid.mobile_no)) {
      isValid = false;
      formErrors.mobile_no = "This is not a valid number";
    }
    if (!inputValid.password) {
      isValid = false;
      formErrors.password = "Password field is required!";
    } else if (inputValid.password.length < 6) {
      isValid = false;
      formErrors.password = "Password must be more than 6 characters";
    }
    if (!inputValid.confirm_password) {
      isValid = false;
      formErrors.confirm_password = "Confirm Password field is required!";
    } else if (inputValid.confirm_password.length < 6) {
      isValid = false;
      formErrors.confirm_password = "Password must be more than 6 characters";
    } else if (inputValid.password !== inputValid.confirm_password) {
      isValid = false;
      formErrors.confirm_password =
        "Confirm password did not match:Please try again...";
    }
    if (!inputValid.service_charge) {
      isValid = false;
      formErrors.service_charge = "Charges field is required!";
    }
    if (!inputValid.document_type) {
      isValid = false;
      formErrors.document_type = "Ducument field is required!";
    }
    if (!document_file) {
      isValid = false;
      formErrors.document_file = "Ducument file is required!";
    }
    if (!imageFile) {
      isValid = false;
      formErrors.imageFile = "File field is required!";
    }
    setFormError(formErrors);
    return isValid;
  };
 // -------------------User_role-function--------------------
  useEffect(() => {
    // console.log(pathname);
    if (pathname.includes("admin")) {
      setUserRole(1);
    }
    if (pathname.includes("vendor")) {
      setUserRole(2);
    }
    // if (pathname.includes("user")) {
      //   setUserRole(3);
      // }
    }, [pathname]);
     // -------------------URL--------------------
    const constant = {
      vendorUrl: "http://localhost:4000/api/users",
    };
  // -------------------Submit-data-function--------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    const Data = new FormData();
    Data.append("file", imageFile);
    Data.append("first_name", first_name);
    Data.append("last_name", last_name);
    Data.append("email", email);
    Data.append("address", address);
    Data.append("city", city);
    Data.append("mobile_no", mobile_no);
    Data.append("service_charge", service_charge);
    Data.append("document_type", document_type);
    Data.append("password", password);
    Data.append("user_role", user_role);

    // if (validate()) {
      const res = await axios.post(`${constant.vendorUrl}`, Data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res.data);

      navigate("/user/records");
    // }
  };
  return (
    <>
      <MainLayout>
        <input type="hidden" value={user_role} />
        <div className="container-fluid ">
          <div className="row h-100 align-items-center justify-content-center">
            <div className="col-sm-10">
              <div className="bg-white rounded h-100   ">
                <h5 className="text-secondary my-4">Add New Vendor</h5>

                <form className="row g-3 " onSubmit={handleSubmit}>
                  <div className="col-md-4">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleChange}
                      value={first_name}
                      name="first_name"
                    />
                    <small style={{ color: "red" }}>
                      {formErrors.first_name}
                    </small>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleChange}
                      value={last_name}
                      name="last_name"
                    />
                    <small style={{ color: "red" }}>
                      {formErrors.last_name}
                    </small>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      onChange={handleChange}
                      value={email}
                      name="email"
                    />
                    <small style={{ color: "red" }}>{formErrors.email}</small>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleChange}
                      value={address}
                      name="address"
                    />
                    <small style={{ color: "red" }}>{formErrors.address}</small>
                  </div>

                  <div className="col-md-3">
                    <label className="form-label">City</label>

                    <input
                      type="text"
                      className="form-control"
                      onChange={handleChange}
                      value={city}
                      name="city"
                    />
                    <small style={{ color: "red" }}>{formErrors.city}</small>
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">Mobile No.</label>
                    <input
                      type="number"
                      className="form-control"
                      onChange={handleChange}
                      value={mobile_no}
                      name="mobile_no"
                    />
                    <small style={{ color: "red" }}>
                      {formErrors.mobile_no}
                    </small>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      onChange={handleChange}
                      value={password}
                      name="password"
                      autoComplete="off"
                    />
                    <small style={{ color: "red" }}>
                      {formErrors.password}
                    </small>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      onChange={handleChange}
                      value={confirm_password}
                      name="confirm_password"
                      autoComplete="off"
                    />
                    <small style={{ color: "red" }}>
                      {formErrors.confirm_password}
                    </small>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Service charge</label>
                    <input
                      className="form-control"
                      type="number"
                      name="service_charge"
                      onChange={handleChange}
                      value={service_charge}
                    />
                    <small style={{ color: "red" }}>
                      {formErrors.service_charge}
                    </small>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Document</label>

                    <select
                      className="form-select"
                      // onChange={(e) => handleDocxType(e)}
                      onChange={(e) => handleChange(e)}
                      name="document_type"
                      value={document_type}
                    >
                      <option defaultValue="">Choose your Documnet type</option>
                      <option value="AADHAAR CARD">Aadhaar card</option>
                      <option value="IDENTITY CARD">Identity card</option>
                    </select>
                    <small style={{ color: "red" }}>
                      {formErrors.document_type}
                    </small>
                  </div>
                  {document_type === "AADHAAR CARD" && (
                    <div className="col-md-4 my-5">
                      <input
                        onChange={handleDocxFile}
                        name="file"
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        id="contained-button-file_1"
                      />
                      <label
                        className="lableFile"
                        htmlFor="contained-button-file_1"
                      >
                        <span className="btn   btn-danger ">
                          <i className="bi bi-file-arrow-up"></i> Upload
                          Document...
                        </span>
                      </label>
                      <div>
                        <small style={{ color: "red" }}>
                          {formErrors.document_file}
                        </small>
                      </div>
                    </div>
                  )}
                  {document_type === "IDENTITY CARD" && (
                    <div className="col-md-4 my-5">
                      <input
                        onChange={handleDocxFile}
                        name="file"
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        id="contained-button-file_2"
                      />
                      <label
                        className="lableFile"
                        htmlFor="contained-button-file_2"
                      >
                        <span className="btn  btn-danger  ">
                          <i className="bi bi-file-arrow-up"></i> Upload
                          Document...
                        </span>
                      </label>
                      <div>
                        <small style={{ color: "red" }}>
                          {formErrors.document_file}
                        </small>
                      </div>
                    </div>
                  )}

                  {/* ---------image-upload---------- */}
                  <div className="col-md-3 my-5 ">
                    <input
                      onChange={handleFile}
                      name="file"
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      id="contained-button-file"
                    />
                    <label
                      className="lableFile"
                      htmlFor="contained-button-file"
                    >
                      <span className="btn  border border-2 border-primary text-primary">
                        <i className="bi bi-file-arrow-up"></i> Upload Image...
                      </span>
                    </label>
                    <div>
                      <small className="mx-4 " style={{ color: "red" }}>
                        {formErrors.imageFile}
                      </small>
                    </div>
                  </div>
                  <div className="col ">
                    {imageFile ? (
                      <img
                        width={200}
                        height={180}
                        className="border border-5"
                        src={URL.createObjectURL(imageFile)}
                        alt={imageFile}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  {document_file ? (
                    <div
                      className="col"
                      style={{ border: "dashed 2px rgb(105, 103, 103)" }}
                    >
                      <img
                        width={335}
                        height={175}
                        className="border"
                        src={URL.createObjectURL(document_file)}
                        alt={document_file}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="col-md-12 my-1">
                    <button
                      className="btn btn-primary "
                      type="submit"
                      style={{ width: "200px" }}
                    >
                      Submit form
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Vendor;

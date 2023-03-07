import React, { useState, useEffect } from "react";
import axios from "axios";
import MainLayout from "../../../Layout/MainLayout";
import { useNavigate, useLocation } from "react-router-dom";
import NotificationAlert from "../../../../notification/index";
import Multiselect from "multiselect-react-dropdown";

const Vendor = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [responseStatus, setResponseStatus] = useState("");
  const [formErrors, setFormError] = useState({});
  const [imageFile, setImageFile] = useState("");
  const [document_file, setDocument_file] = useState("");
  const [user_role, setUserRole] = useState("");
  const [Data, SetData] = useState([]);
  const [service_name, SetService_name] = useState("");

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    city: "",
    mobile_no: "",
    service_charge: "",
    experience: "",
    area: "",
    password: "",
    confirm_password: "",
    document_type: "",
  });

  const {
    document_type,
    first_name,
    last_name,
    email,
    address,
    city,
    mobile_no,
    experience,
    area,
    service_charge,
    password,
    confirm_password,
  } = formData;
  // ------------------Onchange-event-function---------------------------------------

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };
  const handleFile = (e) => {
    const Imgfile = e.target.files[0];
    setImageFile(Imgfile);
    // console.log(Imgfile);
  };
  const handleDocxFile = (e) => {
    const docxfile = e.target.files[0];
    setDocument_file(docxfile);
    // console.log(docxfile);
  };

  // -------------------custom-validation--------------------------------------------

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
    if (!inputValid.experience) {
      isValid = false;
      formErrors.experience = "Experience field is required!";
    }
    if (!inputValid.area) {
      isValid = false;
      formErrors.area = "Area field is required!";
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
    if (!service_name) {
      isValid = false;
      formErrors.service_name = "Service Name field is required!";
    }
    setFormError(formErrors);
    return isValid;
  };
  // -------------------User_role-function--------------------------------------------
  useEffect(() => {
    // console.log(pathname);
    if (pathname.includes("admin")) {
      setUserRole(1);
    }
    if (pathname.includes("vendor")) {
      setUserRole(2);
    }
    if (pathname.includes("user")) {
      setUserRole(3);
    }
  }, [pathname]);
  // -------------------URL------------------------------------------------------------
  const constant = {
    vendorUrl: "http://localhost:4000/api/users",
    getServiceUrl: `http://localhost:4000/api/main_service`,
  };
  // -----------------------------------get-Services-Name-Data---------------------------------------------------

  const showdata = () => {
    axios.get(`${constant.getServiceUrl}`).then((res) => {
      SetData(res.data);
      // console.log(res.data);
    });
  };
  const uniqueNames = [...new Set(Data.map((item) => item.service_name))];

  useEffect(() => {
    showdata();
  }, []);
  // -------------------Submit-data-function-------------------------------------------

  const handleSubmit = async (e) => {
    e.preventDefault();
    const Data = new FormData();
    Data.append("file", imageFile);
    Data.append("file2", document_file);
    Data.append("first_name", first_name);
    Data.append("last_name", last_name);
    Data.append("email", email);
    Data.append("address", address);
    Data.append("city", city);
    Data.append("mobile_no", mobile_no);
    Data.append("experience", experience);
    Data.append("area", area);
    Data.append("service_charge", service_charge);
    Data.append("document_type", document_type);
    Data.append("password", password);
    Data.append("user_role", user_role);
    Data.append("service_name", service_name);

    if (validate()) {
      try {
        const res = await axios.post(`${constant.vendorUrl}`, Data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        // console.log(res.data);
        if (res.data.msgType === "success") {
          setTimeout(() => {
            navigate("/url/records");
          }, 1000);
        } else if (res.data.msgType === "error") {
          setResponseStatus({
            type: res.data.msgType,
            message: res.data.message,
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <MainLayout>
        <NotificationAlert message={responseStatus} />
        <input type="hidden" value={user_role} />
        <div className="container-fluid ">
          <div className="row h-100 align-items-center justify-content-center">
            <div className="col-sm-10">
              <div className="bg-white rounded h-100   ">
                <h5 className="text-secondary mt-3 mb-3">Add New Vendor</h5>

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
                      className="form-control "
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
                  <div className="col-md-3">
                    <label className="form-label">Experience</label>
                    <select
                      className="form-select"
                      onChange={handleChange}
                      name="experience"
                      value={experience}
                    >
                      <option defaultValue="">Choose year..</option>
                      <option value="1 year">1 year</option>
                      <option value="2 year">2 year</option>
                      <option value="3 year">3 year</option>
                      <option value="4 year">4 year</option>
                      <option value="5 year">5 year</option>
                      <option value="6 year">6 year</option>
                      <option value="7 year">7 year</option>
                      <option value="8 year">8 year</option>
                      <option value="9 year">9 year</option>
                      <option value="10 year">10 year</option>
                      <option value="10 year above">10 year above</option>
                    </select>
                    <small style={{ color: "red" }}>
                      {formErrors.experience}
                    </small>
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">Services</label>
                    <Multiselect
                      isObject={false}
                      options={uniqueNames}
                      selectedValues={service_name}
                      onSelect={(e) => {
                        SetService_name(e);
                      }}
                      onRemove={(e) => {
                        SetService_name(e);
                      }}
                      showCheckbox
                    />

                    <small style={{ color: "red" }}>
                      {formErrors.service_name}
                    </small>
                  </div>
                  <div className="col-md-3">
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
                  <div className="col-md-3">
                    <label className="form-label">Area</label>
                    <input
                      className="form-control"
                      type="text"
                      name="area"
                      onChange={handleChange}
                      value={area}
                    />
                    <small style={{ color: "red" }}>{formErrors.area}</small>
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
                    <label className="form-label">Document</label>

                    <select
                      className="form-select"
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
                    <div className="col-md-3 mt-5">
                      <input
                        onChange={handleDocxFile}
                        name="file2"
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        id="contained-button-file_1"
                      />
                      <label
                        className="lableFile"
                        htmlFor="contained-button-file_1"
                      >
                        <span className="btn  border border-2 border-warning text-secondary ">
                          <i className="bi bi-file-arrow-up"></i> Upload
                          Document.........
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
                    <div className="col-md-3 mt-5">
                      <input
                        onChange={handleDocxFile}
                        name="file2"
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        id="contained-button-file_2"
                      />
                      <label
                        className="lableFile"
                        htmlFor="contained-button-file_2"
                      >
                        <span className="btn border border-2 border-success text-success   ">
                          <i className="bi bi-file-arrow-up"></i> Upload
                          Document.........
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
                  <div className="col-md-3 mt-5 ">
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

                  {document_file ? (
                    <div
                      className="col-md-4 p-0 mx-5 mb-5"
                      style={{ border: "dashed 2px rgb(105, 103, 103)" }}
                    >
                      <img
                        width={307}
                        height={175}
                        className="p-1"
                        src={URL.createObjectURL(document_file)}
                        alt={document_file}
                      />
                    </div>
                  ) : (
                    ""
                  )}

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
                  <div className="col-md-12 ">
                    <button
                      className="btn btn-primary mb-2"
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

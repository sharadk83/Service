import React, { useState, useEffect } from "react";
import axios from "axios";
import MainLayout from "../../../Layout/MainLayout";
import { useNavigate, useParams } from "react-router-dom";
import NotificationAlert from "../../../../notification/index";

const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [responseStatus, setResponseStatus] = useState("");

  const [formErrors, setFormError] = useState({});
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    mobile_no: "",
    country: "",
    state: "",
    city: "",
    address: "",
  });

  const {
    first_name,
    last_name,
    gender,
    mobile_no,
    country,
    state,
    city,
    address,
  } = formData;
  // -----------------------------OnChange-Event--------------------------------------------
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // -----------------------------Custom-Validation-----------------------------------------------

  const validate = () => {
    let inputValid = formData;
    let formErrors = {};
    let isValid = true;
    const textRegex = /^[a-zA-Z]+$/;

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
    if (!inputValid.gender) {
      isValid = false;
      formErrors.gender = "Gender field is required!";
    }
    if (!inputValid.address) {
      isValid = false;
      formErrors.address = "Address field is required!";
    }
    if (!inputValid.country) {
      isValid = false;
      formErrors.country = "Country field is required!";
    }
    if (!inputValid.state) {
      isValid = false;
      formErrors.state = "State field is required!";
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
    } else if (inputValid.mobile_no.length !== 10) {
      isValid = false;
      formErrors.mobile_no = "Number must be 10 characters";
    }

    setFormError(formErrors);
    return isValid;
  };
  // ---------------------------User-getData-call-function-------------------------------------

  const getData = () => {
    const options = {
      method: "GET",
      url: `http://localhost:4000/api/users/data/${id}`,
    };
    axios
      .request(options)
      .then((response) => {
        setFormData(...response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  // -----------------------------URL-----------------------------------------------

  const constant = {
    vendorUrl: `http://localhost:4000/api/users/${id}`,
  };
  // -----------------------------User-Data-Edit-Function-----------------------------------------------

  const handleEdit = async (e) => {
    e.preventDefault();
    const payload = {
      first_name: first_name,
      last_name: last_name,
      gender: gender,
      mobile_no: mobile_no,
      country: country,
      state: state,
      city: city,
      address: address,
    };
    if (validate()) {
      try {
        const res = await axios.put(`${constant.vendorUrl}`, payload);
        console.log(res.data);
        if (res.data.msgType === "success") {
          setResponseStatus({
            type: res.data.msgType,
            message: res.data.message,
          });
          setTimeout(() => {
            navigate("/url/user_records");
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
      {/* {JSON.stringify(formData)} */}
      <MainLayout>
        <NotificationAlert message={responseStatus} />
        <div className="container-fluid ">
          <div className="row h-100 align-items-center justify-content-center">
            <div className="col-sm-10">
              <div className="bg-white rounded h-100   ">
                <h5 className="text-secondary my-4">Edit User</h5>
                <form className="row g-3 " onSubmit={(e) => handleEdit(e)}>
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
                    <label className="form-label">Gender</label>
                    <select
                      className="form-select"
                      onChange={handleChange}
                      name="gender"
                      value={gender}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                    <small style={{ color: "red" }}>
                      {formErrors.experience}
                    </small>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Country</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleChange}
                      value={country}
                      name="country"
                    />
                    <small style={{ color: "red" }}>{formErrors.country}</small>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">State</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleChange}
                      value={state}
                      name="state"
                    />
                    <small style={{ color: "red" }}>{formErrors.state}</small>
                  </div>
                  <div className="col-md-4">
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

                  <div className="col-md-4">
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

                  <div className="col-md-12 my-5">
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

export default EditUser;

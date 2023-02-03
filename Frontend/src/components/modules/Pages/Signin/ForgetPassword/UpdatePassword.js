import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NotificationAlert from "../../../../../notification/index";

const UpdatePassword = (props) => {
  const navigate = useNavigate();
  const [responseStatus, setResponseStatus] = useState("");
  const [formErrors, setFormError] = useState({});
  const [formData, setFormData] = useState({
    password: "",
    confirm_password: "",
  });
  // -----------------------------Custom-Validation-------------------------------------

  const validate = () => {
    let inputValid = formData;
    let formErrors = {};
    let isValid = true;
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
    setFormError(formErrors);
    return isValid;
  };
  // -----------------------------OnChange-Event-------------------------------------

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // -----------------------------URL-----------------------------------------------

  const constant = {
    PassUpdateUrl: "http://localhost:4000/api/forget_pwd/update_password",
  };
  // ----------------------------Password-Update-Function---------------------------

  const handleSubmit = async (e) => {
    e.preventDefault();
    let payload = JSON.stringify({
      email: props.email,
      password: formData.password,
    });
    if (validate()) {
      await axios
        .put(`${constant.PassUpdateUrl}`, payload, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response.data);
          if (response.data.msgType === "success") {
            setResponseStatus({
              type: response.data.msgType,
              message: response.data.message,
            });
            setTimeout(() => {
              navigate("/");
            }, 2000);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <input type="hidden" value={""} />
      <NotificationAlert message={responseStatus} />
      <div className="container-xxl position-relative bg-light d-flex p-0">
        <div className="container-fluid">
          <div
            className="row h-100 align-items-center justify-content-center"
            style={{ minHeight: " 100vh" }}
          >
            {/* <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4"> */}
            <div className="col-12 col-sm-8 col-md-6 col-lg-5 ">
              <div className="bg-white border rounded p-4 p-sm-5 my-4 mx-3 shw-1">
                <form>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <a href="/" className="">
                      <h3 className="text-primary">
                        <i className="fa fa-hashtag me-2"></i>DASHMIN
                      </h3>
                    </a>
                    {/* <h3>Sign In</h3> */}
                  </div>
                  <div className="form-floating mb-4">
                    <input
                      className="form-control"
                      type="password"
                      id="floatingPassword"
                      placeholder="Password"
                      name="password"
                      autoComplete="off"
                      onChange={handleChange}
                      value={formData.password}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                    <small style={{ color: "red" }}>
                      {formErrors.password}
                    </small>
                  </div>
                  <div className="form-floating mb-4">
                    <input
                      className="form-control"
                      type="password"
                      id="floatingPassword2"
                      placeholder="Password"
                      name="confirm_password"
                      autoComplete="off"
                      onChange={handleChange}
                      value={formData.confirm_password}
                    />
                    <label htmlFor="floatingPassword2">Confirm Password</label>
                    <small style={{ color: "red" }}>
                      {formErrors.confirm_password}
                    </small>
                  </div>

                  <button
                    type="button"
                    className="btn btn-secondary py-3 w-100 mb-4"
                    onClick={handleSubmit}
                  >
                    Forget Password
                  </button>

                  <p className="text-center mb-0">
                    Don't have an Account? <a href="/">Sign Up</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatePassword;

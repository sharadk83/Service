import React, { useState } from "react";
import axios from "axios";
import UpdatePassword from "./UpdatePassword";
import NotificationAlert from "../../../../../notification/index";

const ForgetPassword = () => {
  const [formErrors, setFormError] = useState({});
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [show, setShow] = useState(true);
  const [UpdatePassShow, setUpdatePassShow] = useState(true);
  const [responseStatus, setResponseStatus] = useState("");

  // -----------------------------Custom-Validation-------------------------------------
  const validate = () => {
    let formErrors = {};
    let isValid = true;
    const reg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!email) {
      isValid = false;
      formErrors.email = "Please enter Email ID";
    } else if (!reg.test(email)) {
      isValid = false;
      formErrors.email = "Please enter valid Email ID";
    }
    setFormError(formErrors);
    return isValid;
  };
  const validate_2 = () => {
    let formErrors = {};
    let isValid = true;
    if (!otp) {
      isValid = false;
      formErrors.otp = "Please enter OTP";
    }
    setFormError(formErrors);
    return isValid;
  };
  // -----------------------------OnChange-event-------------------------------------

  const handleCheck = (e) => {
    setEmail(e.target.value);
  };
  const handleOtpCheck = (e) => {
    setOtp(e.target.value);
  };
  // ----------------------------------API-Url-------------------------------------

  const constant = {
    userUrl: "http://localhost:4000/api/forget_pwd",
    otpUrl: "http://localhost:4000/api/forget_pwd/check_otp",
  };
  // ----------------------------Check-Email-Function-------------------------------------

  const handleSubmit = async (e) => {
    e.preventDefault();
    let payload = JSON.stringify({
      email: email,
    });
    if (validate()) {
      await axios
        .post(`${constant.userUrl}`, payload, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response.data);
          if (response.data.msgType === "success") {
            setTimeout(() => {
              setShow(false);
            }, 1000);
          } else if (response.data.msgType === "error") {
            setResponseStatus({
              type: response.data.msgType,
              message: response.data.message,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  // ----------------------------Check-OTP-Function-------------------------------------

  const handleOTPSubmit = async (e) => {
    e.preventDefault();
    let payload = JSON.stringify({
      email: email,
      otp: otp,
    });
    if (validate_2()) {
      await axios
        .post(`${constant.otpUrl}`, payload, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response.data);
          if (response.data.msgType === "success") {
            console.log("welcome");
            setTimeout(() => {
              setUpdatePassShow(false);
            }, 1000);
          } else if (response.data.msgType === "error") {
            setResponseStatus({
              type: response.data.msgType,
              message: response.data.message,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <NotificationAlert message={responseStatus} />

      {UpdatePassShow ? (
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

                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        name="email"
                        onChange={handleCheck}
                        value={email}
                      />
                      <label htmlFor="floatingInput">Email address</label>
                      <small style={{ color: "red" }}>{formErrors.email}</small>
                    </div>
                    {show ? (
                      <div>
                        <button
                          type="button"
                          className="btn btn-secondary py-3 w-100 mb-4"
                          onClick={handleSubmit}
                        >
                          Send OTP
                        </button>
                      </div>
                    ) : (
                      ""
                    )}

                    {!show && (
                      <>
                        <div className="form-floating mb-4">
                          <input
                            className="form-control"
                            type="text"
                            id="floatingPassword"
                            autoComplete="off"
                            onChange={handleOtpCheck}
                          />
                          <label htmlFor="floatingPassword">OTP</label>
                          <small style={{ color: "red" }}>
                            {formErrors.otp}
                          </small>
                        </div>

                        <button
                          type="button"
                          className="btn btn-secondary py-3 w-100 mb-4"
                          onClick={handleOTPSubmit}
                        >
                          Forget Password
                        </button>
                      </>
                    )}
                    <p className="text-center mb-0">
                      Don't have an Account? <a href="/">Sign Up</a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {!UpdatePassShow && <UpdatePassword email={email} />}
    </>
  );
};

export default ForgetPassword;

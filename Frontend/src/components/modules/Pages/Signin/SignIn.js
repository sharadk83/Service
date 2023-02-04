import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider } from "../../../../firebase";
import { signInWithPopup } from "firebase/auth";
import NotificationAlert from "../../../../notification/index";

const SignIn = () => {
  const navigate = useNavigate();
  const [responseStatus, setResponseStatus] = useState("");
  const [formErrors, setFormError] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  // -----------------------------Googel-Firebase-Login-------------------------------------

  const handleClick = () => {
    signInWithPopup(auth, provider).then((res) => {
      console.log(res.user);
      localStorage.setItem("user", res.user.displayName);
      localStorage.setItem("photoURL", res.user.photoURL);
      navigate("/dashboard");
    });
  };
  // -----------------------------Custom-Validation-------------------------------------

  const validate = () => {
    let inputValid = formData;
    let formErrors = {};
    let isValid = true;
    const reg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!inputValid.email) {
      isValid = false;
      formErrors.email = "Please enter Email ID";
    } else if (!reg.test(inputValid.email)) {
      isValid = false;
      formErrors.email = "Please enter valid Email ID";
    }
    if (!inputValid.password) {
      isValid = false;
      formErrors.password = "Please enter Password";
    } else if (inputValid.password.length < 6) {
      isValid = false;
      formErrors.password = "Password must be more than 6 characters";
    }
    setFormError(formErrors);
    return isValid;
  };
  // -----------------------------OnChange-event-------------------------------------

  const handleCheck = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // -----------------------------URL-------------------------------------

  const constant = {
    userUrl: "http://localhost:4000/api/signin",
  };
  // -----------------------------Submit-Button-------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    let payload = JSON.stringify({
      email: email,
      password: password,
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
            localStorage.setItem("user", response.data.user);
            navigate("/dashboard");
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

      <div className="container-xxl position-relative bg-light d-flex p-0">
        <div className="container-fluid">
          <div
            className="row h-100 align-items-center justify-content-center"
            style={{ minHeight: " 100vh" }}
          >
            {/* <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4"> */}
            <div className="col-12 col-sm-8 col-md-6 col-lg-5 ">
              <div className="bg-white border rounded p-4 p-sm-5 my-4 mx-3 shw-1">
                <form onSubmit={handleSubmit}>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <a href="/" className="">
                      <h3 className="text-primary">
                        <i className="fa fa-hashtag me-2"></i>DASHMIN
                      </h3>
                    </a>
                    <h3>Sign In</h3>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      name="email"
                      onChange={handleCheck}
                      value={formData.email}
                    />
                    <label htmlFor="floatingInput">Email address</label>
                    <small style={{ color: "red" }}>{formErrors.email}</small>
                  </div>
                  <div className="form-floating mb-4">
                    <input
                      className="form-control"
                      type="password"
                      id="floatingPassword"
                      placeholder="Password"
                      name="password"
                      autoComplete="off"
                      onChange={handleCheck}
                      value={formData.password}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                    <small style={{ color: "red" }}>
                      {formErrors.password}
                    </small>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        Check me out
                      </label>
                    </div>
                    <Link to="/forget_password">Forget Password</Link>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-secondary py-3 w-100 mb-4"
                  >
                    Sign In
                  </button>
                  <div className="d-flex my-2">
                    <Link
                      onClick={handleClick}
                      className="  mx-2  btn btn-white border "
                    >
                      <i className="fab fa-google fa-fw"></i> Login with Google
                    </Link>
                    <Link className=" mx-2 btn  border  ">
                      <i className="fab fa-facebook-f fa-fw"></i> Login with
                      Facebook
                    </Link>
                  </div>
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

export default SignIn;

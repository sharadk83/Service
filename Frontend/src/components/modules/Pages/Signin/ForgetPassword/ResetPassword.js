import React, { useState } from "react";
import axios from "axios";

// import { useNavigate,useParams } from "react-router-dom";
const ResetPassword = () => {
  // const navigate = useNavigate();
  // const {email} = useParams();
  const [show, setShow] = useState(false);
  const [formErrors, setFormError] = useState({});
  const [formData, setFormData] = useState({
    email: "",
  });
  const [randomString, setRandomString] = useState("");
  const [data, setData] = useState([]);
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

    setFormError(formErrors);
    return isValid;
  };

  const handleCheck = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      let api = "http://localhost:3500/login";
      axios.get(api).then((response) => {
        let userExist = false;
        for (let i = 0; i < response.data.length; i++) {
          if (formData.email === response.data[i].email) {
            userExist = true;
            setShow(true);
            break;
          }
        }
        generateRandomString();
        setData([...data, response.data]);

        if (!userExist) {
          alert("Wrong email!", "danger");
        }
      });
    }
  };
  const generateRandomString = () => {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setRandomString(result);

    // let payload = {
    //   uniqueID: result,
    // };
    // let api = `http://localhost:3500/login`;

   
    // axios
    //   .post(api, payload)
    //   .then((response) => {
    //     console.log(response.data);
    //     // setTimeout(() => {
    //     //    navigate("/");
    //     // }, 1000);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };
  return (
    <>
    {JSON.stringify(data) }
      <div className="container-xxl position-relative bg-light d-flex p-0">
 
        <div className="container-fluid">
          <div
            className="row h-100 align-items-center justify-content-center"
            style={{ minHeight: " 100vh" }}
          >
            <div className="col-12 col-sm-8 col-md-6 col-lg-5 ">
              <div className="bg-white border rounded p-4 p-sm-5 my-4 mx-3 ">
                <form onSubmit={handleSubmit}>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <a href="/" className="">
                      <h4 className="text-primary">
                        <i className="fa fa-hashtag me-2"></i>DASHMIN
                      </h4>
                    </a>
                    <h6>Forget Password</h6>
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
                  {show ? (
                    <div className="form-floating mb-4">
                      <input
                        className="form-control"
                        type="text"
                        id="floatingPassword"
                        autoComplete="off"
                        onChange={(event) =>
                          setRandomString(event.target.value)
                        }
                        value={randomString}
                      />
                      <label htmlFor="floatingPassword">OTP</label>
                      {/* <small style={{ color: "red" }}>
                        {formErrors.password}
                      </small> */}
                    </div>
                  ) : (
                    ""
                  )}

                  <button
                    type="submit"
                    className="btn btn-primary py-3 w-100 mb-4"
                  >
                    Continue
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

export default ResetPassword;

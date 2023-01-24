import React, { useState, useRef } from "react";
import MainLayout from "../../../Layout/MainLayout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Editor from "jodit-react";

const MainServies = () => {
  const editor = useRef(null);
  const navigate = useNavigate();
  const [formErrors, setFormError] = useState({});
  const [imgPath, setImgPath] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    title: "",
    description: "",
    start_date: "",
    end_date: "",
  });

  const validate = () => {
    let inputValid = formData;
    let formErrors = {};
    let isValid = true;
    const textRegex = /^[a-zA-Z]+$/;

    if (!inputValid.username) {
      isValid = false;
      formErrors.username = "Name field is required!";
    } else if (!textRegex.test(inputValid.username)) {
      isValid = false;
      formErrors.username = "This is not a valid Text";
    }
    if (!inputValid.title) {
      isValid = false;
      formErrors.title = "Title field is required!";
    } else if (!textRegex.test(inputValid.title)) {
      isValid = false;
      formErrors.title = "This is not a valid Text";
    }
    if (!inputValid.description) {
      isValid = false;
      formErrors.description = "Description field is required!";
    }
    // else if (!textRegex.test(inputValid.description)) {
    //   isValid = false;
    //   formErrors.description = "This is not a valid Text";
    // }
    if (!inputValid.start_date) {
      isValid = false;
      formErrors.start_date = "Date is required!";
    }
    if (!inputValid.end_date) {
      isValid = false;
      formErrors.end_date = "Date is required!";
    }
    // if (!imgPath) {
    //   isValid = false;
    //   formErrors.imgPath = "Image file is required!";
    // }
    setFormError(formErrors);
    return isValid;
  };

  const handleCheck = (e) => {
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleDescription = (e) => {
    console.log(e);
    setFormData({ ...formData, description: e });
  };
  const handleImg = (e) => {
    const file = e.target.files[0];
    setImgPath(file);
    // console.log(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let Result = { formData, imgPath };
    console.log("Result", Result);
    if (validate()) {
      const ImgData = new FormData();
      ImgData.append("File", imgPath);
      let api = "http://localhost:4000/api/main_service";
      axios
        .post(api, {
          formData,
          ImgData,
        })
        .then((res) => {
          console.log(res.data);
          navigate("/user/main_servies_record");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  return (
    <>
      <MainLayout>
        <div className="container-fluid pt-4 px-4">
          <div className="row h-100 align-items-center justify-content-center">
            <div className="col">
              <h4 className="text-primary">Main-Servies</h4>
              <div className="bg-white border border-2 rounded h-100 p-4 ">
                <form
                  className="row g-3 needs-validation"
                  onSubmit={handleSubmit}
                >
                  <div className="col-md-4">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleCheck}
                      value={formData.username}
                      name="username"
                    />
                    <small style={{ color: "red" }}>
                      {formErrors.username}
                    </small>
                  </div>
                  <div className="col-md-8">
                    <label className="form-label">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleCheck}
                      value={formData.title}
                      name="title"
                    />
                    <small style={{ color: "red" }}>{formErrors.title}</small>
                  </div>

                  <div className="col-md-12">
                    <label className="form-label">Description</label>
                    <Editor
                      tabIndex={1}
                      ref={editor}
                      onChange={(e) => handleDescription(e)}
                      value={formData.description}
                    />
                    <small style={{ color: "red" }}>
                      {formErrors.description}
                    </small>
                  </div>

                  <div className="col-md-3 ">
                    <label className="form-label">Start-Date</label>
                    <input
                      type="date"
                      className="form-control"
                      onChange={handleCheck}
                      value={formData.start_date}
                      name="start_date"
                    />
                    <small style={{ color: "red" }}>
                      {formErrors.start_date}
                    </small>
                  </div>
                  <div className="col-md-3 ">
                    <label className="form-label">End-Date</label>
                    <input
                      type="date"
                      className="form-control"
                      onChange={handleCheck}
                      value={formData.end_date}
                      name="end_date"
                    />
                    <small style={{ color: "red" }}>
                      {formErrors.end_date}
                    </small>
                  </div>
                  <div className="col-md-3 my-5 ">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImg}
                      style={{ display: "none" }}
                      id="contained-button-file"
                      name="Img"
                    />
                    <label htmlFor="contained-button-file ">
                      <span className="btn  border border-2 border-primary text-primary">
                        <i className="bi bi-file-arrow-up"></i> Upload Image...
                      </span>
                    </label>
                    <small style={{ color: "red" }}>{formErrors.imgPath}</small>
                  </div>
                  <div className="col my-4">
                    {imgPath ? (
                      <img
                        className="img-200"
                        src={URL.createObjectURL(imgPath)}
                        alt={imgPath}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary" type="submit">
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

export default MainServies;

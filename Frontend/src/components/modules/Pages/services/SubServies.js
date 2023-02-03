import React, { useState, useEffect, useRef } from "react";
import MainLayout from "../../../Layout/MainLayout";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Editor from "jodit-react";

const SubServies = () => {
  const navigate = useNavigate();
  const editor = useRef(null);
  const [Data, SetData] = useState([]);
  const [formErrors, setFormError] = useState({});
  const [formData, setFormData] = useState({
    username: "",
    document: "",
    description: "",
  });
  const [img, setImg] = useState("");

  const handleImg = (e) => {
    const file = e.target.files[0];
    // let a = URL.createObjectURL(file);
    setImg(file);
  };
  const handleCheck = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleDescription = (e) => {
    console.log(e);
    setFormData({ ...formData, description: e });
  };

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

    if (!inputValid.description) {
      isValid = false;
      formErrors.description = "Description field is required!";
    }
    // else if (!textRegex.test(inputValid.description)) {
    //   isValid = false;
    //   formErrors.description = "This is not a valid Text";
    // }
    if (!inputValid.document) {
      isValid = false;
      formErrors.document = "Document field is required!";
    }
    // if (!img) {
    //   isValid = false;
    //   formErrors.img = "Image file is required!";
    // }
    setFormError(formErrors);
    return isValid;
  };
  useEffect(() => {
    const showdata = () => {
      let Data = "";
      axios.get(Data).then((res) => {
        SetData(res.data);
        // console.log(res.data);
      });
    };
    showdata();
  }, []);
  const uniqueNames = [...new Set(Data.map((item) => item.formData.title))];

  const constant = {
    SubServiesUrl: "",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (validate()) {
      axios
        .post(`${constant.SubServiesUrl}`, { formData })
        .then((res) => {
          console.log(res.data);
          navigate("/user/sub_servies_record");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <>
      <MainLayout>
        <div className="container-fluid pt-4 ">
          <div className="row h-100 align-items-center justify-content-center">
            <div className="col">
              <h4 className="text-primary">Sub-Servies</h4>
              <div className="bg-white border border-2 rounded h-100 p-4  my-3">
                <form
                  className="row g-3 needs-validation"
                  onSubmit={handleSubmit}
                >
                  <div className="col-md-6 ">
                    <label className="form-label">Services</label>
                    <select
                      className="form-select"
                      onChange={handleCheck}
                      value={formData.document}
                      name="document"
                    >
                      <option defaultValue="">Choose services</option>
                      {uniqueNames.map((item, index) => (
                        <option key={index} value={item.id}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <small style={{ color: "red" }}>
                      {formErrors.document}
                    </small>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleCheck}
                      name="username"
                      value={formData.username}
                    />
                    <small style={{ color: "red" }}>
                      {formErrors.username}
                    </small>
                  </div>

                  <div className="col-md-12">
                    <label className="form-label">Description</label>
                    {/* <textarea
                      onChange={handleCheck}
                      type="text"
                      className="form-control"
                      rows={3}
                      name="description"
                      value={formData.description}
                    /> */}
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

                  <div className="col-md-3 my-5">
                    <input
                      className="form-control"
                      type="file"
                      accept="image/*"
                      onChange={handleImg}
                      style={{ display: "none" }}
                      id="contained-button-file"
                      multiple
                    />
                    <label
                      className="lableFile"
                      htmlFor="contained-button-file"
                    >
                      <span className="btn  border border-2 border-primary text-primary">
                        <i className="bi bi-file-arrow-up text-primary"></i>{" "}
                        Upload Image
                      </span>
                    </label>
                    <small style={{ color: "red" }}>{formErrors.img}</small>
                  </div>
                  <div className="col-md-3">
                    {img ? (
                      <img
                        className="img-200"
                        src={URL.createObjectURL(img)}
                        alt={img}
                      />
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="col-md-12">
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

export default SubServies;

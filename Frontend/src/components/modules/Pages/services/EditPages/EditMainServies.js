import React, { useState, useRef, useEffect } from "react";
import MainLayout from "../../../../Layout/MainLayout";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Editor from "jodit-react";
import NotificationAlert from "../../../../../notification/index";

const EditMainServies = () => {
  const { id } = useParams();

  const editor = useRef(null);
  const navigate = useNavigate();
  const [responseStatus, setResponseStatus] = useState("");

  const [formErrors, setFormError] = useState({});
  const [imgPath, setImgPath] = useState("");
  const [formData, setFormData] = useState({
    service_name: "",
    title: "",
    description: "",
    start_date: "",
    end_date: "",
  });
  const { service_name, title, description, start_date, end_date } = formData;

  // -------------------Custom_validation-------------------------------------

  const validate = () => {
    let inputValid = formData;
    let formErrors = {};
    let isValid = true;
    let textRegex = /^[a-zA-Z\s]+$/;
    if (!inputValid.service_name) {
      isValid = false;
      formErrors.service_name = "Name field is required!";
    } else if (!textRegex.test(inputValid.service_name)) {
      isValid = false;
      formErrors.service_name = "This is not a valid Text";
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
    if (!inputValid.start_date) {
      isValid = false;
      formErrors.start_date = "Date is required!";
    }
    if (!inputValid.end_date) {
      isValid = false;
      formErrors.end_date = "Date is required!";
    }
    if (!imgPath) {
      isValid = false;
      formErrors.imgPath = "Image file is required!";
    }
    setFormError(formErrors);
    return isValid;
  };
  // -------------------Onchange_functions---------------------------------------------

  const handleCheck = (e) => {
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleDescription = (e) => {
    setFormData({ ...formData, description: e });
  };
  const handleImg = (e) => {
    const file = e.target.files[0];
    setImgPath(file);
  };

  // -------------------URL------------------------------------------------------------
  const constant = {
    putServiceUrl: `http://localhost:4000/api/main_service/${id}`,
    getServiceUrl: `http://localhost:4000/api/main_service/data/${id}`,
  };

  // ----------------------------getData-call-function-------------------------------------

  const getData = async () => {
    await axios
      .get(`${constant.getServiceUrl}`)
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

  // -------------------Submit_function------------------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    const Data = new FormData();
    Data.append("file", imgPath);
    Data.append("service_name", service_name);
    Data.append("title", title);
    Data.append("description", description);
    Data.append("start_date", start_date);
    Data.append("end_date", end_date);

    if (validate()) {
      try {
        const res = await axios.put(`${constant.putServiceUrl}`, Data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(res.data);
        if (res.data.msgType === "success") {
          setTimeout(() => {
            navigate("/url/main_servies_record");
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
        <div className="container-fluid pt-4 px-4">
          <div className="row h-100 align-items-center justify-content-center">
            <div className="col">
              <h5 className="text-primary">Edit-Main-Servies</h5>
              <div className="bg-white rounded h-100 p-4 ">
                <form
                  className="row g-3 needs-validation"
                  onSubmit={handleSubmit}
                >
                  <div className="col-md-4 m-0">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control shadow-sm "
                        id="floatingInput"
                        placeholder="Service Name"
                        onChange={handleCheck}
                        value={service_name}
                        name="service_name"
                      />
                      <label for="floatingInput">Service Name</label>
                    </div>
                    <small style={{ color: "red" }}>
                      {formErrors.service_name}
                    </small>
                  </div>
                  <div className="col-md-8 m-0">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control shadow-sm"
                        id="floatingInput"
                        placeholder="Add Title"
                        onChange={handleCheck}
                        value={title}
                        name="title"
                      />
                      <label for="floatingInput">Add Title</label>
                    </div>
                    <small style={{ color: "red" }}>{formErrors.title}</small>
                  </div>

                  <div className="col-md-12 m-0">
                    <label className="form-label">Description</label>
                    <Editor
                      tabIndex={1}
                      ref={editor}
                      onChange={(e) => handleDescription(e)}
                      value={description}
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
                      value={start_date}
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
                      value={end_date}
                      name="end_date"
                    />
                    <small style={{ color: "red" }}>
                      {formErrors.end_date}
                    </small>
                  </div>
                  <div className="col-md-3 mt-5 ">
                    <input
                      onChange={handleImg}
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
                      <small style={{ color: "red" }}>
                        {formErrors.imgPath}
                      </small>
                    </div>
                  </div>
                  <div className="col my-4">
                    {imgPath ? (
                      <img
                        className=""
                        src={URL.createObjectURL(imgPath)}
                        alt={imgPath}
                        style={{ border: "dashed 2px rgb(105, 103, 103)" }}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-12 ">
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

export default EditMainServies;

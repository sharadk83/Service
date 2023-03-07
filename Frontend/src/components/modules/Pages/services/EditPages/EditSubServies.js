import React, { useState, useEffect, useRef } from "react";
import MainLayout from "../../../../Layout/MainLayout";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Editor from "jodit-react";

const SubServies = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const editor = useRef(null);
  const [Data, SetData] = useState([]);
  const [formErrors, setFormError] = useState({});
  const [img, setImg] = useState("");
  const [responseStatus, setResponseStatus] = useState("");
  const [formData, setFormData] = useState({
    main_service_id: "",
    service_name: "",
    description: "",
  });

  const { main_service_id, service_name, description } = formData;

  const handleImg = (e) => {
    const file = e.target.files[0];
    setImg(file);
  };
  const handleCheck = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDescription = (e) => {
    setFormData({ ...formData, description: e });
  };
  const validate = () => {
    let inputValid = formData;
    let formErrors = {};
    let isValid = true;
    // let textRegex = /^[a-zA-Z\s]+$/;

    if (!inputValid.main_service_id) {
      isValid = false;
      formErrors.main_service_id = "Services field is required!";
    }
    if (!inputValid.service_name) {
      isValid = false;
      formErrors.service_name = "Sub Services field is required!";
    }
    if (!inputValid.description) {
      isValid = false;
      formErrors.description = "Description field is required!";
    }
    if (!img) {
      isValid = false;
      formErrors.img = "Image file is required!";
    }
    setFormError(formErrors);
    return isValid;
  };

  // -------------------URL------------------------------------------------------------
  const constant = {
    putSub_ServiceUrl: `http://localhost:4000/api/sub_service/${id}`,
    getSub_ServiceUrl: `http://localhost:4000/api/sub_service/data/${id}`,
    servicesUrl: "http://localhost:4000/api/main_service",
  };

  // ----------------------------getData-call-function-------------------------------------

  const getData = async () => {
    await axios
      .get(`${constant.getSub_ServiceUrl}`)
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
  // ----------------------------show-services-------------------------------------

  const showdata = async () => {
    try {
      const responce = await axios.get(`${constant.servicesUrl}`);
      SetData(responce.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    showdata();
  }, []);

  // -------------------Submit_function------------------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    const Data = new FormData();
    Data.append("file", img);
    Data.append("main_service_id", main_service_id);
    Data.append("sub_service_name", service_name);
    Data.append("description", description);
    if (validate()) {
      try {
        const res = await axios.put(`${constant.putSub_ServiceUrl}`, Data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(res.data);
        if (res.data.msgType === "success") {
          setTimeout(() => {
            navigate("/url/sub_servies_record");
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
        <div className="container-fluid ">
          <div className="row h-100 align-items-center justify-content-center">
            <div className="col">
              <h4 className="text-primary mt-3">Edit Sub-Servies</h4>
              <div className="bg-white  rounded h-100 p-4  ">
                <form
                  className="row g-3 needs-validation"
                  onSubmit={handleSubmit}
                >
                  <div className="col-md-6 ">
                    <label className="form-label">Services</label>
                    <select
                      className="form-select"
                      onChange={handleCheck}
                      value={main_service_id}
                      name="main_service_id"
                    >
                      <option defaultValue="">Choose services</option>
                      {Data.map((item, index) => (
                        <option key={index} value={item.id}>
                          {item.service_name}
                        </option>
                      ))}
                    </select>
                    <small style={{ color: "red" }}>
                      {formErrors.service_name}
                    </small>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleCheck}
                      name="service_name"
                      value={service_name}
                    />
                    <small style={{ color: "red" }}>
                      {formErrors.service_name}
                    </small>
                  </div>

                  <div className="col-md-12">
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

                  <div className="col-md-3 mt-5">
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
                    <div>
                      <small style={{ color: "red" }}>{formErrors.img}</small>
                    </div>
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

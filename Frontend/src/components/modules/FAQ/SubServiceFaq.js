import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";

const SubServiceFaq = () => {
  const navigate = useNavigate();
  const [details, SetDetails] = useState([]);

  const [responseStatus, setResponseStatus] = useState("");
  const [formErrors, setFormError] = useState({});

  const [sub_service_id, setSub_service_id] = useState("");
  const [sub_serviceName, setSub_serviceName] = useState("");
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
  });

  const { question, answer } = formData;
  // ------------------Onchange-event-function---------------------------------------

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceId = (e) => {
    setSub_service_id(e.target.value);
    const result = details.find((item) => item.id === parseInt(e.target.value));
    setSub_serviceName(result.service_name);
  };
  // console.log("state", sub_serviceName);
  // -------------------custom-validation--------------------------------------------

  const validate = () => {
    let inputValid = formData;
    let formErrors = {};
    let isValid = true;

    if (!sub_service_id) {
      isValid = false;
      formErrors.sub_service_id = "field is required!";
    }
    if (!inputValid.question) {
      isValid = false;
      formErrors.question = "field is required!";
    }
    if (!inputValid.answer) {
      isValid = false;
      formErrors.answer = "field is required!";
    }

    setFormError(formErrors);
    return isValid;
  };

  // -------------------URL------------------------------------------------------------
  const constant = {
    SaqUrl: "http://localhost:4000/api/sub_service_faq",
    Sub_Service_Name: "http://localhost:4000/api/sub_service",
  };

  // -------------------Submit-data-function-------------------------------------------

  const showdata = async () => {
    try {
      const res = await axios.get(`${constant.Sub_Service_Name}`);
      SetDetails(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    showdata();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let payload = {
      sub_service_id: sub_service_id,
      sub_service_name: sub_serviceName,
      service_type: "sub_service",
      question: question,
      answer: answer,
    };
    if (validate()) {
      try {
        const res = await axios.post(`${constant.SaqUrl}`, payload, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.data.msgType === "success") {
          setTimeout(() => {
            navigate("/url/faq-records");
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
            <div className="col-sm-10">
              <div className="bg-white rounded h-100   ">
                <h5 className="text-secondary mt-3 mb-3">Sub-service FAQ</h5>

                <form className="row g-3 mt-3">
                  <div className="col-md-4 ">
                    <label className="form-label">
                      <b>Category</b>
                    </label>

                    <select
                      className="form-select"
                      onChange={handleServiceId}
                      value={sub_service_id}
                    >
                      <option defaultValue={""}></option>
                      {details.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.service_name}
                        </option>
                      ))}
                    </select>

                    {formErrors.sub_service_id && (
                      <small style={{ color: "red" }}>
                        {formErrors.sub_service_id}
                      </small>
                    )}
                  </div>
                  <div>
                    <div className="col-md-8">
                      <label className="form-label">
                        <b>Question</b>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        onChange={handleChange}
                        value={question}
                        name="question"
                      />
                      <small style={{ color: "red" }}>
                        {formErrors.question}
                      </small>
                    </div>

                    <div className="col-md-8 mt-2">
                      <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label"
                      >
                        <b>Answer</b>
                      </label>
                      <textarea
                        onChange={handleChange}
                        value={answer}
                        name="answer"
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="5"
                      ></textarea>
                      <small style={{ color: "red" }}>
                        {formErrors.answer}
                      </small>
                    </div>
                  </div>
                  <div className="col-md-12 ">
                    <button
                      className="btn btn-primary mb-2"
                      type="submit"
                      style={{ width: "200px" }}
                      onClick={handleSubmit}
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

export default SubServiceFaq;

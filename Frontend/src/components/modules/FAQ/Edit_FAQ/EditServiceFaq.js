import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../../../Layout/MainLayout";

const EditServiceFaq = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  // const [details, SetDetails] = useState([]);

  const [responseStatus, setResponseStatus] = useState("");
  const [formErrors, setFormError] = useState({});
  const [formData, setFormData] = useState({
    service_name: "",
    question: "",
    answer: "",
  });
  const { service_name, question, answer } = formData;
  // ------------------Onchange-event-function---------------------------------------

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };

  // -------------------custom-validation--------------------------------------------

  const validate = () => {
    let inputValid = formData;
    let formErrors = {};
    let isValid = true;

    if (!inputValid.question) {
      isValid = false;
      formErrors.question = "field is required!";
    }
    if (!inputValid.answer) {
      isValid = false;
      formErrors.answer = " field is required!";
    }

    setFormError(formErrors);
    return isValid;
  };

  // -------------------URL------------------------------------------------------------
  const constant = {
    UpdateSaqUrl: `http://localhost:4000/api/service_faq/${id}`,
    getSaqUrl: `http://localhost:4000/api/service_faq/data/${id}`,
  };

  // -------------------Submit-data-function-------------------------------------------

  const getData = async () => {
    await axios
      .get(`${constant.getSaqUrl}`)
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    let payload = {
      id: id,
      question: question,
      answer: answer,
    };
    if (validate()) {
      try {
        const res = await axios.put(`${constant.UpdateSaqUrl}`, payload, {
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
                <h5 className="text-secondary mt-3 mb-3">Update FAQ</h5>

                <form className="row g-3 mt-3">
                  <div className="col-md-4 ">
                    <label className="form-label">
                      <b>Category</b>
                    </label>

                    <input
                      className="form-control"
                      type="text"
                      value={service_name}
                      name="service_name"
                      disabled
                    />
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
                      Update
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

export default EditServiceFaq;

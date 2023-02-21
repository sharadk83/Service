import React, { useState, useEffect } from "react";
import axios from "axios";
import MainLayout from "../../../Layout/MainLayout";
import { useNavigate, useParams } from "react-router-dom";
import NotificationAlert from "../../../../notification/index";
import Multiselect from "multiselect-react-dropdown";

const EditVendor = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [responseStatus, setResponseStatus] = useState("");
  const [Data, SetData] = useState([]);
  const [formErrors, setFormError] = useState({});
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    address: "",
    city: "",
    mobile_no: "",
    document: "",
    service_charge: "",
    experience: "",
    area: "",
  });
  const [service_name, SetService_name] = useState("");

  const {
    first_name,
    last_name,
    address,
    city,
    mobile_no,
    service_charge,
    experience,
    area,
  } = formData;
  // -----------------------------OnChange-Event--------------------------------------------
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // -----------------------------Custom-Validation-----------------------------------------------

  const validate = () => {
    let inputValid = formData;
    let formErrors = {};
    let isValid = true;
    const textRegex = /^[a-zA-Z]+$/;

    if (!inputValid.first_name) {
      isValid = false;
      formErrors.first_name = "Firstname field is required!";
    } else if (!textRegex.test(inputValid.first_name)) {
      isValid = false;
      formErrors.first_name = "This is not a valid Text";
    }
    if (!inputValid.last_name) {
      isValid = false;
      formErrors.last_name = "Lastname field is required!";
    } else if (!textRegex.test(inputValid.last_name)) {
      isValid = false;
      formErrors.last_name = "This is not a valid Text";
    }
    if (!inputValid.address) {
      isValid = false;
      formErrors.address = "Address field is required!";
    }
    if (!inputValid.city) {
      isValid = false;
      formErrors.city = "City field is required!";
    } else if (!textRegex.test(inputValid.city)) {
      isValid = false;
      formErrors.city = "This is not a valid Text";
    }
    if (!inputValid.mobile_no) {
      isValid = false;
      formErrors.mobile_no = "Number field is required!";
    } else if (inputValid.mobile_no.length !== 10) {
      isValid = false;
      formErrors.mobile_no = "Number must be 10 characters";
    }
    if (!inputValid.service_charge) {
      isValid = false;
      formErrors.service_charge = "Charges field is required!";
    }
    if (!inputValid.experience) {
      isValid = false;
      formErrors.experience = "Experience field is required!";
    }
    if (!inputValid.area) {
      isValid = false;
      formErrors.area = "Area field is required!";
    }
    if (!service_name) {
      isValid = false;
      formErrors.service_name = "Service Name field is required!";
    }
    setFormError(formErrors);
    return isValid;
  };

  // -----------------------------URL-----------------------------------------------

  const constant = {
    vendorUrl: `http://localhost:4000/api/users/${id}`,
    getVendorUrl: `http://localhost:4000/api/users/data/${id}`,
    getServiceUrl: `http://localhost:4000/api/main_service`,
  };

  // ---------------------------User-getData-call-function-------------------------------------

  const getData = async () => {
    await axios
      .get(`${constant.getVendorUrl}`)
      .then((response) => {
        console.log(response.data);

        setFormData(...response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  // -----------------------------------get-Services-Name-Data---------------------------------------------------

  const showdata = () => {
    axios.get(`${constant.getServiceUrl}`).then((res) => {
      SetData(res.data);
      // console.log(res.data);
    });
  };
  const uniqueNames = [...new Set(Data.map((item) => item.service_name))];

  useEffect(() => {
    showdata();
  }, []);
  // -----------------------------User-Data-Edit-Function-----------------------------------------------

  const handleEdit = async (e) => {
    e.preventDefault();

    let payload = {
      first_name: first_name,
      last_name: last_name,
      address: address,
      city: city,
      mobile_no: mobile_no,
      service_charge: service_charge,
      experience: experience,
      area: area,
      service_name: service_name,
    };
    if (validate()) {
      try {
        const res = await axios.put(`${constant.vendorUrl}`, payload, {
          headers: {
            "Content-Type": "application/json",
            // "Content-Type": "multipart/form-data",
          },
        });
        console.log(res.data);
        if (res.data.msgType === "success") {
          setResponseStatus({
            type: res.data.msgType,
            message: res.data.message,
          });
          setTimeout(() => {
            navigate("/url/records");
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
      {/* {JSON.stringify(formData)} */}
      <MainLayout>
        <NotificationAlert message={responseStatus} />

        <div className="container-fluid ">
          <div className="row h-100 align-items-center justify-content-center">
            <div className="col-sm-10">
              <div className="bg-white rounded h-100   ">
                <h5 className="text-secondary my-4">Edit Vendor</h5>
                <form className="row g-3 " onSubmit={(e) => handleEdit(e)}>
                  <div className="col-md-4">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleChange}
                      value={first_name}
                      name="first_name"
                    />
                    <small style={{ color: "red" }}>
                      {formErrors.first_name}
                    </small>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleChange}
                      value={last_name}
                      name="last_name"
                    />
                    <small style={{ color: "red" }}>
                      {formErrors.last_name}
                    </small>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">City</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleChange}
                      value={city}
                      name="city"
                    />
                    <small style={{ color: "red" }}>{formErrors.city}</small>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleChange}
                      value={address}
                      name="address"
                    />
                    <small style={{ color: "red" }}>{formErrors.address}</small>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Area</label>
                    <input
                      className="form-control"
                      type="text"
                      name="area"
                      onChange={handleChange}
                      value={area}
                    />
                    <small style={{ color: "red" }}>{formErrors.area}</small>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Mobile No.</label>
                    <input
                      type="number"
                      className="form-control"
                      onChange={handleChange}
                      value={mobile_no}
                      name="mobile_no"
                    />
                    <small style={{ color: "red" }}>
                      {formErrors.mobile_no}
                    </small>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Experience</label>
                    <select
                      className="form-select"
                      onChange={handleChange}
                      name="experience"
                      value={experience}
                    >
                      <option value="1_year">1 year</option>
                      <option value="2_year">2 year</option>
                      <option value="3_year">3 year</option>
                      <option value="4_year">4 year</option>
                      <option value="5_year">5 year</option>
                      <option value="6_year">6 year</option>
                      <option value="7_year">7 year</option>
                      <option value="8_year">8 year</option>
                      <option value="9_year">9 year</option>
                      <option value="10_year">10 year</option>
                      <option value="10_year above">10 year above</option>
                    </select>
                    <small style={{ color: "red" }}>
                      {formErrors.experience}
                    </small>
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">Services</label>

                    <Multiselect
                      isObject={false}
                      options={uniqueNames}
                      selectedValues={service_name}
                      onSelect={(e) => {
                        SetService_name(e);
                      }}
                      onRemove={(e) => {
                        SetService_name(e);
                      }}
                      showCheckbox
                    />

                    <small style={{ color: "red" }}>
                      {formErrors.service_name}
                    </small>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Service charge</label>
                    <input
                      className="form-control"
                      type="number"
                      name="service_charge"
                      onChange={handleChange}
                      value={service_charge}
                    />
                    <small style={{ color: "red" }}>
                      {formErrors.service_charge}
                    </small>
                  </div>

                  <div className="col-md-12 my-5">
                    <button
                      className="btn btn-primary "
                      type="submit"
                      style={{ width: "200px" }}
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

export default EditVendor;

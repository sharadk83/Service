import React, { useState, useEffect } from "react";
import axios from "axios";
import MainLayout from "../../../Layout/MainLayout";
import { useNavigate, useParams } from "react-router-dom";

const EditVendor = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formErrors, setFormError] = useState({});
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    address: "",
    city: "",
    mobile_no: "",
    document: "",
    service_charge: "",
  });

  const { first_name, last_name, address, city, mobile_no, service_charge } =
    formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
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
    setFormError(formErrors);
    return isValid;
  };

  useEffect(() => {
    const getData = () => {
      const options = {
        method: "GET",
        url: `http://localhost:4000/api/users/data/${id}`,
      };
      axios
        .request(options)
        .then(function (response) {
          setFormData(...response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    getData();
  }, [id]);

  const constant = {
    vendorUrl: `http://localhost:4000/api/users/${id}`,
  };
  const handleEdit = async (e) => {
    e.preventDefault();
    const payload = {
      first_name: first_name,
      last_name: last_name,
      address: address,
      city: city,
      mobile_no: mobile_no,
      service_charge: service_charge,
    };
    if (validate()) {
      const res = await axios.put(`${constant.vendorUrl}`, payload);
      console.log(res.data);
      navigate("/user/records");
    }
  };
  return (
    <>
      {/* {JSON.stringify(formData)} */}
      <MainLayout>
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

                  <div className="col-md-3">
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

                  <div className="col-md-3">
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

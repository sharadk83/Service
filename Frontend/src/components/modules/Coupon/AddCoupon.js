import React, { useState } from "react";
import MainLayout from "../../Layout/MainLayout";
import axios from "axios";

const AddCoupon = () => {
  const [formErrors, setFormError] = useState({});
  const [coupon, setCoupon] = useState({ code: "", discount: 0 });
  const [category, setCategory] = useState({ name: "", discount: 0 });
  const [percentage, setPercentage] = useState(0);

  const handleCouponChange = (event) => {
    setCoupon({ ...coupon, [event.target.name]: event.target.value });
  };
  const handleCategoryChange = (event) => {
    setCategory({ ...category, [event.target.name]: event.target.value });
  };
  const handlePercentageChange = (event) => {
    setPercentage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let payload = {
      coupon: coupon,
      category: category,
      percentage: percentage,
    };
    let apiUrl = "";
    if (validate()) {
      axios
        .post(apiUrl, { payload })
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const validate = () => {
    let formErrors = {};
    let isValid = true;
    if (!coupon.code) {
      isValid = false;
      formErrors.code = "Field is required!";
    }
    if (!category.name) {
      isValid = false;
      formErrors.name = "Field is required!";
    }
    if (!percentage) {
      isValid = false;
      formErrors.percentage = "Field is required!";
    }
    setFormError(formErrors);
    return isValid;
  };

  return (
    <>
      <MainLayout>
        <div className="container-fluid pt-4 px-4 ">
          <div className="row h-100 align-items-center justify-content-center">
            {/* <h5 className="text-secondary">Coupon List</h5> */}
            {/* <div className="mr-l ">
                <a
                  href="/"
                  className=" mx-3 d-flex align-items-center text-primary "
                >
                  <h2>
                    <i className="bi bi-plus mx-2 text-primary"></i>
                  </h2>
                  <h5 className="text-primary">Add Coupon</h5>
                </a>
              </div> */}
            <div className="col">
              <div className="bg-white rounded  h-100 p-4 ">
                <form className="" onSubmit={handleSubmit}>
                  <h5 className="text-secondary">Add Coupon</h5>

                  <div className="col-md-6 my-3">
                    <label className="form-label"> Category</label>
                    <i className=" mx-2 bi bi-question-circle-fill"></i>
                    <select
                      className="form-select"
                      type="text"
                      name="name"
                      value={category.name}
                      onChange={handleCategoryChange}
                    >
                      <option defaultValue=""></option>
                      <option>Main Service</option>
                      <option>Sub Service</option>
                    </select>
                    <small style={{ color: "red" }}>{formErrors.name}</small>
                  </div>
                  <div className="col-md-6 my-3">
                    <label className="form-label">Sub Category</label>
                    <i className=" mx-2 bi bi-question-circle-fill"></i>
                    <select
                      className="form-select"
                      type="text"
                      name="name"
                      value={category.name}
                      onChange={handleCategoryChange}
                    >
                      <option defaultValue=""></option>
                      <option>Main Service</option>
                      <option>Sub Service</option>
                    </select>
                    <small style={{ color: "red" }}>{formErrors.name}</small>
                  </div>
                  <div className="col-md-6 my-3">
                    <label className="form-label"> Percentage Discount</label>
                    <i className=" mx-2 bi bi-question-circle-fill"></i>
                    <input
                      className="form-control"
                      type="number"
                      name="percentage"
                      value={percentage}
                      onChange={handlePercentageChange}
                    />
                    <small style={{ color: "red" }}>
                      {formErrors.percentage}
                    </small>
                  </div>
                  <div className="col-md-6 my-3 ">
                    <label className="form-label"> Coupon Code</label>
                    <i className=" mx-2 bi bi-question-circle-fill"></i>
                    <input
                      className="form-control"
                      name="code"
                      value={coupon.code}
                      onChange={handleCouponChange}
                    />
                    <small style={{ color: "red" }}>{formErrors.code}</small>
                  </div>
                  <div className="col-md-6 my-3 ">
                    <label className="form-label"> Description</label>
                    <i className=" mx-2 bi bi-question-circle-fill"></i>
                    <input
                      className="form-control"
                      name="code"
                      value={coupon.code}
                      onChange={handleCouponChange}
                    />
                    <small style={{ color: "red" }}>{formErrors.code}</small>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary" type="submit">
                      Apply
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

export default AddCoupon;

import React, { useState } from "react";
import axios from "axios";
import MainLayout from "../../Layout/MainLayout";

const AddNewBenner = () => {
  const [file, setfile] = useState("");
  const [formErrors, setFormError] = useState({});

  const handlefile = (e) => {
    setfile(e.target.files[0]);
  };

  const constant = {
    benner_Url: "http://localhost:4000/api/add_benner",
  };

  const validate = () => {
    let formErrors = {};
    let isValid = true;

    if (!file) {
      isValid = false;
      formErrors.file = "Image file is required!";
    }
    setFormError(formErrors);
    return isValid;
  };

  const handleUpload = async () => {
    const data = new FormData();
    data.append("file", file);
    if (validate()) {
      try {
        const res = await axios.put(`${constant.benner_Url}`, data);
        const Result = await res.data;
        console.log(Result);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <>
      <MainLayout>
        <div className="container-fluid pt-2 px-2">
          <div className="row  align-items-center justify-content-center">
            <div className="col">
              <h4 className="">Upload Benner</h4>
              <div
                className="bg-light rounded p-4  "
                style={{ border: "dashed 2px rgb(105, 103, 103)" }}
              >
                <center>
                  <div style={{ fontSize: "20px" }}>Drop files to upload</div>
                  <small>or</small>
                  <div className="col ">
                    <input
                      onChange={handlefile}
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
                      <span className="btn rounded-1 my-2 mx-3 bg-secondary text-white">
                        <i className="bi bi-file-arrow-up"></i> Upload Image
                      </span>
                    </label>
                  </div>
                  <small style={{ color: "red" }}>{formErrors.file}</small>
                </center>
              </div>
              <button
                type="button"
                className="btn btn-lg btn-primary text-white my-2"
                onClick={handleUpload}
              >
                Submit Benner
              </button>

              {file ? (
                <div className="  my-3">
                  <center>
                    <img
                      width={700}
                      height={350}
                      src={URL.createObjectURL(file)}
                      alt={file}
                    />
                  </center>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default AddNewBenner;

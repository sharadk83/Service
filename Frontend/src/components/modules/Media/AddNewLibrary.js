import React, { useState } from "react";
import MainLayout from "../../Layout/MainLayout";
import axios from "axios";

const AddNewLibrary = () => {
  const [file, setfile] = useState("");

  const handlefile = (e) => {
    setfile(e.target.files[0]);

    handleUpload();
  };
  const handleUpload = async () => {
    let api = "http://localhost:1000/library";
    // const data = new FormData();
    // data.append("file", file);
    try {
      const res = await axios.post(api, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: file,
      });
      const Result = await res.data;
      console.log(Result);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <MainLayout>
        <div className="container-fluid pt-4 px-4">
          <div className="row h-100 align-items-center justify-content-center">
            <div className="col">
              <h4 className="">Upload New Media</h4>
              <div
                className="bg-light rounded h-100 p-4  "
                style={{ border: "dashed 2px rgb(105, 103, 103)" }}
              >
                <center>
                  <div style={{ fontSize: "22px" }}>Drop files to upload</div>
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
                      <span className="btn rounded-1 my-4 mx-3 bg-secondary text-white">
                        <i className="bi bi-file-arrow-up"></i> Upload Image
                      </span>
                    </label>
                  </div>
                </center>
              </div>
              <small>Maximum upload file size: 40 MB.</small>

              {file ? (
                <div className="col border my-3">
                  <img
                    width={100}
                    height={100}
                    src={URL.createObjectURL(file)}
                    alt={file}
                  />
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

export default AddNewLibrary;

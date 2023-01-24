import React, { useState, useRef } from "react";
import MainLayout from "../../Layout/MainLayout";
import Editor from "jodit-react";
import axios from "axios";

const EditPages = () => {
  const editor = useRef(null);
  const [formErrors, setFormError] = useState({});
  const [date] = useState(new Date());
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const formattedDate = new Intl.DateTimeFormat("en-IN", options).format(date);

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    content: "",
  });
  const { author, content, title } = formData;
  const [Image, setImage] = useState("");
  //  -----All onchange Event-----//
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleContent = (e) => {
    setFormData({ ...formData, content: e });
  };
  const handleImg = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  //----All submit Data-----//
  const handleSubmit = (e) => {
    e.preventDefault();

    //   const ImgData = new FormData();
    //   ImgData.append("File", imgPath);
    let api = "http://localhost:2000/pages";
    if (validate()) {
      axios
        .post(api, {
          content: content,
          author: author,
          title: title,
          formattedDate: formattedDate,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const validate = () => {
    let inputValid = formData;
    let formErrors = {};
    let isValid = true;
    const textRegex = /^[a-zA-Z]+$/;

    if (!inputValid.author) {
      isValid = false;
      formErrors.author = "Field is required!";
    } else if (!textRegex.test(inputValid.author)) {
      isValid = false;
      formErrors.author = "This is not a valid Text";
    }
    if (!inputValid.title) {
      isValid = false;
      formErrors.title = "Field is required!";
    } else if (!textRegex.test(inputValid.title)) {
      isValid = false;
      formErrors.title = "This is not a valid Text";
    }
    if (!inputValid.content) {
      isValid = false;
      formErrors.content = " Field is required!";
    }
    // if (!imgPath) {
    //   isValid = false;
    //   formErrors.imgPath = "Image file is required!";
    // }
    setFormError(formErrors);
    return isValid;
  };

  return (
    <>
      <MainLayout>
        <div className="container-fluid">
          <div className="row h-100 align-items-center justify-content-center">
            <div className="col">
              <div className="bg-white h-100   ">
                {/* Topbar-Content */}
                <div className=" d-flex align-items-center my-3 ">
                  <h6 className="mx-2 text-primary">Add New Page</h6>
                  <button
                    style={{ marginLeft: "750px" }}
                    className="  btn  rounded-0 border"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Preview
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    className="   btn btn-primary rounded-0 text-white"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Update
                  </button>
                </div>
                <hr />
                <div className="d-flex my-2">
                  <div className="col-md-4 mx-2">
                    <label className="form-lable  mx-3 "> Title</label>
                    <input
                      className="form-control mx-3 my-2"
                      onChange={handleChange}
                      value={formData.title}
                      name="title"
                      placeholder="Add Title"
                    ></input>
                    <small style={{ color: "red" }}>{formErrors.title}</small>
                  </div>
                  <div className="col-md-4">
                    <label className="form-lable  mx-3  "> Author</label>
                    <input
                      className="form-control mx-3 my-2"
                      onChange={handleChange}
                      value={formData.author}
                      name="author"
                      placeholder="Author Name "
                    ></input>
                    <small style={{ color: "red" }}>{formErrors.author}</small>
                  </div>
                </div>
                <div className=" justify-content-center d-flex ">
                  <div className=" col mx-3  ">
                    <Editor
                      tabIndex={1}
                      ref={editor}
                      onChange={(e) => handleContent(e)}
                      value={formData.content}
                    />
                    <small style={{ color: "red" }}>{formErrors.content}</small>
                  </div>
                  <div className="Sidebar-2">
                    {/* -----Upload Image----- */}
                    <div className="col ">
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
                        <span className="btn my-4 mx-3 bg-info text-white">
                          <i className="bi bi-file-arrow-up"></i> Upload Image
                        </span>
                      </label>
                    </div>

                    {/* .....Show Image..... */}
                    <div className="col my-4 mx-1">
                      {Image ? (
                        <img
                          width={180}
                          height={180}
                          className="img-200"
                          src={URL.createObjectURL(Image)}
                          alt={Image}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ----------Show-Content---------- */}
        <div
          className="modal fade "
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className=" modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Preview Page
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div
                  dangerouslySetInnerHTML={{
                    __html: content,
                  }}
                ></div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default EditPages;

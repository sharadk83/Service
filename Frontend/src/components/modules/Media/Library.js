import React from "react";
import MainLayout from "../../Layout/MainLayout";
import { Link } from "react-router-dom";

const Library = () => {
  return (
    <>
      <MainLayout>
        {/* <div className="container-fluid pt-4 px-4">
        <div className="row h-100 align-items-center justify-content-center">
          <div className="col">
            <div className="bg-white rounded h-100 p-4 border ">
              <h5 className="text-primary">Add New Vendor</h5>
            </div>
          </div>
        </div>
      </div> */}

        <div className="col mx-3 my-4 d-flex align-items-center  ">
          <h4>Media Library</h4>
          <Link
            to="/user/add-new-library"
            className="btn btn-sm  bg-white border text-primary  mx-2"
          >
            <b>Add New</b>
          </Link>
        </div>
        <div className="col mx-3 my-4  d-flex align-items-center font-sm border  border-2  ">
          <h4 className="my-2 mx-2">
            <Link>
              <i className="bi bi-list-task"></i>
            </Link>
          </h4>
          <h4 className=" my-2 mx-2 ">
            <Link>
              <i className="bi bi-grid"></i>
            </Link>
          </h4>
          <div className=" my-2 mx-2 ">
            <select
              className="form-select rounded-1"
              //   onChange={handleChange}
              //   value={formData.author}
              //   name="author"
            >
              <option defaultValue="">All media items</option>
              <option value="Author">Author</option>
              <option value="Editor">Editor</option>
              <option value="Subscriber">Subscriber</option>
              <option value="Administrator">Administrator</option>
            </select>
          </div>
          <div className="  my-2 mx-2 ">
            <select
              className="form-select rounded-1  "
              //   onChange={handleChange}
              //   value={formData.author}
              //   name="author"
            >
              <option defaultValue="">All Dates</option>
              <option value="Author">Author</option>
              <option value="Editor">Editor</option>
              <option value="Subscriber">Subscriber</option>
              <option value="Administrator">Administrator</option>
            </select>
          </div>
          <div className="my-2 mx-1">
            <button className="btn btn-light border">Filter</button>
          </div>
          <div style={{ marginLeft: "250px" }}>
            <div className="my-2 mx-2 d-flex align-items-center  ">
              <label className="form-label mx-2">Search</label>
              <input className="form-control rounded-1"></input>
            </div>
          </div>
        </div>
        {/* <div className="col mx-3  d-flex align-items-center font-sm   ">
          <Link
            to="/user/add-new-page"
            className="btn btn-sm  bg-white border text-primary  "
          >
            <b>Add New</b>
          </Link>
          <Link
            to="/user/add-new-page"
            className="btn btn-sm  bg-white border text-primary mx-1  "
          >
            <b>Add New</b>
          </Link>
          <Link
            to="/user/add-new-page"
            className="btn btn-sm  bg-white border text-primary "
          >
            <b>Add New</b>
          </Link>
        </div> */}
        <div className="my-2 mx-3 ">
          <table className="table table-striped bg-white border font-sm">
            <thead>
              <tr>
                <th scope="col">
                  <input className="form-check-input" type="checkbox" />
                </th>
                <th scope="col">Title</th>
                <th scope="col">Role</th>
                <th scope="col">
                  <i className="bi bi-chat-left-fill"></i>
                </th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input className="form-check-input" type="checkbox" />
                </td>
                <td>aaaaa</td>
                <td>bbbbb</td>
                <td>ccccc</td>
                <td>ddddd</td>
              </tr>
              <tr>
                <td>
                  <input className="form-check-input" type="checkbox" />
                </td>
                <td>aaaaa</td>
                <td>bbbbb</td>
                <td>ccccc</td>
                <td>ddddd</td>
              </tr>
              <tr>
                <td>
                  <input className="form-check-input" type="checkbox" />
                </td>
                <td>aaaaa</td>
                <td>bbbbb</td>
                <td>ccccc</td>
                <td>ddddd</td>
              </tr>
            </tbody>
          </table>
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
                // dangerouslySetInnerHTML={{
                //   __html: preview,
                // }}
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

export default Library;

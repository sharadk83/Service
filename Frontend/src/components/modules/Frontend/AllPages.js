import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import axios from "axios";

const AllPages = () => {
  const [Data, setData] = useState([]);
  const [preview, setPreview] = useState([]);
  useEffect(() => {
    let api = "";
    async function fetchData() {
      try {
        const response = await axios.get(api);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const handlePreview = async (id) => {
    let api = `http://localhost:2000/pages/${id}`;
    try {
      const response = await axios.get(api);
      setPreview(response.data.content);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <MainLayout>
     
        <div className="">
          <div className="col mx-3 my-4 d-flex align-items-center  ">
            <h5>Pages</h5>
            <Link
              to="/user/add-new-page"
              className="btn btn-sm  bg-white border text-primary  mx-2"
            >
              <b>Add New</b>
            </Link>
          </div>
          <div className="col mx-3  d-flex align-items-center font-sm   ">
            <p>
              <b>All </b>
            </p>
            <p className="mx-1"> (10)</p>
            <p>|</p>
            <Link className="mx-1">
              <p>Published</p>
            </Link>
            <p className="mx-1"> (10)</p>
            <p>|</p>
            <Link className="mx-1">
              <p>Draft</p>
            </Link>
            <p className="mx-1"> (10)</p>
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
                {Data.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>
                        <input className="form-check-input" type="checkbox" />
                      </td>
                      <td>
                        <Link
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                          onClick={() => handlePreview(item.id)}
                        >
                          {item.title}
                        </Link>
                      </td>
                      <td>{item.author}</td>
                      <td>--</td>
                      <td>{item.formattedDate}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
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
                    __html: preview,
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

export default AllPages;

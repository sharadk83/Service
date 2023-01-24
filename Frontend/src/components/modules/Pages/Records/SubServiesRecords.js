import React, { useState, useEffect } from "react";
import MainLayout from "../../../Layout/MainLayout";
import axios from "axios";
import { Link } from "react-router-dom";
import ImgNot from "../../../../Images/not-found.png";

// import _ from "lodash";

const SubServiesRecords = () => {
  const [details, SetDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(3);

  // Get current data
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = details.slice(indexOfFirstData, indexOfLastData);

  // Change page
  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };
  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(details.length / dataPerPage); i++) {
    pageNumbers.push(i);
  }
  useEffect(() => {
    showdata();
  }, []);
  const showdata = () => {
    let Data = "http://localhost:4000/api/sub_service";
    axios.get(Data).then((res) => {
      SetDetails(res.data);
    });
  };

  const handleDelete = (id) => {
    let Data = `http://localhost:4000/api/sub_service${id}`;
    axios.delete(Data).then((res) => {
      showdata();
    });
  };
  const handleStatus = (e) => {
    // setStatus(true);
  };

  return (
    <>
      <MainLayout>
        <div className="container-fluid pt-4 px-4">
          <div className="col-12">
            <div className=" rounded h-100 p-4 ">
              <h6 className="mb-4">Sub-servies-Records</h6>
              {!details.length ? (
                "No data found"
              ) : (
                <div className="table-responsive">
                  <table className="table table-striped  ">
                    <thead>
                      <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Document</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentData.map((e) => (
                        <tr key={e.id}>
                          <td>{e.id}</td>
                          <td>
                            <img
                              className="not-img"
                              src={ImgNot}
                              alt={ImgNot}
                            />
                            {/* <img
                              width={100}
                              height={80}
                              src={e.imgPath}
                              alt={e.imgPath}
                            /> */}
                          </td>
                          <td>{e.formData.username}</td>
                          <td>{e.formData.document}</td>
                          <td>{e.formData.description}</td>

                          <td>
                            <Link
                              to={`/user/edit_sub_servies/${e.id}`}
                              className="btn btn-primary mx-1 my-1"
                            >
                              <i className="bi bi-pencil-fill"></i>
                            </Link>

                            <button
                              type="button"
                              className="btn bg-red mx-1 my-1"
                              onClick={() => handleDelete(e.id)}
                            >
                              <i className="bi bi-trash"></i>
                            </button>
                            <button
                              type="button"
                              className="btn bg-green mx-1 my-1"
                              onClick={handleStatus}
                            >
                              <i className="bi bi-toggle2-off "></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
            <nav className="d-flex justify-content-center ">
              <ul className="pagination">
                {pageNumbers.map((number) => (
                  <button
                    className="page-link rounded "
                    key={number}
                    id={number}
                    onClick={handleClick}
                  >
                    {number}
                  </button>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default SubServiesRecords;

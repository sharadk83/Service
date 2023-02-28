import React, { useState, useEffect } from "react";
import MainLayout from "../../../Layout/MainLayout";
import axios from "axios";
import { Link } from "react-router-dom";
// import ImgNot from "../../../../Images/not-found.png";

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
  const constant = {
    Sub_Service_Url: `http://localhost:4000/api/sub_service`,
  };
  const showdata = () => {
    axios.get(`${constant.Sub_Service_Url}`).then((res) => {
      SetDetails(res.data);
      // console.log(res.data);
    });
  };
  useEffect(() => {
    showdata();
  }, []);

  const handleDelete = (id) => {
    let DeleteServiceUrl = `http://localhost:4000/api/sub_service/${id}`;
    axios.delete(DeleteServiceUrl).then((res) => {
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
                        <th scope="col">Services ID</th>
                        <th scope="col">Sub Service</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentData.map((item, index) => (
                        <tr key={index}>
                          <td>{item.id}</td>
                          <td>
                            <img
                              width={100}
                              height={80}
                              src={`http://localhost:4000/Sub_service_img/${item.img_path}`}
                              alt={item.img_path}
                            />
                          </td>
                          <td>{item.service_name}</td>
                          <td>{item.sub_service_name}</td>
                          <td
                            dangerouslySetInnerHTML={{
                              __html: item.description,
                            }}
                          ></td>

                          <td>
                            <Link
                              to={`/url/edit_sub_servies/${item.id}`}
                              className="btn btn-primary mx-1 my-1"
                            >
                              <i className="bi bi-pencil-fill"></i>
                            </Link>

                            <button
                              type="button"
                              className="btn bg-red mx-1 my-1"
                              onClick={() => handleDelete(item.id)}
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

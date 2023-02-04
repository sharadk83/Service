import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ImgNot from "../../../../Images/not-found.png";
import MainLayout from "../../../Layout/MainLayout";
const MainServiesRecords = () => {
  const [details, SetDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(3);

  // Get current data
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = details.slice(indexOfFirstData, indexOfLastData);
  // const [status, setStatus] = useState(false);

  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(details.length / dataPerPage); i++) {
    pageNumbers.push(i);
  }
  // Change page
  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const constant = {
    getServiceUrl: `http://localhost:4000/api/main_service`,
  };
  const showdata = () => {
    axios.get(`${constant.getServiceUrl}`).then((res) => {
      SetDetails(res.data);
      // console.log(res.data);
    });
  };
  useEffect(() => {
    showdata();
  }, []);

  const handleDelete = (id) => {
    let DeleteServiceUrl = `http://localhost:4000/api/main_service/${id}`;
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
              <h6 className="mb-4">Main-servies-Records</h6>
              {!details ? (
                "No data found"
              ) : (
                <div>
                  {currentData.map((item) => (
                    <div
                      className="card my-3 shadow-sm"
                      style={{ width: "50rem" }}
                      key={item.id}
                    >
                      {item.img_path ? (
                        <img
                          width={100}
                          height={100}
                          className="rounded-circle my-2 mx-2"
                          src={`http://localhost:4000/sevice_img/${item.img_path}`}
                          alt="img"
                        />
                      ) : (
                        <img
                          className="not-img"
                          src={ImgNot}
                          alt={ImgNot}
                          width={100}
                          height={100}
                        />
                      )}
                      <div className="card-body">
                        <h6 className="card-title mx-2">
                          {item.service_name ? item.service_name : "N/A"}
                        </h6>
                        <p className="card-text mx-2">
                          <b>{item.title ? item.title : "N/A"}</b>
                        </p>
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex">
                          <div className="mx-2">
                            {/* <b>Start Date </b> : {item.start_date} */}
                            <b>Start Date : </b>
                            {new Date(item.start_date)
                              .toISOString()
                              .substr(0, 10)}
                          </div>
                          <div className="mx-2">
                            {/* <b>End Date </b> : {item.end_date} */}
                            <b>End Date : </b>
                            {new Date(item.end_date)
                              .toISOString()
                              .substr(0, 10)}
                          </div>
                        </li>
                        <li className="list-group-item mx-2">
                          <b>Description </b>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item.description,
                            }}
                          ></div>
                        </li>
                      </ul>
                      <div className="card-body mx-2">
                        <Link
                          to={`/url/edit_main_servies/${item.id}`}
                          className="btn btn-primary  mx-1 my-1"
                        >
                          Edit <i className="bi bi-pencil-fill"></i>
                        </Link>

                        <button
                          type="button"
                          className="btn btn-danger mx-1 my-1"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete <i className="bi bi-trash"></i>
                        </button>
                        <button
                          type="button"
                          className="btn bg-green mx-1 my-1"
                          onClick={handleStatus}
                        >
                          <i className="bi bi-toggle2-off "></i>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <nav className="d-flex justify-content-center ">
              <ul className="pagination">
                {pageNumbers.map((number) => (
                  <button
                    className="page-link"
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

export default MainServiesRecords;

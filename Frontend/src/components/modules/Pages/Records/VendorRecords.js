import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MainLayout from "../../../Layout/MainLayout";
import ImgNot from "../../../../Images/not-found.png";
import NotificationAlert from "../../../../notification/index";
import Spinner from "../../../Layout/Spinner";

const VendorRecords = () => {
  const [responseStatus, setResponseStatus] = useState("");
  const [loader, setLoader] = useState(false);

  // const [status, setStatus] = useState(false);
  const [details, SetDetails] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [ImgDocx, setImgDocx] = useState("");
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

  //------------------------Vendor-show data-----------------------------------
  const showdata = async () => {
    setLoader(true);

    let vendorList = "http://localhost:4000/api/users/vendor";
    await axios.get(vendorList).then((res) => {
      SetDetails(res.data);
      setTimeout(() => {
        setLoader(false);
      }, 300);
    });
  };
  useEffect(() => {
    showdata();
  }, []);
  //-------------------------delete data---------------------------------
  const handleDelete = (id) => {
    let Data = `http://localhost:4000/api/users/${id}`;
    axios.delete(Data).then((res) => {
      if (res.data.msgType === "success") {
        setResponseStatus({
          type: res.data.msgType,
          message: res.data.message,
        });
        showdata();
      } else if (res.data.msgType === "error") {
        setResponseStatus({
          type: res.data.msgType,
          message: res.data.message,
        });
      }
    });
  };
  const handleGetPhoto = (id) => {
    setIsOpen(true);
    let Data = `http://localhost:4000/api/users/data/${id}`;
    axios.get(Data).then((res) => {
      console.log(res.data[0].document_file);
      setImgDocx(res.data[0].document_file);
    });
  };

  const handleStatus = (e) => {
    // setStatus(true);
  };
  return (
    <>
      <MainLayout>
        {loader && <Spinner />}
        <NotificationAlert message={responseStatus} />
        <div className="container-fluid  bg-white">
          <div className="col-12">
            <div className=" rounded h-100  ">
              <h6 className="my-3">Vendor Records</h6>
              {details.length ? (
                <div className="table-responsive   ">
                  <table className="table table-striped border   ">
                    <thead>
                      <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Image</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Experience</th>
                        <th scope="col">Service Charge</th>
                        <th scope="col">Document</th>
                        <th scope="col">Address</th>
                        <th scope="col">Number</th>
                        <th scope="col">City</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentData.map((e) => {
                        return (
                          <tr key={e.id}>
                            <td>{e.id}</td>
                            <td>
                              {e.upload_file ? (
                                <img
                                  width={80}
                                  height={80}
                                  className="rounded-circle"
                                  src={`http://localhost:4000/uploads/${e.upload_file}`}
                                  alt="img"
                                />
                              ) : (
                                <img
                                  className="not-img"
                                  src={ImgNot}
                                  alt={ImgNot}
                                  width={80}
                                  height={80}
                                />
                              )}
                            </td>
                            <td>
                              {e.first_name ? e.first_name : "N/A"}{" "}
                              {e.last_name ? e.last_name : "N/A"}
                            </td>
                            <td>{e.email ? e.email : "N/A"}</td>
                            <td>{e.experience ? e.experience : "N/A"}</td>
                            <td>
                              {e.service_charge ? e.service_charge : "0.00"}
                              &#8377;
                            </td>
                            <td>
                              <Link onClick={() => handleGetPhoto(e.id)}>
                                {e.document_type ? e.document_type : "N/A"}
                              </Link>
                            </td>
                            <td>{e.address ? e.address : "N/A"}</td>
                            <td>{e.mobile_no ? e.mobile_no : "N/A"}</td>
                            <td>{e.city ? e.city : "N/A"}</td>
                            <td>
                              <Link
                                to={`/url/editvendor/${e.id}`}
                                className="btn border border-2 border-primary mx-1 my-1"
                              >
                                <i className="bi bi-pencil-fill"></i>
                              </Link>
                              <button
                                type="button"
                                className="btn border border-2 border-warning mx-1 my-1"
                                onClick={() => handleDelete(e.id)}
                              >
                                <i className="bi bi-trash"></i>
                              </button>
                              <button
                                type="button"
                                className="btn border border-2 border-success  mx-1 my-1"
                                onClick={handleStatus}
                              >
                                <i className="bi bi-toggle2-off "></i>
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              ) : (
                "No Data Found"
              )}
            </div>
            {/* ------------------Pagination-------------------------------------- */}
            <nav className="d-flex justify-content-end   ">
              {pageNumbers.map((number) => (
                <ul className="pagination align-items-center" key={number}>
                  <button
                    className="page-link border rounded  border-2 btn-sm  border-primary"
                    style={{ margin: "1px" }}
                    // key={number}
                    id={number}
                    onClick={handleClick}
                  >
                    {number}
                  </button>
                </ul>
              ))}
            </nav>
          </div>
        </div>
        {/* ------------------Documnet-Img-popup--------------------------------- */}
        {isOpen && (
          <div className="popup">
            <div className="popup-content">
              <button
                className="btn btn-secondary"
                onClick={() => setIsOpen(false)}
              >
                Close{" "}
              </button>
              <img
                src={`http://localhost:4000/uploads/${ImgDocx}`}
                alt="img"
                width={200}
                height={200}
              />
            </div>
          </div>
        )}
      </MainLayout>
    </>
  );
};

export default VendorRecords;

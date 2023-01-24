import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MainLayout from "../../../Layout/MainLayout";
import ImgNot from "../../../../Images/not-found.png";

const VendorRecords = () => {
  // const [status, setStatus] = useState(false);
  const [details, SetDetails] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(4);
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

  //show data
  const showdata = async () => {
    let vendorList = "http://localhost:4000/api/users";
    await axios.get(vendorList).then((res) => {
      SetDetails(res.data);
      // console.log(res.data);
    });
  };
  useEffect(() => {
    showdata();
  }, []);
  //delete data
  const handleDelete = (id) => {
    let Data = `http://localhost:4000/api/users/${id}`;
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
        {/* {JSON.stringify(getdata)} */}
        <div className="container-fluid  bg-white">
          <div className="col-12">
            <div className=" rounded h-100  ">
              <h6 className="my-3">Vendor Records</h6>
              {!details.length ? (
                "No data found"
              ) : (
                <div className="table-responsive   ">
                  <table className="table table-striped border   ">
                    <thead>
                      <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Image</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">service charge</th>
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
                              {e.first_name} {e.last_name}
                            </td>
                            <td>{e.email}</td>
                            <td>{e.service_charge} &#8377;</td>
                            <td>
                              {" "}
                              <Link onClick={() => setIsOpen(true)}>
                                {e.document_type}
                              </Link>{" "}
                            </td>
                            <td>{e.address}</td>
                            <td>{e.mobile_no}</td>
                            <td>{e.city}</td>
                            <td>
                              {/* <Link
                              onClick={() => handleEdit(e.id)}
                              className="btn border border-2 border-primary mx-1 my-1"
                            >
                              <i className="bi bi-pencil-fill"></i>
                            </Link> */}
                              <Link
                                to={`/user/editvendor/${e.id}`}
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
              )}
            </div>

            <nav className="d-flex justify-content-end   ">
              {pageNumbers.map((number) => (
                <ul className="pagination align-items-center" key={number}>
                  <button
                    className="page-link border rounded-0  border-2 btn-sm  border-primary"
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
        {/* -------------------popup---------------------- */}
        {isOpen && (
          <div className="popup">
            <div className="popup-content">
              <button onClick={() => setIsOpen(false)}>Close Popup</button>
              <h1>Popup Title</h1>
              <p>Popup content goes here</p>
            </div>
          </div>
        )}
      </MainLayout>
    </>
  );
};

export default VendorRecords;

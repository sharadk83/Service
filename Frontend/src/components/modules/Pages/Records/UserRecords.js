import React, { useState, useEffect } from "react";
import axios from "axios";
import MainLayout from "../../../Layout/MainLayout";
import { Link } from "react-router-dom";
import NotificationAlert from "../../../../notification/index";

const UserRecords = () => {
  // const [status, setStatus] = useState(false);
  const [details, SetDetails] = useState([]);
  const [responseStatus, setResponseStatus] = useState("");

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

  //-------------------------show data-----------------------------------
  const showdata = async () => {
    let vendorList = "http://localhost:4000/api/users/user";
    await axios.get(vendorList).then((res) => {
      SetDetails(res.data);
      // console.log(res.data);
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

  const handleStatus = (e) => {
    // setStatus(true);
  };
  return (
    <>
      <MainLayout>
        {/* {JSON.stringify(getdata)} */}
        <NotificationAlert message={responseStatus} />

        <div className="container-fluid  bg-white">
          <div className="col-12">
            <div className=" rounded h-100  ">
              <h6 className="my-3">Users Records</h6>
              {!details.length ? (
                "No data found"
              ) : (
                <div className="table-responsive   ">
                  <table className="table table-striped border   ">
                    <thead>
                      <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Number</th>
                        <th scope="col">Country</th>
                        <th scope="col">State</th>
                        <th scope="col">City</th>
                        <th scope="col">Address</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentData.map((e) => {
                        return (
                          <tr key={e.id}>
                            <td>{e.id}</td>
                            <td>
                              {e.first_name ? e.first_name : "N/A"}{" "}
                              {e.last_name ? e.last_name : "N/A"}
                            </td>
                            <td>{e.email ? e.email : "N/A"}</td>
                            <td>{e.gender ? e.gender : "N/A"}</td>
                            <td>{e.mobile_no ? e.mobile_no : "N/A"}</td>
                            <td>{e.country ? e.country : "N/A"}</td>
                            <td>{e.state ? e.state : "N/A"}</td>
                            <td>{e.city ? e.city : "N/A"}</td>
                            <td>{e.address ? e.address : "N/A"}</td>
                            <td>
                              <Link
                                to={`/url/edit_user/${e.id}`}
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
      </MainLayout>
    </>
  );
};

export default UserRecords;

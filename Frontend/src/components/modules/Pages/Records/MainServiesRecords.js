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

  // Change page
  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };
  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(details.length / dataPerPage); i++) {
    pageNumbers.push(i);
  }
  // const [status, setStatus] = useState(false);
  useEffect(() => {
    showdata();
  }, []);
  const showdata = () => {
    let Data = "";
    axios.get(Data).then((res) => {
      SetDetails(res.data);
      // console.log(res.data);
    });
  };

  const handleDelete = (id) => {
    let Data = ``;
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
              <h6 className="mb-4">Main-servies-Records</h6>
              {!details ? (
                "No data found"
              ) : (
                <div>
                  {currentData.map((e) => (
                    <div
                      className="card my-3"
                      style={{ width: "50rem" }}
                      key={e.id}
                    >
                      <img
                        // className="card-img-top"
                        className="my-2 mx-2"
                        src={ImgNot}
                        width={100}
                        height={100}
                        alt={ImgNot}
                      />
                      <div className="card-body">
                        <h6 className="card-title mx-2">
                          {e.formData.username}
                        </h6>
                        <p className="card-text mx-2">
                          <b>{e.formData.title}</b>
                        </p>
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex">
                          <div className="mx-2">
                            <b>Start Date </b> : {e.formData.start_date}
                          </div>
                          <div className="mx-2">
                            <b>End Date </b> : {e.formData.end_date}
                          </div>
                        </li>
                        <li className="list-group-item mx-2">
                          <b>Description </b>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: e.formData.description,
                            }}
                          
                          >
                          
                          </div>
                        </li>
                      </ul>
                      <div className="card-body mx-2">
                        <Link
                          to={`/user/edit_main_servies/${e.id}`}
                          className="btn btn-primary  mx-1 my-1"
                        >
                          Edit <i className="bi bi-pencil-fill"></i>
                        </Link>

                        <button
                          type="button"
                          className="btn btn-danger mx-1 my-1"
                          onClick={() => handleDelete(e.id)}
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
                // <div className="table-responsive">
                //   <table className="table table-striped font-sm  ">
                //     <thead>
                //       <tr>
                //         <th scope="col">No.</th>
                //         <th scope="col">Image</th>
                //         <th scope="col">Name</th>
                //         <th scope="col">Title</th>
                //         <th scope="col">Description</th>
                //         <th scope="col">Start-Date</th>
                //         <th scope="col">End-Date</th>
                //         <th scope="col">Action</th>
                //       </tr>
                //     </thead>
                //     <tbody>
                //       {paginated.map((e) => (
                //         <tr key={e.id}>
                //           <th>{e.id}</th>
                //           <td>
                //             <img
                //               className="not-img"
                //               src={ImgNot}
                //               alt={ImgNot}
                //             />
                //             {/* <img
                //               width={100}
                //               height={80}
                //               src={e.imgPath}
                //               alt={e.imgPath}
                //             /> */}
                //           </td>
                //           <td>{e.formData.username}</td>
                //           <td>{e.formData.title}</td>
                //           <td
                //             dangerouslySetInnerHTML={{
                //               __html: e.formData.description,
                //             }}
                //           ></td>
                //           <td>{e.formData.start_date}</td>
                //           <td>{e.formData.end_date}</td>
                //           <td>
                //             <Link
                //               to={`/edit_main_servies/${e.id}`}
                //               className="btn btn-primary mx-1 my-1"
                //             >
                //               <i className="bi bi-pencil-fill"></i>
                //             </Link>

                //             <button
                //               type="button"
                //               className="btn btn-danger mx-1 my-1"
                //               onClick={() => handleDelete(e.id)}
                //             >
                //               <i className="bi bi-trash"></i>
                //             </button>
                //             <button
                //               type="button"
                //               className="btn bg-green mx-1 my-1"
                //               onClick={handleStatus}
                //             >
                //               <i className="bi bi-toggle2-off "></i>
                //             </button>
                //           </td>
                //         </tr>
                //       ))}
                //     </tbody>
                //   </table>
                // </div>
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

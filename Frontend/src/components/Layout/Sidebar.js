import React, { useState } from "react";
import { Link } from "react-router-dom";
import Users from "../../Images/user.jpg";

const Sidebar = () => {
  const photoURL = localStorage.getItem("photoURL");
  const [imageNotFound, setImageNotFound] = useState(false);

  const handleImageError = () => {
    setImageNotFound(true);
  };

  const [parentOpen, setParentOpen] = useState(false);
  const [childA, setChildA] = useState(false);
  const [childB, setChildB] = useState(false);

  return (
    <>
      <div className="sidebar pe-4 pb-3">
        {/* <nav className="navbar bg-light navbar-light"> */}
        <nav className="navbar ">
          <Link to="/" className="navbar-brand mx-4 mb-3">
            <h5 className="text-white">
              <i className="fa fa-hashtag me-2"></i>Dashmin
            </h5>
          </Link>
          <div className="d-flex align-items-center ms-4 mb-4">
            <div className="position-relative">
              {!imageNotFound && (
                <img
                  className="rounded-circle "
                  src={photoURL}
                  alt={photoURL}
                  onError={handleImageError}
                  width={45}
                  height={45}
                />
              )}
              {imageNotFound && (
                <img
                  src={Users}
                  className="rounded-circle rc"
                  alt="Not Found"
                  width={45}
                  height={45}
                />
              )}

              <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
            </div>
            <div className="ms-3 text-white ">
              <span> Admin</span>
            </div>
          </div>
          <div className="navbar-nav w-100">
            <Link to="/dashboard" className="nav-item nav-link ">
              <i className="fa fa-tachometer-alt me-2"></i>Dashboard
            </Link>
            <Link
              to="/url/inquiry-index                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        "
              className="nav-item nav-link "
            >
              <i className="bi bi-telephone  me-2"></i>Inquiry Record
            </Link>
            {/* <hr className="mt-0 mb-0 text-white"/> */}
            <div className="nav-item  dropdown ">
              <a
                href="/"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                onClick={() => setParentOpen(!parentOpen)}
              >
                <i className="  fa fa-laptop me-2"></i>Servies
              </a>
              <div className=" bg-transparent   ">
                {parentOpen && (
                  <ul>
                    <Link onClick={() => setChildA(!childA)}>
                      <div className="text-white mx-3 my-3">
                        <p>Add Category</p>
                      </div>
                      {childA && (
                        <ul className="ul-item">
                          <div>
                            <Link to="/url/mainservies">
                              <small>Main-Services</small>
                            </Link>
                          </div>
                          <div>
                            <Link to="/url/subservies">
                              <small>Sub-Services</small>
                            </Link>
                          </div>
                        </ul>
                      )}
                    </Link>

                    <hr />
                    <Link onClick={() => setChildB(!childB)}>
                      <div className="text-white mx-3 ">
                        <p>View Category</p>
                      </div>
                      {childB && (
                        <ul className="ul-item">
                          <div>
                            <Link to="/url/main_servies_record">
                              <small>Main-Service view</small>
                            </Link>
                          </div>
                          <div>
                            <Link to="/url/sub_servies_record">
                              <small>Sub-Service view</small>
                            </Link>
                          </div>
                        </ul>
                      )}
                    </Link>
                  </ul>
                )}
              </div>
            </div>
            {/* ////////////////////////pages////////////////////////////////// */}
            <div className="nav-item dropdown">
              <a
                href="/"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-camera-fill  me-2"></i>Media
              </a>

              <div className=" mx-3 my-1 dropdown-menu dropdown-menu-end  bg-white border rounded rounded-bottom m-0">
                <Link to="/url/library" className="dropdown-item">
                  <small>Library</small>
                </Link>
                <hr className="mt-0 mb-0 text-primary" />
                <Link to="/url/add-new-library" className="dropdown-item">
                  <small>Add New </small>
                </Link>
              </div>
            </div>
            {/* ////////////////////////pages////////////////////////////////// */}
            <div className="nav-item dropdown">
              <a
                href="/"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <i className=" me-2 bi bi-book"></i>Pages
              </a>

              <div className=" mx-3 my-1 dropdown-menu dropdown-menu-end  bg-white border rounded rounded-bottom m-0">
                <Link to="/url/all-pages" className="dropdown-item">
                  <small>All Pages</small>
                </Link>
                <hr className="mt-0 mb-0 text-primary" />
                <Link to="/url/add-new-page" className="dropdown-item">
                  <small>Add New Page</small>
                </Link>
              </div>
            </div>
            {/* ////////////////////////////////////////////////////////// */}
            <div className="nav-item dropdown">
              <a
                href="/"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <i className=" fa fa-table me-2"></i>Vendor
              </a>

              <div className=" mx-3 my-1 dropdown-menu dropdown-menu-end  bg-white border rounded rounded-bottom m-0">
                <Link to="/url/vendor" className="dropdown-item">
                  <small>Add New Vendor</small>
                </Link>
                <hr className="mt-0 mb-0 text-primary" />
                <Link to="/url/records" className="dropdown-item">
                  <small>Vendor Records</small>
                </Link>
                <hr className="mt-0 mb-0 text-primary" />
                <Link to="/url/user_records" className="dropdown-item">
                  <small>User Records</small>
                </Link>
              </div>
            </div>
            {/* ////////////////////////////////////////////////////////// */}

            <Link to="/url/add-coupon" className="nav-item nav-link">
              <i className="  far fa-file-alt me-2"></i>Add Coupon
            </Link>

            <Link
              to="/url/supplier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        "
              className="nav-item nav-link "
            >
              <i className=" fa fa-th me-2"></i>Supplier
            </Link>

            <Link to="/" className="nav-item nav-link ">
              <i className="  fa fa-chart-bar me-2"></i>Charts
            </Link>
            <Link to="/" className="nav-item nav-link ">
              <i className="  bi  bi-box-arrow-in-right me-2"></i>SignIn
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;

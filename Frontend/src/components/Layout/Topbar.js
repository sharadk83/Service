import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Users from "../../Images/user.jpg";

export const Topbar = () => {
  const navigate = useNavigate();
  const users = localStorage.getItem("user");
  // const photoURL = localStorage.getItem("photoURL");
  const ImgURL = localStorage.getItem("userImg");
  const [imageNotFound, setImageNotFound] = useState(false);

  const handleImageError = () => {
    setImageNotFound(true);
  };

  const toggleSidebar = () => {
    document.querySelector(".sidebar").classList.toggle("open");
    document.querySelector(".content").classList.toggle("open");
  };
  const Logout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("user");
    localStorage.removeItem("userImg");
    navigate("/");
  };
  return (
    <>
      {/* <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0"> */}
      <nav className="navbar navbar-expand bg-white sticky-top px-4 py-0 shadow-sm">
        <a href="/" className="navbar-brand d-flex d-lg-none me-4">
          <h2 className="text-primary mb-0">
            <i className="fa fa-hashtag"></i>
          </h2>
        </a>
        <Link onClick={toggleSidebar} className="sidebar-toggler flex-shrink-0">
          <i className="fa fa-bars"></i>
        </Link>

        <form className="d-none d-md-flex ms-4">
          <div className="btn-group" role="group">
            <input
              className="form-control border-0  bg-light"
              type="search"
              placeholder="Search..."
            />
            <button type="button" className="btn btn-primary">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </form>

        <div className="navbar-nav align-items-center ms-auto">
          <div className="nav-item dropdown">
            <a
              href="/"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <i className="fa fa-envelope me-lg-2"></i>
              <span className="d-none d-lg-inline-flex">Message</span>
            </a>
            <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
              <a href="/" className="dropdown-item">
                <div className="d-flex align-items-center">
                  <img
                    className="rounded-circle rc"
                    src="img/user.jpg"
                    alt="img"
                  />
                  <div className="ms-2">
                    <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                    <small>15 minutes ago</small>
                  </div>
                </div>
              </a>
              <hr className="dropdown-divider" />
              <a href="/" className="dropdown-item">
                <div className="d-flex align-items-center">
                  <img
                    className="rounded-circle rc"
                    src="img/user.jpg"
                    alt="img"
                  />
                  <div className="ms-2">
                    <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                    <small>15 minutes ago</small>
                  </div>
                </div>
              </a>
              <hr className="dropdown-divider" />
              <a href="/" className="dropdown-item">
                <div className="d-flex align-items-center">
                  <img
                    className="rounded-circle rc"
                    src="img/user.jpg"
                    alt="img"
                  />
                  <div className="ms-2">
                    <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                    <small>15 minutes ago</small>
                  </div>
                </div>
              </a>
              <hr className="dropdown-divider" />
              <a href="/" className="dropdown-item text-center">
                See all message
              </a>
            </div>
          </div>
          <div className="nav-item dropdown">
            <a
              href="/"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <i className="fa fa-bell me-lg-2"></i>
              <span className="d-none d-lg-inline-flex">Notificatin</span>
            </a>
            <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
              <a href="/" className="dropdown-item">
                <h6 className="fw-normal mb-0">Profile updated</h6>
                <small>15 minutes ago</small>
              </a>
              <hr className="dropdown-divider" />
              <a href="/" className="dropdown-item">
                <h6 className="fw-normal mb-0">New user added</h6>
                <small>15 minutes ago</small>
              </a>
              <hr className="dropdown-divider" />
              <a href="/" className="dropdown-item">
                <h6 className="fw-normal mb-0">Password changed</h6>
                <small>15 minutes ago</small>
              </a>
              <hr className="dropdown-divider" />
              <a href="/" className="dropdown-item text-center">
                See all notifications
              </a>
            </div>
          </div>
          <div className="nav-item dropdown">
            <a
              href="/"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              {!imageNotFound && (
                <img
                  className="rounded-circle me-lg-2 "
                  src={`http://localhost:4000/uploads/${ImgURL}`}
                  alt={ImgURL}
                  onError={handleImageError}
                  width={40}
                  height={40}
                />
              )}
              {imageNotFound && (
                <img
                  src={Users}
                  className="rounded-circle me-lg-2 "
                  width={40}
                  height={40}
                  alt="Not Found"
                />
              )}

              <span className="d-none d-lg-inline-flex">{users}</span>
            </a>
            <div className="dropdown-menu dropdown-menu-end  bg-white border rounded-0 rounded-bottom m-0">
              <Link to="/user/profile" className="dropdown-item">
                My Profile
              </Link>
              <a href="/" className="dropdown-item">
                Settings
              </a>
              <button type="button" onClick={Logout} className="dropdown-item">
                Log Out
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Topbar;

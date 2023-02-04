import React from "react";
import MainLayout from "./Layout/MainLayout";

const PageNotFound = () => {
  return (
    <>
      <MainLayout>
        {/* <!-- 404 Start --> */}
        <div className="container-fluid px-4">
          <div className="row mt-5  rounded align-items-center justify-content-center mx-0">
            <div className="col-md-6 text-center">
              <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
              <h1 className="display-1 fw-bold">404</h1>
              <h1 className="mb-4">Page Not Found</h1>
              <p className="mb-4">
                We’re sorry, the page you have looked for does not exist in our
                website! Maybe go to our home page or try to use a search?
              </p>
              <a className="btn btn-primary rounded-pill py-3 px-5" href="/">
                Go Back To Home
              </a>
            </div>
          </div>
        </div>
        {/* <!-- 404 End --> */}
      </MainLayout>
    </>
  );
};

export default PageNotFound;

import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container-fluid pt-4 px-4">
        <div className="bg-white shadow-2  rounded-top p-4">
          <div className="row">
            <div className="col-12 col-sm-6 text-center text-sm-start">
              &copy; <a href="/">Your Site Name</a>, All Right Reserved.
            </div>
            <div className="col-12 col-sm-6 text-center text-sm-end">
              Designed By <a href="/deshboard">Ayush Arya</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

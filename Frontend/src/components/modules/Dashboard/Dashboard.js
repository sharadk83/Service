import React from "react";
import MainLayout from "../../Layout/MainLayout";
// import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <>
      <MainLayout>
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
            <div className="col-sm-6 col-xl-3">
              <div className="bg-white shadow rounded d-flex align-items-center justify-content-between p-4">
                <i className="fa fa-chart-line fa-3x text-info"></i>
                <div className="ms-3">
                  <p className="mb-2">Today Sale</p>
                  <h6 className="mb-0">$1234</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="bg-white shadow  rounded d-flex align-items-center justify-content-between p-4">
                <i className="fa fa-chart-bar fa-3x text-warning"></i>
                <div className="ms-3">
                  <p className="mb-2">Total Sale</p>
                  <h6 className="mb-0">$1234</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="bg-white shadow  rounded d-flex align-items-center justify-content-between p-4">
                <i className="fa fa-chart-area fa-3x text-danger"></i>
                <div className="ms-3">
                  <p className="mb-2">Today Revenue</p>
                  <h6 className="mb-0">$1234</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="bg-white shadow  rounded d-flex align-items-center justify-content-between p-4">
                <i className="fa fa-chart-pie fa-3x text-success"></i>
                <div className="ms-3">
                  <p className="mb-2">Total Revenue</p>
                  <h6 className="mb-0">$1234</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <Footer /> */}
      </MainLayout>
    </>
  );
};

export default Dashboard;

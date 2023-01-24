import React from "react";
// import Spinner from "../components/Spinner";
import Sidebar from "../Layout/Sidebar";
import Topbar from "../Layout/Topbar";

const MainLayout = (props) => {
  return (
    <>
      <div className="container-xxl position-relative bg-white d-flex p-0">
        {/* <Spinner /> */}

        <Sidebar />
        <div className="content">
          <Topbar />
          {props.children}
        </div>
      </div>
    </>
  );
};

export default MainLayout;

import React, { useState, useEffect } from "react";
import MainLayout from "../../../Layout/MainLayout";
import axios from "axios";
import { Link } from "react-router-dom";

const Inquiry_Index = () => {
  const [details, SetDetails] = useState([]);

  const constant = {
    join_user: "http://localhost:4000/api/main_service",
  };
  const showdata = () => {
    axios.get(`${constant.join_user}`).then((res) => {
      SetDetails(res.data);
      // console.log(res.data);
    });
  };

  useEffect(() => {
    showdata();
  }, []);

  return (
    <>
      <MainLayout>
        <div className="container-fluid pt-4 px-4">
          <h5 className="mb-4 text-secondary">Service Inquiry </h5>
          <div className="row g-4">
            {details.map((i, index) => (
              <div className="col-sm-6 col-xl-3" key={index}>
                <Link
                  to={`/url/service_inq_details/${i.service_name}`}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <div className="bg-white shadow  rounded d-flex align-items-center justify-content-between p-4">
                    {/* <i
                      className="bi bi-telephone fa-2x "
                      style={{ color: "#85929E" }}
                    ></i> */}
                    <div className="ms-3">
                      <h5 className="mb-2 " style={{ color: "#34495E" }}>
                        {i.service_name}
                      </h5>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Inquiry_Index;

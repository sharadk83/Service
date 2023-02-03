import React from "react";
import MainLayout from "../../Layout/MainLayout";

const Profile = () => {
  const users = localStorage.getItem("user");

  return (
    <>
      <MainLayout>
        <div className="container-fluid pt-4 px-4">
          <div className="row h-100 align-items-center justify-content-center text-dark">
            <h5 className="text-secondary mb-5 mx-5"> My Profile</h5>
            <div className="d-flex ">
              <div className="col-sm-3 mx-3">
                <div className="bg-white h-100 p-4 shw-1 border border-2 rounded ">
                  <div className="d-flex align-items-center">
                    <h1>
                      <i className="bi bi-person-circle mx-2"></i>
                    </h1>
                    {/* <img
                      width={80}
                      height={80}
                      className="rounded-circle"
                      // src={`http://localhost:4000/uploads/${e.upload_file}`}
                      alt="img"
                    /> */}
                    <div>
                      Hello...<b>{users}</b>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-8">
                <div className="bg-white h-100 p-4 shw-1 border border-2 rounded ">
                  {/* <div> {users}</div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Profile;

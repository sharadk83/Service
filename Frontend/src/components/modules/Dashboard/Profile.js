import React from "react";
import MainLayout from "../../Layout/MainLayout";

const Profile = () => {
  const users = localStorage.getItem("email");

  return (
    <>
      <MainLayout>
        <div className="container-fluid pt-4 px-4">
          <div className="row h-100 align-items-center justify-content-center">
            <div className="col-sm-10">
              <h4 className="text-primary"> My Profile</h4>
              <div className="bg-light h-100 p-4 shw-1">
                <div>{users}</div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Profile;

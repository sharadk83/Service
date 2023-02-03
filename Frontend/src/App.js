import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/modules/Dashboard/Dashboard";
import SignIn from "./components/modules/Pages/Signin/SignIn";
import Vendor from "./components/modules/Pages/Vendor/Vendor";
import Supplier from "./components/modules/Pages/Supplier/Supplier";
import Editvendor from "./components/modules/Pages/Vendor/Editvendor";
import VendorRecords from "./components/modules/Pages/Records/VendorRecords";
import MainServies from "./components/modules/Pages/services/MainServies";
import SubServies from "./components/modules/Pages/services/SubServies";
import MainServiesRecords from "./components/modules/Pages/Records/MainServiesRecords";
import EditMainServies from "./components/modules/Pages/services/EditPages/EditMainServies";
import EditSubServies from "./components/modules/Pages/services/EditPages/EditSubServies";
import SubServiesRecords from "./components/modules/Pages/Records/SubServiesRecords";
import Profile from "./components/modules/Dashboard/Profile";
import AddCoupon from "./components/modules/Pages/Coupon/AddCoupon";
import PrivateRoute from "./PrivateRoute";
import AllPages from "./components/modules/Frontend/AllPages";
import AddNewPages from "./components/modules/Frontend/AddNewPages";
import Library from "./components/modules/Media/Library";
import AddNewLibrary from "./components/modules/Media/AddNewLibrary";
import ForgetPassword from "./components/modules/Pages/Signin/ForgetPassword/ForgetPassword";
import Test from "./Test";
import UserRecords from "./components/modules/Pages/Records/UserRecords";
import EditUser from "./components/modules/Pages/Users/EditUser";

const App = () => {
  // const users = localStorage.getItem("email");

  return (
    <>
      <Routes>
        <Route exact path="/test" element={<Test />} />
        <Route exact path="/" element={<SignIn />} />
        <Route exact path="/forget_password" element={<ForgetPassword />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/url" element={<PrivateRoute />}>
          <Route exact path="vendor" element={<Vendor />} />
          <Route exact path="profile" element={<Profile />} />
          <Route exact path="records" element={<VendorRecords />} />
          <Route exact path="user_records" element={<UserRecords />} />
          <Route exact path="supplier" element={<Supplier />} />
          <Route exact path="mainservies" element={<MainServies />} />
          <Route exact path="subservies" element={<SubServies />} />
          <Route exact path="edit_user/:id" element={< EditUser/>} />
          <Route exact path="editvendor/:id" element={<Editvendor />} />
          <Route
            exact
            path="edit_main_servies/:id"
            element={<EditMainServies />}
          />
          <Route
            exact
            path="edit_sub_servies/:id"
            element={<EditSubServies />}
          />
          <Route
            exact
            path="main_servies_record"
            element={<MainServiesRecords />}
          />
          <Route
            exact
            path="sub_servies_record"
            element={<SubServiesRecords />}
          />
          <Route exact path="add-coupon" element={<AddCoupon />} />
          <Route exact path="all-pages" element={<AllPages />} />
          <Route exact path="add-new-page" element={<AddNewPages />} />
          <Route exact path="library" element={<Library />} />
          <Route exact path="add-new-library" element={<AddNewLibrary />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

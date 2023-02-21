import React, { useState, useEffect } from "react";
import MainLayout from "../../../Layout/MainLayout";
import { useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../../../Layout/Spinner";

const ServiceDetails = () => {
  const { service_name } = useParams();

  const [details, SetDetails] = useState([]);
  const [loader, setLoader] = useState(false);

  const constant = {
    ServiceUrl: `http://localhost:4000/api/user_join/${service_name}`,
  };

  const showdata = () => {
    setLoader(true);
    axios.get(`${constant.ServiceUrl}`).then((res) => {
      SetDetails(res.data);
      setTimeout(() => {
        setLoader(false);
      }, 300);

      //   console.log(res.data);
    });
  };
  useEffect(() => {
    showdata();
  }, []);

  return (
    <>
      <MainLayout>
        {loader && <Spinner />}
        <div className="container mt-4 ">
          <h5 className="mb-4 text-secondary">{service_name}</h5>
          <table className="table border">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Full Name</th>
                <th scope="col">Email</th>
                <th scope="col">Address </th>
                <th scope="col">Mobail No.</th>
                <th scope="col">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {details.map((i, index) => (
                <tr key={index}>
                  <td>{i.id}</td>
                  <th>
                    {i.first_name} {i.last_name}
                  </th>
                  <td>{i.email}</td>
                  <td>{i.address}</td>
                  <td>{i.mobile}</td>
                  <td>{i.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </MainLayout>
    </>
  );
};

export default ServiceDetails;

import React, { useState, useEffect } from "react";
import MainLayout from "../../../Layout/MainLayout";
import DataTable from "react-data-table-component";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const ListServiceFAQ = () => {
  const navigate = useNavigate();
  const [details, SetDetails] = useState([]);
  const [search, setSearch] = useState("");
  const [responseStatus, setResponseStatus] = useState("");

  const constant = {
    FaqList: `http://localhost:4000/api/service_faq`,
  };

  const handleDelete = (id) => {
    let api = `http://localhost:4000/api/service_faq/${id}`;
    axios.delete(api).then((res) => {
      if (res.data.msgType === "success") {
        setResponseStatus({
          type: res.data.msgType,
          message: res.data.message,
        });
        Faq_Show();
      } else if (res.data.msgType === "error") {
        setResponseStatus({
          type: res.data.msgType,
          message: res.data.message,
        });
      }
    });
  };

  const Faq_Show = async () => {
    try {
      const res = await axios.get(`${constant.FaqList}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      SetDetails(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    Faq_Show();
  }, []);
  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      width: "80px",
    },
    {
      name: "Service Name",
      selector: (row) => (row.service_name ? row.service_name : "Null"),
      sortable: true,
      width: "150px",
    },
    {
      name: "Question",
      selector: (row) => row.question,
      sortable: true,
      width: "250px",
    },
    {
      name: "Answer",
      selector: (row) => row.answer,
      sortable: true,
      width: "460px",
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="my-1">
          <Link
            to={`/url/edit_faq/${row.id}`}
            className="btn btn-outline-primary mx-1 "
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Edit"
          >
            <i className="bi bi-pencil"></i>
          </Link>
          <button
            type="button"
            className="btn btn-outline-danger mx-1"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Delete"
            onClick={() => handleDelete(row.id)}
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      ),
    },
  ];

  const searchData = details.filter((s_name) => {
    return s_name.service_name.toLowerCase().match(search.toLowerCase());
  });

  const customStyles = {
    // table: {
    //   style: {
    //     padding: 1,
    //     borderStyle: "solid",
    //     bordercolor: "#EAECEE",
    //     borderWidth: 1,
    //   },
    // },
    rows: {
      style: {
        minHeight: "72px",
        // backgroundColor: "#566573 ",
        // color: "#fff",
        // borderStyle: "solid",
        // bordercolor: "black",
        // borderWidth: 1,
      },
    },
    headCells: {
      style: {
        // marginBottom: 5,
        fontSize: 12,
        fontWeight: "bold",
        backgroundColor: "#E5E7E9 ",
      },
    },
    cells: {
      style: {
        // borderStyle: "solid",
        // bordercolor: "black",
        // borderWidth: 1,
      },
    },
  };
  return (
    <>
      <MainLayout>
        <div className="container-fluid ">
          <div className="row h-100 align-items-center justify-content-center">
            <h5 className="text-secondary mt-3 mb-3" style={{}}>
              FAQ List
            </h5>
            {/* ---------------------------Listing------------------------------------- */}
            <DataTable
              className=" mx-5 "
              columns={columns}
              data={searchData}
              responsive
              pagination
              fixedHeader
              fixedHeaderScrollHeight="350px"
              highlightOnHover
              dense
              customStyles={customStyles}
              subHeader
              subHeaderComponent={
                <input
                  className="w-25 form-control"
                  type="text"
                  placeholder="Search here..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              }
            />
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default ListServiceFAQ;

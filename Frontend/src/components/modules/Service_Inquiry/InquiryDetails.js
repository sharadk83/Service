import React, { useState, useEffect } from "react";
import MainLayout from "../../Layout/MainLayout";
import axios from "axios";
import Spinner from "../../Layout/Spinner";
import DataTable from "react-data-table-component";
import { Button } from "react-bootstrap";

const InquiryDetails = () => {
  const [details, SetDetails] = useState([]);
  const [search, setSearch] = useState("");
  const [loader, setLoader] = useState(false);

  const constant = {
    ServiceUrl: `http://localhost:4000/api/user_join/`,
  };

  const showdata = async () => {
    setLoader(true);
    try {
      const res = await axios.get(`${constant.ServiceUrl}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      SetDetails(res.data);
      setTimeout(() => {
        setLoader(false);
      }, 300);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    showdata();
  }, []);

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      width: "auto",
    },
    {
      name: "Service Name",
      selector: (row) => row.service_name,
      sortable: true,
      width: "auto",
    },
    {
      name: "Name",
      selector: (row) => row.first_name,
      sortable: true,
      width: "auto",
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
      width: "auto",
    },
    {
      name: "Address",
      selector: (row) => row.address,
      sortable: true,
      width: "auto",
    },
    {
      name: "Mobile No.",
      selector: (row) => row.mobile,
      sortable: true,
      width: "auto",
    },
    {
      name: "purpose",
      selector: (row) => row.purpose,
      sortable: true,
      width: "auto",
    },
  ];

  const searchData = details.filter((s_name) => {
    return s_name.service_name.toLowerCase().match(search.toLowerCase());
  });

  const customStyles = {
    rows: {
      style: {
        minHeight: "72px",
        // backgroundColor: "#566573 ",
        // color: "#fff",
      },
    },
    headCells: {
      style: {
        fontSize: 12,
        fontWeight: "bold",
        backgroundColor: "#E5E7E9 ",
      },
    },
    cells: {
      style: {
        marginTop: 8,
        width: "auto",
      },
    },
  };

  function convertArrayOfObjectsToCSV(array) {
    let result;

    const columnDelimiter = ",";
    const lineDelimiter = "\n";
    const keys = Object.keys(details[0]);

    result = "";
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    array.forEach((item) => {
      let ctr = 0;
      keys.forEach((key) => {
        if (ctr > 0) result += columnDelimiter;

        result += item[key];

        ctr++;
      });
      result += lineDelimiter;
    });

    return result;
  }

  // Blatant "inspiration" from https://codepen.io/Jacqueline34/pen/pyVoWr
  function downloadCSV(array) {
    const link = document.createElement("a");
    let csv = convertArrayOfObjectsToCSV(array);
    if (csv == null) return;

    const filename = "export.csv";

    if (!csv.match(/^data:text\/csv/i)) {
      csv = `data:text/csv;charset=utf-8,${csv}`;
    }

    link.setAttribute("href", encodeURI(csv));
    link.setAttribute("download", filename);
    link.click();
  }

  const Export = ({ onExport }) => (
    <Button onClick={(e) => onExport(e.target.value)}>Export</Button>
  );

  const actionsMemo = React.useMemo(
    () => <Export onExport={() => downloadCSV(details)} />,
    []
  );
  return (
    <>
      <MainLayout>
        {loader && <Spinner />}
        <div className="container-fluid ">
          <div className="row h-100 align-items-center justify-content-center">
            <h5 className="my-4 text-secondary">Contact DB Records</h5>
            <DataTable
              actions={actionsMemo}
              className=" mt-3 mx-5 "
              columns={columns}
              data={searchData}
              responsive
              pagination
              fixedHeader
              fixedHeaderScrollHeight="400px"
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

export default InquiryDetails;

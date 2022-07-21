import React from 'react';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import CheckboxFilters from "../common/components/checkboxFilters/CheckboxFilters";
import ProjectsTableHaeder from "./headerProjects/HeaderProjects";
import { CustomDiv } from "./ProjectsStyles";
import { Link } from "react-router-dom";
import { useState } from "react";
// import ProjectsSerivce from "../common/Api/Projects.serivce";
import { EditDataButton } from "./editdatabutton/EditDataButton";
import axios from "axios";

const postData = {
  paging: {
    pageSize: 10,
    pageNumber: 1,
  },
};

const client = axios.create({
  baseURL:
    "https://swh-t-praktyki2022-app.azurewebsites.net/Recruitment/GetList",
  withCredentials: true,
});

// const projectData = ProjectsSerivce.recruitmentHttpPost("GetList", postData);

// ProjectsSerivce.recruitmentHttpPost("GetList", postData);

const columns: GridColDef[] = [
  { field: "name", headerName: "Name", width: 200 },
  { field: "creator", headerName: "Creator", width: 200 },
  { field: "from", headerName: "Frome", width: 160 },
  {
    field: "to",
    headerName: "To",
    width: 160,
  },
  { field: "resume", headerName: "Resume", width: 120 },

  {
    field: "hired",
    headerName: "Hired",
    width: 120,
    renderCell: (params) => {
      return <Link to="/candidates">{params.row.hired}</Link>;
    },
  },

  {
    field: "edit",
    headerName: "",
    width: 120,
    sortable: false,
    renderCell: (params) => {
      return <EditDataButton index={params.row.id} />;
    },
  },
];

// const ows = [
//   receivedData.recruitmentDTOs.map((item: any) => {
//     id: 'item.id',
//     name: item.name
//   })
// ]

const rows = [
  {
    id: "1",
    name: "JavaScript Developer",
    creator: "Jonh Doe",
    from: "01.07.2022",
    to: "30.07.2022",
    resume: "14",
    hired: "4",
    field: "",
  },
  {
    id: "2",
    name: "React Developer",
    creator: "Jonh Doe",
    from: "01.07.2022",
    to: "30.07.2022",
    resume: "3",
    hired: "2",
  },
  {
    id: "3",
    name: "Angular Developer",
    creator: "Jonh Doe",
    from: "01.07.2022",
    to: "30.07.2022",
    resume: "1",
    hired: "0",
  },
];

const statusesList = ["Open", "Closed"];

export default function Projects() {
  const [allData, setAllData] = useState(null);

  const testReq = () => {
    client.post("", { postData }, { withCredentials: true }).then((res) => {
      console.log(res.data.recruitmentDTOs[0].id);
      setAllData(res.data);
    });
  };

  testReq();

  return (
    <CustomDiv>
      <CheckboxFilters header="Status" filtersList={statusesList} />
      <div style={{ width: "100%" }}>
        <ProjectsTableHaeder title="Projects" />
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </div>
      </div>
    </CustomDiv>
  );
}

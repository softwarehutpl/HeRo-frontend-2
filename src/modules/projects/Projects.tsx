import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import CheckboxFilters from "../common/components/checkboxFilters/CheckboxFilters";
import ProjectsTableHaeder from "./headerProjects/HeaderProjects";
import { CustomDiv } from "./ProjectsStyles";
import { Link } from "react-router-dom";
import { EditDataButton } from "./editdatabutton/EditDataButton";
import ProjectsSerivce from "../common/Api/Projects.serivce";

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

const postData = {
  paging: {
    pageSize: 10,
    pageNumber: 1,
  },
};

const statusesList = ["Open", "Closed"];

// ProjectsSerivce.recruitmentHttpPost("GetList", postData);
export default function Projects() {
  // const [allData, setAllData] = useState("");

  useEffect(() => {
    const projectData = ProjectsSerivce.recruitmentHttpPost(
      "GetList",
      postData
    );
    projectData.then((res) => console.log(res.totalCount));

    // projectData.then((res) => [{id: res.recruitmentDTOs[0].id}]);
  }, []);

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

import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import CheckboxFilters from "../common/components/checkboxFilters/CheckboxFilters";
import ProjectsTableHaeder from "./headerProjects/HeaderProjects";
import { CustomDiv } from "./ProjectsStyles";
import { Link } from "react-router-dom";
import { EditDataButton } from "./editdatabutton/EditDataButton";
import ProjectsSerivce from "../common/Api/Projects.serivce";

interface Project {
  id: string;
  name: string;
  creator: string;
  beginningDate: Date;
  endingDate: Date;
  candidateCount: number;
  hiredCount: number;
}

const columns: GridColDef[] = [
  { field: "name", headerName: "Name", width: 200 },
  { field: "creator", headerName: "Creator", width: 200 },
  { field: "beginningDate", headerName: "Frome", width: 160 },
  {
    field: "endingDate",
    headerName: "To",
    width: 160,
  },
  { field: "candidateCount", headerName: "Resume", width: 120 },

  {
    field: "hiredCount",
    headerName: "Hired",
    width: 120,
    renderCell: (params) => {
      return <Link to="/candidates">{params.row.hiredCount}</Link>;
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

const postData = {
  paging: {
    pageSize: 10,
    pageNumber: 1,
  },
};

const statusesList = ["Open", "Closed"];

export default function Projects() {
  const [recruitmentDTOs, setRecruitmentDTOs] = useState<Project[]>([]);

  useEffect(() => {
    const projectData = ProjectsSerivce.recruitmentHttpPost(
      "GetList",
      postData
    );
    projectData.then((res) => setRecruitmentDTOs(res.recruitmentDTOs));
  }, []);

  return (
    <CustomDiv>
      <CheckboxFilters header="Status" filtersList={statusesList} />
      <div style={{ width: "100%" }}>
        <ProjectsTableHaeder title="Projects" />
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={recruitmentDTOs}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </div>
      </div>
    </CustomDiv>
  );
}

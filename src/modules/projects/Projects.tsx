import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import CheckboxFilters from "../common/components/checkboxFilters/CheckboxFilters";
import ProjectsTableHaeder from "./headerProjects/HeaderProjects";
import { CustomDiv } from "./ProjectsStyles";
import { Link } from "react-router-dom";
import { EditDataButton } from "./editdatabutton/EditDataButton";
import ProjectsSerivce from "../common/Api/Projects.serivce";
// import UserService from "../common/Api/User.service";

interface Project {
  id: number;
  name: string;
  creator: string;
  recruiterId: number;
  beginningDate: Date;
  endingDate: Date;
  candidateCount: number;
  hiredCount: number;
  fullName: string;
}

// interface UserInterface {
//   id?: number;
//   fullName?: string;
//   email?: string;
//   userStatus?: string;
//   roleName?: string;
// }
let indexOfRecruitment: number;

const columns: GridColDef[] = [
  { field: "name", headerName: "Name", width: 200 },
  { field: "creator", headerName: "Creator", width: 200 },
  {
    field: "beginningDate",
    headerName: "Frome",
    type: "dateTime",
    width: 250,
    valueGetter: ({ value }) => new Date(value),
  },
  {
    field: "endingDate",
    headerName: "To",
    type: "dateTime",
    width: 250,
    valueGetter: ({ value }) => value && new Date(value),
  },
  { field: "candidateCount", headerName: "Resume", width: 120 },

  {
    field: "hiredCount",
    headerName: "Hired",
    width: 120,
    renderCell: (params) => {
      return (
        <Link
          to={`/candidates/${params.row.id}`}
          onClick={() => console.log("działa")}
        >
          {params.row.hiredCount}
        </Link>
      );
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
  // const [getRecruiters, setGetRecruiters] = useState<UserInterface[]>([]);
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const recruitmentDTOsData = async () => {
    const response = await ProjectsSerivce.recruitmentHttpPost(
      "GetList",
      postData
    );
    setRecruitmentDTOs(response.data.recruitmentDTOs);
    indexOfRecruitment = response.data.recruitmentDTOs;
  };

  useEffect(() => {
    recruitmentDTOsData();
  }, []);

  // console.log(recruitmentDTOs);

  // console.log(`getRecruiters ${getRecruiters.map((i) => i.id)}`);

  // console.log(`recruitmentDTOs ${recruitmentDTOs.map((i) => i.recruiterId)}`);
  // creatorData = recruitmentDTOs.map((item) =>
  //   getRecruiters.filter((i) => item.recruiterId === i.id)
  // );

  // console.log(creatorData);
  // console.log(
  //   recruitmentDTOs.map((item) =>
  //     getRecruiters.filter((i) => item.recruiterId === i.id)
  //   )
  // );

  return (
    <CustomDiv>
      <CheckboxFilters
        header="Status"
        filtersList={statusesList}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
      />
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

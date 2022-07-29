import React, { useEffect, useReducer, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import CheckboxFilters from "../common/components/checkboxFilters/CheckboxFilters";
import ProjectsTableHaeder from "./headerProjects/HeaderProjects";
import { CustomDiv } from "./ProjectsStyles";
import { Link } from "react-router-dom";
import { EditDataButton } from "./editdatabutton/EditDataButton";
import ProjectsSerivce from "../common/Api/Projects.serivce";

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
  {
    field: "candidateCount",
    headerName: "Resume",
    width: 120,
    renderCell: (params) => {
      return (
        <Link to={`/candidates?id=${params.row.id}`}>
          {params.row.candidateCount}
        </Link>
      );
    },
  },

  {
    field: "hiredCount",
    headerName: "Hired",
    width: 120,
    renderCell: (params) => {
      return (
        <Link to={`/candidates?id=${params.row.id}&status=HIRED`}>
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
      return (
        <Link to={`?id=${params.row.id}`}>
          <EditDataButton index={params.row.id} />
        </Link>
      );
    },
  },
];

const postData = {
  paging: {
    pageSize: 100,
    pageNumber: 1,
  },
};

interface CheckboxList {
  id: number;
  title: string;
  isChecked: boolean;
}

type Action = {
  id: number;
  type: "IsChecked";
};

const initialCheckboxList: CheckboxList[] = [
  {
    id: 1,
    title: "Open",
    isChecked: true,
  },
  {
    id: 2,
    title: "Close",
    isChecked: true,
  },
];

const reducer = (state: CheckboxList[], action: Action) => {
  switch (action.type) {
    case "IsChecked":
      return state.map((checked: CheckboxList) => {
        if (checked.id == action.id) {
          return { ...checked, isChecked: !checked.isChecked };
        } else {
          return checked;
        }
      });
    default:
      return state;
  }
};

export default function Projects() {
  const [recruitmentDTOs, setRecruitmentDTOs] = useState<Project[]>([]);

  const [checkbox, dispatch] = useReducer(reducer, initialCheckboxList);

  const recruitmentDTOsData = async () => {
    const response = await ProjectsSerivce.recruitmentHttpPost(
      "GetList",
      postData
    );
    setRecruitmentDTOs(response.data.recruitmentDTOs);
  };

  useEffect(() => {
    recruitmentDTOsData();
  }, []);

  const handleComplete = (checkbox: any) => {
    dispatch({ type: "IsChecked", id: checkbox });
  };

  return (
    <CustomDiv>
      <CheckboxFilters
        header="Projects"
        checkbox={checkbox}
        dispatch={handleComplete}
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

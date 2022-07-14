import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "name", headerName: "Name", width: 200 },
  { field: "creator", headerName: "Creator", width: 200 },
  { field: "from", headerName: "Frome", width: 160 },
  {
    field: "to",
    headerName: "To",
    width: 160,
    // valueGetter: (params: GridValueGetterParams) =>
    //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  { field: "resume", headerName: "Resume", width: 120 },
  { field: "hired", headerName: "Hired", width: 120 },
];

const rows = [
  {
    id: "1",
    name: "JavaScript Developer",
    creator: "Jon",
    from: "01.07.2022",
    to: "30.07.2022",
    field: "14",
    hired: "4",
  },
  {
    id: "2",
    name: "React Developer",
    creator: "Jon",
    from: "01.07.2022",
    to: "30.07.2022",
    field: "3",
    hired: "2",
  },
  {
    id: "3",
    name: "Angular Developer",
    creator: "Jon",
    from: "01.07.2022",
    to: "30.07.2022",
    field: "1",
    hired: "0",
  },
];

export default function Projects() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
      />
    </div>
  );
}

import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import CustomAvatar from '../avatars/CustomAvatar';

const columns: GridColDef[] = [
  {
    field: "avatar",
    headerName: "",
    width: 70,
    sortable: false,
    filterable: false,
  },
  { field: 'name', headerName: 'Name', width: 190 },
  { field: 'source', headerName: 'Source', width: 150 },
  { field: 'project', headerName: 'Project', width: 200 },
  { field: 'position', headerName: 'Position', width: 200 },
  { field: 'status', headerName: 'Status', width: 160 },
  { field: 'stage', headerName: 'Stage', width: 160 },
  { field: 'assignee', headerName: 'Assignee', width: 160 },
  { field: 'profile', headerName: 'Profile', width: 160 },
];

const owndata = [
  {
    id: '1',
    renderCell: () => {
      return <CustomAvatar name={"John Doe"} />;
    },
    name: 'John Doe',
    source: 'Internal',
    project: 'React Developer',
    position: 'React Developer',
    status: 'Qualified',
    stage: 'Interview',
    assignee: 'Peter Ditter',
    profile: 'see Profile',
  },
];

export default function CustomTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={owndata}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}



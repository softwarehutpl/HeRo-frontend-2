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
    renderCell: (props) => {
      return <CustomAvatar name={props.row.name} />;
    },
  },
  { field: 'name', headerName: 'Name', width: 140 },
  { field: 'source', headerName: 'Source', width: 120 },
  { field: 'project', headerName: 'Project', width: 160 },
  { field: 'position', headerName: 'Position', width: 160 },
  { field: 'status', headerName: 'Status', width: 140 },
  { field: 'stage', headerName: 'Stage', width: 140 },
  { field: 'assignee', headerName: 'Assignee', width: 140 },
  { field: 'profile', headerName: 'Profile', width: 110 },
];

const owndata = [
  {
    id: '1',
    name: 'Kohn Doe',
    source: 'Internal',
    project: 'React Developer',
    position: 'React Developer',
    status: 'Qualified',
    stage: 'Interview',
    assignee: 'Peter Ditter',
    profile: 'see Profile',
  },
  {
    id: '2',
    name: 'Krzysztof Kononowicz',
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



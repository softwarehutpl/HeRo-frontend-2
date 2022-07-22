import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import CustomAvatar from '../../common/components/avatars/CustomAvatar';
import { Link } from 'react-router-dom';
import candidate from '../../common/mocks/Candidates.json';

const columns: GridColDef[] = [
  {
    field: 'avatar',
    headerName: '',
    width: 70,
    sortable: false,
    filterable: false,
    renderCell: props => {
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
  {
    field: 'profile',
    headerName: 'Profile',
    width: 110,
    renderCell: params => {
      return <Link to="/profile">{params.row.profile}</Link>;
    },
  },
];

export default function CustomTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={candidate} columns={columns} pageSize={5} rowsPerPageOptions={[5]} />
    </div>
  );
}

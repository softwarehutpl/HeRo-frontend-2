import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import CustomAvatar from '../../common/components/avatars/CustomAvatar';
import { Link } from 'react-router-dom';
import candidate from '../../common/mocks/Candidates.json';
import { CandidateSlide } from '../../common/components/candidateSlidePopUp/SlidePopUp';

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

export type Data = {
  id: string;
  name: string;
  source: string;
  project: string;
  position: string;
  status: string;
  stage: string;
  assignee: string;
  profile: string;
};

export default function CustomTable() {
  const [clickedCandidate, setClickedCandidate] = React.useState<Data>();

  function handelChange(row: Data): void {
    console.log(row);
    setClickedCandidate(row);
  }

  const closeDetails = () => {
    setClickedCandidate(undefined);
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={candidate}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        onRowClick={({ row }) => handelChange(row)}
      />
      <CandidateSlide
        isChecked={clickedCandidate !== undefined}
        candidateName={clickedCandidate ? clickedCandidate.name : 'John Doe'}
        close={closeDetails}
      />
    </div>
  );
}

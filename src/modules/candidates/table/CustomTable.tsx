import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import CustomAvatar from '../../common/components/avatars/CustomAvatar';
import { Link } from 'react-router-dom';
import candidate from '../../common/mocks/Candidates.json';
import { CandidateSlide } from '../../common/components/candidateSlidePopUp/SlidePopUp';
import CandidatesService from '../../common/Api/Candidates.service';
import SeeProfile from '../../profile/seeProfile/SeeProfile';

interface Candidates {
  id: number;
  name: string;
  source: string;
  recruitmentName: string;
  status: string[];
  stage: string[];
  techId: number;
  techEmail: string;
  recruiterId: number;
  recruiterEmail: string;
}

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
  { field: 'recruitmentName', headerName: 'Project', width: 160 },
  { field: 'position', headerName: 'Position', width: 160 },
  { field: 'status', headerName: 'Status', width: 140 },
  { field: 'stage', headerName: 'Stage', width: 140 },
  { field: 'recruiterEmail', headerName: 'Assignee', width: 140 },
  {
    field: 'profile',
    headerName: 'Profile',
    width: 150,
    renderCell: props => {
      return <SeeProfile id={props.row.id} />;
    },
  },
];

const postData = {
  paging: {
    pageSize: 104,
    pageNumber: 1,
  },
};

export default function CustomTable() {
  const [clickedCandidate, setClickedCandidate] = useState<Candidates>();
  const [candidateInfoForListDTOs, setcandidateInfoForListDTOs] = useState<Candidates[]>([]);

  function handelChange(row: Candidates): void {
    setClickedCandidate(row);
  }

  const closeDetails = () => {
    setClickedCandidate(undefined);
  };

  useEffect(() => {
    const candidateData = CandidatesService.candidateHttpPost('GetList', postData);
    candidateData.then(res => setcandidateInfoForListDTOs(res.candidateInfoForListDTOs));
  }, []);

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={candidateInfoForListDTOs}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        onRowClick={({ row }) => handelChange(row)}
      />
      <CandidateSlide
        isChecked={clickedCandidate !== undefined}
        candidateName={clickedCandidate ? clickedCandidate.name : 'John Doe'}
        candidateid={clickedCandidate ? clickedCandidate.id : 0}
        close={closeDetails}
      />
    </div>
  );
}

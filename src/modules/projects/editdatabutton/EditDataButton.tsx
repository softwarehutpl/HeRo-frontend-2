import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react';
import { ProjectModal } from '../projectmodal/ProjectModal';

export const EditDataButton = ({ index }: any) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const handleOpen = () => setOpen(true);

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <EditIcon style={{ color: '#1976d2' }}></EditIcon>
      </IconButton>
      <ProjectModal status={open} setstatus={setOpen} name={'Edit project'} />
    </div>
  );
};

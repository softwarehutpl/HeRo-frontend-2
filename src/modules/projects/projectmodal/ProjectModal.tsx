import { Box, Modal, Typography } from '@mui/material';
import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import ModalForm from '../modalForm/ModalForm';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40%',
  height: '90%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflowY: 'scroll',
};

interface StatusInterface {
  status: boolean;
  setstatus: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
}

export const ProjectModal: React.FC<StatusInterface> = ({ status, setstatus, name }) => {
  const history = useNavigate();
  const handleClose = (e: any) => {
    e.preventDefault();
    setstatus(false);
    history('/projects', { replace: true });
  };

  return (
    <div>
      {status && (
        <Modal
          open={status}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
            <ModalForm popupName={name} />
          </Box>
        </Modal>
      )}
    </div>
  );
};

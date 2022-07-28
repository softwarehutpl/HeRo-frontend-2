import { Box, Modal, Typography } from '@mui/material';
import React from 'react';
import ModalForm from '../modalForm/ModalForm';

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
}

export const ProjectModal: React.FC<StatusInterface> = ({ status, setstatus }) => {
  const handleClose = () => setstatus(false);

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
              Edit project
            </Typography>
            <ModalForm />
          </Box>
        </Modal>
      )}
    </div>
  );
};

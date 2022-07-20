import { Box, IconButton, Modal, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react';



const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    height: '90%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export const EditDataButton = ({ index }: any) => {
  // const handleEditClick = () => {
  //   console.log(`editDataButton clicked ${index}`);

  //   // go to ...candidates?projrctId=1&status=hired filet
  // };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <EditIcon style={{ color: '#1976d2' }}></EditIcon>
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create/edit project
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
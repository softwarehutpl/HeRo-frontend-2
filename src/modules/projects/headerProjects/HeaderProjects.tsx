import { Box, Modal, Typography, TypographyTypeMap } from '@mui/material';

import { HeaderBox } from '../../common/components/tableHeader/TableHeaderStyles';
import { HeaderDiv } from './HeaderProjectsStyles';
import { HeaderTypography } from '../../common/components/tableHeader/TableHeaderStyles';
import { HeaderIconButton, CandidateDisplayType } from '../../common/components/headerTableIconButton/IconButton';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import React from 'react';
import ModalForm from '../modalForm/ModalForm';
import Skills from '../skills/Skills';

interface TextProps {
  title: string;
  variant?: TypographyTypeMap['props']['variant'];
  component?: React.ElementType;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40%',
  height: '90%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ProjectsTableHaeder({ title, component = 'div' }: React.PropsWithChildren<TextProps>) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <HeaderBox>
      <HeaderTypography variant="h4" component={component}>
        {title}
      </HeaderTypography>
      <HeaderDiv>
        <HeaderIconButton active onClick={handleOpen} type={CandidateDisplayType.PLUS}>
          <AddBoxOutlinedIcon />
        </HeaderIconButton>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Add project
            </Typography>
            <ModalForm />
            <Typography id="modal-modal-title" variant="h6" component="h2" style={{ marginTop: '15px' }}>
              Skills
            </Typography>
            <Skills />
            <textarea></textarea>
            <button type="submit">Save</button>
          </Box>
        </Modal>
      </HeaderDiv>
    </HeaderBox>
  );
}

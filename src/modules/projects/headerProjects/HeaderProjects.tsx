import React from 'react';
import { TypographyTypeMap } from '@mui/material';
import { HeaderBox } from '../../common/components/tableHeader/TableHeaderStyles';
import { HeaderDiv } from './HeaderProjectsStyles';
import { HeaderTypography } from '../../common/components/tableHeader/TableHeaderStyles';
import { HeaderIconButton, CandidateDisplayType } from '../../common/components/headerTableIconButton/IconButton';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { ProjectModal } from '../projectmodal/ProjectModal';

interface TextProps {
  title: string;
  variant?: TypographyTypeMap['props']['variant'];
  component?: React.ElementType;
}

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

export default function ProjectsTableHaeder({ title, component = 'div' }: React.PropsWithChildren<TextProps>) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <HeaderBox>
      <HeaderTypography variant="h4" component={component}>
        {title}
      </HeaderTypography>
      <HeaderDiv>
        <HeaderIconButton active onClick={handleOpen} type={CandidateDisplayType.PLUS}>
          <AddBoxOutlinedIcon />
        </HeaderIconButton>
        <ProjectModal status={open} setstatus={setOpen} name={'Add Project'} />
      </HeaderDiv>
    </HeaderBox>
  );
}


import {HeaderBox, HeaderDiv} from "../../common/components/tableHeader/TableHeaderStyles";
import {HeaderTypography} from "../../common/components/tableHeader/TableHeaderStyles";
import {HeaderIconButton, CandidateDisplayType} from "../../common/components/headerTableIconButton/IconButton";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import { useState } from 'react';

interface TextProps {
    title: string,
    component?: React.ElementType;
    onClick?: () => void;
  }

export default function CandidatesTableHeader({title, component = "div"}:  React.PropsWithChildren<TextProps>) {

  const [activeView, setActiveView] = useState<CandidateDisplayType>(CandidateDisplayType.TABLE);

  return (
    <HeaderBox >
      <HeaderTypography variant="h4" component={component} >
        {title}
      </HeaderTypography>
      <HeaderDiv>
        <HeaderIconButton active={activeView === CandidateDisplayType.TABLE} onClick={setActiveView} type={CandidateDisplayType.TABLE}>
          <FormatListBulletedIcon />
        </HeaderIconButton>
        <HeaderIconButton active={activeView === CandidateDisplayType.KABAN} onClick={setActiveView} type={CandidateDisplayType.KABAN}>
          <BorderAllIcon />
        </HeaderIconButton>
      </HeaderDiv>
    </HeaderBox>
  );
}
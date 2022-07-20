import React from 'react';
import {HeaderBox, HeaderDiv} from "../../common/components/tableHeader/TableHeaderStyles";
import {HeaderTypography} from "../../common/components/tableHeader/TableHeaderStyles";
import {HeaderIconButton, CandidateDisplayType} from "../../common/components/headerTableIconButton/IconButton";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import { useState } from 'react';
import { useTables } from "../../contexts/CandidatesTablesContext";

interface TextProps {
    title: string,
    component?: React.ElementType;
    onClick?: () => void;
  }

export default function CandidatesTableHeader({title, component = "div"}:  React.PropsWithChildren<TextProps>) {

  const [, setActiveView] = useState<CandidateDisplayType>(CandidateDisplayType.TABLE);
  
const tableValue = useTables().value;

  return (
    <HeaderBox >
      <HeaderTypography variant="h4" component={component} >
        {title}
      </HeaderTypography>
      <HeaderDiv>
        <HeaderIconButton active={tableValue === 0 ? true : false} onClick={setActiveView} type={CandidateDisplayType.TABLE}>
          <FormatListBulletedIcon />
        </HeaderIconButton>
        <HeaderIconButton active={tableValue === 0 ? false : true } onClick={setActiveView} type={CandidateDisplayType.KABAN}>
          <BorderAllIcon />
        </HeaderIconButton>
      </HeaderDiv>
    </HeaderBox>
  );
}
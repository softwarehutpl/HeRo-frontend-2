import React from 'react';
import { TypographyTypeMap } from '@mui/material';

import {HeaderBox } from "../../common/components/tableHeader/TableHeaderStyles";
import { HeaderDiv } from "./HeaderProjectsStyles";
import {HeaderTypography} from "../../common/components/tableHeader/TableHeaderStyles";
import {HeaderIconButton, CandidateDisplayType} from "../../common/components/headerTableIconButton/IconButton";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';


interface TextProps {
    title: string,
    variant?: TypographyTypeMap["props"]["variant"];
    component?: React.ElementType;
  }



export default function ProjectsTableHaeder({title, component = "div" }:  React.PropsWithChildren<TextProps>) {

  return (
    <HeaderBox >
      <HeaderTypography variant="h4" component={component} >
        {title}
      </HeaderTypography>
      <HeaderDiv >
        <HeaderIconButton  active onClick={()=>{}} type={CandidateDisplayType.PLUS}>
          <AddBoxOutlinedIcon />
        </HeaderIconButton>
      </HeaderDiv>
    </HeaderBox>
  );
}
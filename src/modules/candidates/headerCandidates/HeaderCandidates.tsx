import { TypographyTypeMap } from '@mui/material';
import {HeaderBox, HeaderDiv} from "../../common/components/tableHeader/TableHeaderStyles";
import {HeaderTypography} from "../../common/components/tableHeader/TableHeaderStyles";
import {HeaderIconButton} from "../../common/components/headerTableIconButton/IconButton";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import { useState } from 'react';

interface TextProps {
    title: string,
    variant?: TypographyTypeMap["props"]["variant"];
    component?: React.ElementType;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    routeOne?: string;
    routeTwo?: string;
  }

export default function CandidatesTableHeader({title, component = "div", routeOne, routeTwo }:  React.PropsWithChildren<TextProps>) {

  const [tableContent, setTableContent] = useState(true);


  return (
    <HeaderBox >
      <HeaderTypography variant="h4" component={component} >
        {title}
      </HeaderTypography>
      <HeaderDiv>
        <HeaderIconButton  route={`${routeOne}`}>
          <FormatListBulletedIcon />
        </HeaderIconButton>
        <HeaderIconButton  route={`${routeTwo}`}>
          <BorderAllIcon />
        </HeaderIconButton>
      </HeaderDiv>
    </HeaderBox>
  );
}
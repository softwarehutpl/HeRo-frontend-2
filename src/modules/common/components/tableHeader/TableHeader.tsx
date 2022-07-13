import { TypographyTypeMap } from '@mui/material';

import {HeaderBox, HeaderDiv} from "./TableHeaderStyles";
import {HeaderTypography} from "./TableHeaderStyles";
import {HeaderIconButton} from "../headerTableIconButton/IconButton";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import BorderAllIcon from '@mui/icons-material/BorderAll';





interface TextProps {
    title: string,
    route: string,
    variant?: TypographyTypeMap["props"]["variant"];
    component?: React.ElementType;
    // onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  }




export default function TableHeader({title, component = "div" }:  React.PropsWithChildren<TextProps>) {



  return (
    <HeaderBox >
      <HeaderTypography variant="h4" component={component} >
        {title}
      </HeaderTypography>
      <HeaderDiv>
    <HeaderIconButton  route="*">
        <FormatListBulletedIcon />
    </HeaderIconButton>
    <HeaderIconButton  route="*">
        <BorderAllIcon />
    </HeaderIconButton>
    </HeaderDiv>
    </HeaderBox>
  );
}
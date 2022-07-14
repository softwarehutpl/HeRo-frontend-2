import { TypographyTypeMap } from '@mui/material';
import {HeaderBox, HeaderDiv} from "./TableHeaderStyles";
import {HeaderTypography} from "./TableHeaderStyles";
// import {HeaderIconButton} from "../headerTableIconButton/IconButton";
// import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
// import BorderAllIcon from '@mui/icons-material/BorderAll';





interface TextProps {
    title: string,
    variant?: TypographyTypeMap["props"]["variant"];
    component?: React.ElementType;
    children?: any;
    // onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  }




export default function TableHeader({title, component = "div", children }:  React.PropsWithChildren<TextProps>) {



  return (
    <HeaderBox >
      <HeaderTypography variant="h4" component={component} >
        {title}
      </HeaderTypography>
      <HeaderDiv>
       {children}
      </HeaderDiv>
    </HeaderBox>
  );
}
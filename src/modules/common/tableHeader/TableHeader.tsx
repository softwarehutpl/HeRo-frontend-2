import { TypographyTypeMap } from '@mui/material';
import { useNavigate } from "react-router-dom";

import {HeaderBox} from "./TableHeaderStyles";
import {HeaderTypography} from "./TableHeaderStyles";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import IconButton from "@mui/material/IconButton";





interface TextProps {
    title: string,
    route: string,
    variant?: TypographyTypeMap["props"]["variant"];
    component?: React.ElementType;
    // onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  }




export default function TableHeader({title, route, component = "div" }:  React.PropsWithChildren<TextProps>) {

  const navigate = useNavigate();

  return (
    <HeaderBox >
      <HeaderTypography variant="h4" component={component} >
        {title}
      </HeaderTypography>
      
    <IconButton color="primary" onClick={() => navigate(`${route}`)}>
        <FormatListBulletedIcon />
    </IconButton>
    </HeaderBox>
  );
}
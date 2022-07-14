import { TypographyTypeMap } from '@mui/material';

import {HeaderBox, HeaderDiv} from "../../common/components/tableHeader/TableHeaderStyles";
import {HeaderTypography} from "../../common/components/tableHeader/TableHeaderStyles";
import {HeaderIconButton} from "../../common/components/headerTableIconButton/IconButton";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';






interface TextProps {
    title: string,
    variant?: TypographyTypeMap["props"]["variant"];
    component?: React.ElementType;
    // onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    routeOne: string;
    routeTwo?: string;
  }




export default function ProjectsTableHaeder({title, component = "div", routeOne, routeTwo }:  React.PropsWithChildren<TextProps>) {

  return (
    <HeaderBox >
      <HeaderTypography variant="h4" component={component} >
        {title}
      </HeaderTypography>
      <HeaderDiv>
        <HeaderIconButton  route={`${routeOne}`} >
          <AddBoxOutlinedIcon />
        </HeaderIconButton>
      </HeaderDiv>
    </HeaderBox>
  );
}
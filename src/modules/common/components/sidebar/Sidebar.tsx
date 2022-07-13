import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { StyledBox } from './styled/StyledBox';
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <StyledBox>
      <MenuList>
        <MenuItem onClick={() => navigate("/")}>
          <ListItemIcon>
            <HomeIcon style={{color: 'black'}} fontSize="small" />
          </ListItemIcon>
        </MenuItem>
        <MenuItem onClick={() => navigate("candidates")}>
          <ListItemIcon>
            <PeopleIcon style={{color: 'black'}} fontSize="small" />
          </ListItemIcon>
        </MenuItem>
        <MenuItem onClick={() => navigate("projects")}>
          <ListItemIcon>
            <FormatListBulletedIcon style={{color: 'black'}} fontSize="small" />
          </ListItemIcon>
        </MenuItem>
      </MenuList>
      </StyledBox>
  );
}

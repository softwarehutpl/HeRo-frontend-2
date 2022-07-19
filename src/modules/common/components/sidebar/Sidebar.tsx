import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { NavLink, useNavigate, Link } from "react-router-dom";
import { StyledBox } from './SidebarStyles';


export default function Sidebar() {
  return (
    <StyledBox>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <NavLink to="/" style={({isActive}) => (isActive ? { color: 'blue' } : { color: 'black' })}>
              <HomeIcon fontSize="small" />
            </NavLink>
          </ListItemIcon>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <NavLink to="candidates" style={({isActive}) => (isActive ? { color: 'blue' } : { color: 'black' })}>
              <PeopleIcon fontSize="small" />
            </NavLink>
          </ListItemIcon>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <NavLink to="projects" style={({isActive}) => (isActive ? { color: 'blue' } : { color: 'black' })}>
              <FormatListBulletedIcon fontSize="small" />
            </NavLink>
          </ListItemIcon>
        </MenuItem>
      </MenuList>
      </StyledBox>
  );
}

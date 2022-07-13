import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { StyledBox } from './styled/StyledBox';


export default function Sidebar() {
  return (
    <StyledBox>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <HomeIcon fontSize="small" />
          </ListItemIcon>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PeopleIcon fontSize="small" />
          </ListItemIcon>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <FormatListBulletedIcon fontSize="small" />
          </ListItemIcon>
        </MenuItem>
      </MenuList>
      </StyledBox>
  );
}

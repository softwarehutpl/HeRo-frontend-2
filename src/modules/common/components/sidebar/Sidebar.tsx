import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Box from "@mui/material/Box";
import { styled } from '@mui/material/styles';

const CustomizedBox = styled(Box)`
  max-width: 50px;
  min-height: 100px;
  background-color: #F4F4F4;
  margin-left: 0px;
  display: flex;
`;

export default function Sidebar() {
  return (
    <CustomizedBox>
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
      </CustomizedBox>
  );
}

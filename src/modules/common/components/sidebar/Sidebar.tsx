import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import ListItemIcon from '@mui/material/ListItemIcon';
// import DraftsIcon from '@mui/icons-material/Drafts';
// import SendIcon from '@mui/icons-material/Send';
// import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

export default function Sidebar() {
  return (
    <Paper elevation={0} sx={{ width: 50, height: 400 }}>
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
    </Paper>
  );
}

import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { useContext } from 'react';
import SigninContext from '../../../contexts/SigninContext';
import axios from 'axios';
import { CustomLink } from './NavbarStyles';

export default function Navbar() {
  const { isLogIn, setIsLogIn } = useContext(SigninContext);
  const navigate = useNavigate();
  const goToSignIn = () => {
    navigate('/signin', { replace: true });
  };

  const logOut = () => {
    axios.get('https://swh-t-praktyki2022-app.azurewebsites.net/Auth/LogOut');

    setIsLogIn(false);
  };

  return (
    <Box sx={{ flexGrow: 1, mb: 5 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: 'black' }}>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <CustomLink to="/">Softwarehut Hiring</CustomLink>
          </Typography>
          <Button color="inherit">
            <NotificationsNoneIcon />
          </Button>
          {isLogIn ? (
            <Button color="inherit" onClick={logOut}>
              <LogoutIcon sx={{ paddingLeft: '20px' }} />
            </Button>
          ) : (
            <Button color="inherit" onClick={goToSignIn}>
              <PersonIcon sx={{ paddingLeft: '20px' }} />
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

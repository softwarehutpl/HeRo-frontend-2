import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonIcon from "@mui/icons-material/Person";

export default function Navbar() {
  let navigate = useNavigate();
  const GoToSignIn = () => {
    navigate("/signin", { replace: true });
  };

  return (
    <Box sx={{ flexGrow: 1, mb: 5 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "black" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Softwarehut Hiring
          </Typography>
          <Button color="inherit">
            <NotificationsNoneIcon />
          </Button>
          <Button color="inherit" onClick={GoToSignIn}>
            <PersonIcon sx={{ paddingLeft: "20px" }} />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

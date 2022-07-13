import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonIcon from "@mui/icons-material/Person";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, mb: 5}}>
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
            <PersonIcon sx={{ paddingLeft: "20px" }} />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

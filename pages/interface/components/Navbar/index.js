import { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavbarLeft = () => {
  // State to manage the opening and closing of the drawer
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Function to toggle the drawer state
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box
      sx={{
        width: 240,
        flexShrink: 0,
        backgroundColor: "#4caf50",
        color: "#fff",
      }}
    >
      {/* Drawer Component */}
      <Drawer
        variant="persistent"
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            backgroundColor: "#4caf50",
            color: "#fff",
          },
        }}
      >
        <List>
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Services" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Contact" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>

      {/* Toggle Button */}
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer}
        sx={{
          position: "fixed",
          top: 16,
          left: 16,
          backgroundColor: "#fff",
          color: "#4caf50",
          zIndex: 1201, // Ensure this button appears above other content
        }}
      >
        <MenuIcon />
      </IconButton>
    </Box>
  );
};

export default NavbarLeft;

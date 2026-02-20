import React, { useEffect, useState } from "react";
import {
  Drawer,
  Box,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = ({ setActive }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userData"));

    if (storedUser) {
      setUser(storedUser);
    } else {
      window.location.href = "/login";
    }
  }, []);

  if (!user) return null;

  const initials =
    `${user.firstName?.[0] || ""}${user.lastName?.[0] || ""}`.toUpperCase();

  const handleLogout = () => {
    localStorage.removeItem("userData");
    window.location.href = "/login";
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 260,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 260,
          boxSizing: "border-box",
          background: "#0f2a44",
          color: "#fff",
        },
      }}
    >
      {/* Top User Info */}
      <Box sx={{ p: 2, display: "flex", alignItems: "center", gap: 2 }}>
        <Avatar sx={{ bgcolor: "#1976d2", borderRadius: "10px" }}>
          {initials}
        </Avatar>
        <Box>
          <Typography fontWeight="bold">
            {user.firstName} {user.lastName}
          </Typography>
          <Typography variant="body2" color="gray">
            {user.email}
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ bgcolor: "#1e3a5f" }} />

      {/* Menu */}
      <List>
        <Typography sx={{ px: 2, py: 1, fontSize: 12, color: "gray" }}>
          DASHBOARD
        </Typography>

        <ListItem disablePadding>
          <ListItemButton onClick={() => setActive(1)}>
            <ListItemIcon><HomeIcon sx={{ color: "#fff" }} /></ListItemIcon>
            <ListItemText primary="Overview" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={() => setActive(2)}>
            <ListItemIcon><PersonIcon sx={{ color: "#fff" }} /></ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={() => setActive(3)}>
            <ListItemIcon><LockIcon sx={{ color: "#fff" }} /></ListItemIcon>
            <ListItemText primary="Security" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={() => setActive(4)}>
            <ListItemIcon><NotificationsIcon sx={{ color: "#fff" }} /></ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItemButton>
        </ListItem>

        <Typography sx={{ px: 2, py: 1, fontSize: 12, color: "gray" }}>
          QUICK ACTION
        </Typography>

        <ListItem disablePadding>
          <ListItemButton onClick={() => setActive(5)}>
            <ListItemIcon><HelpIcon sx={{ color: "#fff" }} /></ListItemIcon>
            <ListItemText primary="Help & Support" />
          </ListItemButton>
        </ListItem>

        <Typography sx={{ px: 2, py: 1, fontSize: 12, color: "gray" }}>
          ACCOUNT
        </Typography>

        <ListItem disablePadding>
          <ListItemButton onClick={handleLogout}>
            <ListItemIcon><LogoutIcon sx={{ color: "#ff6b6b" }} /></ListItemIcon>
            <ListItemText primary="Sign out" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;

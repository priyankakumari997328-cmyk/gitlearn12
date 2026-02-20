import { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import Ncard from "./Ncard";
import Activitycard from "./Activitycard";

const Notifications = () => {
  const [email, setEmail] = useState(true);
  const [security, setSecurity] = useState(true);

  return (
    <Box
      sx={{
        maxWidth: "1000px",
        borderRadius: "12px",
        border: "1px solid #2563eb",
        borderTop: "3px solid #2563eb",
        bgcolor: "rgb(19, 45, 70)",
        p: 3,
        color: "white",
        mt: "80px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
        marginLeft: "285px",
        marginRight: "20px"
      }}
    >
      <Typography sx={{ fontSize: 18, mb: 1 }}>
        🔔 Notification Preferences
      </Typography>

      <Typography sx={{ fontSize: 14, color: "#94a3b8", mb: 2 }}>
        Manage how and when you receive notifications about your account activity.
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Ncard
            title="Email Notifications"
            desc="Receive important updates via email"
            checked={email}
            onChange={() => setEmail(!email)}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Ncard
            title="🔒 Security Alerts"
            desc="Get notified about security changes"
            checked={security}
            onChange={() => setSecurity(!security)}
          />
        </Grid>
      </Grid>

      <Typography sx={{ fontSize: 18, mt: 3 }}>
        🕒 Recent Activity
      </Typography>

      <Activitycard
        icon="✅"
        title="Profile Updated"
        desc="Your profile information was successfully updated — Today"
      />
    </Box>
  );
};

export default Notifications;
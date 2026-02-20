import { Card, CardContent, Typography, Box } from "@mui/material";

const Activitycard = ({ icon, title, desc }) => {
  return (
    <Card
      sx={{
        background: "rgb(20, 47, 71)",
        borderRadius: "10px",
        mt: 2,
        color: "white",
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography>{icon}</Typography>
          <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
            {title}
          </Typography>
        </Box>

        <Typography sx={{ fontSize: 14, color: "#94a3b8" }}>
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Activitycard;
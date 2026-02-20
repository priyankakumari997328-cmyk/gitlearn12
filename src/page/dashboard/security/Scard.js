// Scard.jsx
import { Box, Typography } from "@mui/material";

const Scard = ({ icon, title, value }) => {
  return (
    <Box
      sx={{
        background: "rgb(16, 41, 63)",
        flex: 1,
        p: 2,
        borderRadius: 2,
        border: "1px solid #1e293b",
      }}
    >
      <Typography color="white" fontWeight="bold">
        {icon} {title}
      </Typography>
      <Typography color="#ddd">{value}</Typography>
    </Box>
  );
};

export default Scard;
import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const FeatureItem = ({ text }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",   
        alignItems: "center",       
        backgroundColor: "rgb(20, 52, 82)",
        padding: "12px 16px",
        borderRadius: "8px",
        border: "1px solid white",
        margin: "20px auto",        // box khud bhi center
        width: "700px",
        textAlign: "center",
        gap: 1
      }}
    >
      <CheckCircleIcon sx={{ color: "#4caf50" }} />
      <Typography color="white">{text}</Typography>
    </Box>
  );
};

export default FeatureItem;

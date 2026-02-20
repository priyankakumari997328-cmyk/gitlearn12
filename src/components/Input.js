import { TextField, Box, Typography } from "@mui/material";

const CustomInput = ({ label, ...props }) => {
  return (
    <Box sx={{ marginBottom: "15px" }}>
      <Typography sx={{ fontSize: "12px", marginBottom: "5px" }}   >
        {label}
      </Typography>
      <TextField
        fullWidth
        size="small"
        sx={{
          background: "rgb(32, 68, 102)",
          borderRadius: "10px",
          input: {
            color: "white",
            padding: "8px 10px",   // 👈 height kam
            fontSize: "14px",

          },
        }}
        variant="outlined"
        {...props}
      />
    </Box>
  );
};

export default CustomInput;

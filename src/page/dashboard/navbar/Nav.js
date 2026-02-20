import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Nav = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        left: "250px",
        width: "calc(100% - 250px)",
        backgroundColor: "#1a3c5c",
        height: "70px",
        justifyContent: "center",
        boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" fontWeight="bold">
          WebTechPractice - Dashboard
        </Typography>

        <Button
          variant="outlined"
          sx={{
            color: "white",
            borderColor: "white",
            "&:hover": {
              borderColor: "#60a5fa",
              backgroundColor: "rgba(96,165,250,0.1)",
            },
          }}
        >
          Theme
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LandingpStyle from "../../css/Navbar";

const Navbar = () => {
  const styles = LandingpStyle();
  const navigate = useNavigate();

  return (
    <Box sx={styles.navbar}>
      <Box >
        <Button sx={{ fontSize: "20px", fontWeight: "bold" }} onClick={() => {
          document.getElementById("home").scrollIntoView({ behavior: "smooth" });
        }}>
          WebTech Practice
        </Button>
      </Box>

      <Box sx={{ gap: "20px", display: "flex" }}>
        <Button onClick={() => {
          document.getElementById("about").scrollIntoView({ behavior: "smooth" });
        }}>
          About
        </Button>

        <Button onClick={() => {
          document.getElementById("service").scrollIntoView({ behavior: "smooth" });
        }}>
          Service
        </Button>

        <Button>Theme</Button>

        {/* Login */}
        <Button variant="outlined" onClick={() => navigate("/login")}>
          Login
        </Button>

        {/* Signup */}
        <Button variant="contained" onClick={() => navigate("/signup")}>
          Signin
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;

import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Footer = () => {
      const navigate = useNavigate();

    return (
        <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#182848",
            padding: "10px",
            
        }}>
            <Box sx={{color: "white", paddingTop: "10px"}}>
                <Typography variant="text">© 2025 WebTech Practice. Built for learning and growth.</Typography>
            </Box>
            <Box sx={{ gap: "20px", display: "flex" }}>
                <Button onClick={() => {
                    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
                }} variant="outlined">About</Button>
                <Button onClick={() => {
                    document.getElementById("service").scrollIntoView({ behavior: "smooth" });
                }} variant="outlined">Service</Button>
                <Button variant="outlined" onClick={() => navigate("/login")}>Login</Button>
                <Button variant="contained" onClick={() => navigate("/signup")}>Signin</Button>
            </Box>
        </Box>
    )
}
export default Footer;
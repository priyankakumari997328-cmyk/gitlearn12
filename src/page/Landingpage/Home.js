import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import homeRightStyle from "../../css/Home";

import MuiSlider from "../card/Slide";

const Home = () => {
    const navigate = useNavigate();
    const styles = homeRightStyle; // 👈 yahan fix

    return (
        <Box id="home" sx={styles.contain}>
            <Box sx={styles.leftcont}>
                <Box>
                    <Typography sx={styles.title} fontWeight="bold" >
                        Launch your Web <br />
                        Tech practice site in <br />
                        minutes
                    </Typography>

                    <Typography sx={styles.desc}>
                        A clean, modern starter template with Login, Signup, Dashboard,
                        Profile and Logout pages <br />
                        using only HTML/CSS/JS and browser localStorage. Perfect for learning
                        and practicing web <br />
                        development fundamentals.
                    </Typography>

                    <Box sx={styles.buttonRow}>
                        <Button variant="contained" onClick={() => navigate("/signup")}>
                            Get Started
                        </Button>

                        <Button variant="outlined" onClick={() => navigate("/login")}>
                            I already have an account.
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box sx={styles.rightcont}>
                <MuiSlider />
            </Box>
        </Box>
    );
};

export default Home;

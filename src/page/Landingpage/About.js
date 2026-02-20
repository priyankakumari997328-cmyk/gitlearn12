import { Box, Typography } from "@mui/material";
import FeatureItem from "../card/Acard";

const About = () => {
    return (
        <Box id="about" sx={{  display: "flex", justifyContent: "center",color: "white",  textAlign: "center", paddingTop: "100px" }}>
            <Box sx={{ maxWidth: 800 }}>
                <Typography variant="h4" fontWeight="bold" mb={2}>
                    About This Project
                </Typography>

                <Typography sx={{ color: "#aaa", mb: 4 }}>
                    "This comprhensive template is designed for students and developers to practice modern
                    web fundamentals--responsive layout, accessible forms client-side state management, and
                    component architecture--without any framework or complex build process.
                     "
                </Typography>
                <Box>
                    <FeatureItem text="Single-file pages you can open directly in any modern browser" />
                    <FeatureItem text="Single-file pages you can open directly in any modern browser" />

                    <FeatureItem text="Single-file pages you can open directly in any modern browser" />

                    <FeatureItem text="Single-file pages you can open directly in any modern browser" />

                    <FeatureItem text="Single-file pages you can open directly in any modern browser" />

                    <FeatureItem text="Single-file pages you can open directly in any modern browser" />

                   

                </Box>
            </Box>
        </Box>
    );
};

export default About;

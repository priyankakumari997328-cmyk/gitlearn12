import { Box, Typography } from "@mui/material";
import includedData from "../../components/Include";
import ServiceStyle from "../../css/Service";
const Included = () => {
    const styles = ServiceStyle();
    return (
        <Box id="service" sx={{ background: "rgb(13,37,59)", py: 8 }}>

            <Typography variant="h4" textAlign="center" color="white" mb={4}>
                What's Included
            </Typography>

            <Box sx={styles.flex}>
                <Box sx={styles.flexup}>
                    <Typography color="white" fontWeight="bold" mb={1}> {includedData.title} </Typography>
                    <Typography fontSize="14px">{includedData.desc}</Typography>
                </Box>
                <Box sx={styles.flexup}>
                    <Typography color="white" fontWeight="bold" mb={1}> {includedData.title} </Typography>
                    <Typography fontSize="14px">{includedData.desc}</Typography>
                </Box>
                <Box sx={styles.flexup}>
                    <Typography color="white" fontWeight="bold" mb={1}> {includedData.title} </Typography>
                    <Typography fontSize="14px">{includedData.desc}</Typography>
                </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "35px" }}>
                <Box sx={styles.flexup}>
                    <Typography color="white" fontWeight="bold" mb={1}> {includedData.title} </Typography>
                    <Typography fontSize="14px">{includedData.desc}</Typography>
                </Box>
                <Box sx={styles.flexup}>
                    <Typography color="white" fontWeight="bold" mb={1}> {includedData.title} </Typography>
                    <Typography fontSize="14px">{includedData.desc}</Typography>
                </Box>
                <Box sx={styles.flexup}>
                    <Typography color="white" fontWeight="bold" mb={1}> {includedData.title} </Typography>
                    <Typography fontSize="14px">{includedData.desc}</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Included;

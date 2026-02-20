import { Card, CardContent, Typography, Checkbox, Box } from "@mui/material";

const Ncard = ({ title, desc, checked, onChange }) => {
    return (
        <Card
            sx={{
                background: "rgb(23, 35, 48)",
                border: "1px solid #1e293b",
                borderRadius: "8px",
                width: " 470px",
                color: "white",
            }}
        >
            <CardContent>
                <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
                    {title}
                </Typography>

                <Typography sx={{ fontSize: 14, color: "#94a3b8" }}>
                    {desc}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                    <Checkbox checked={checked} onChange={onChange} />
                    <Typography sx={{ fontSize: 14 }}>Enable</Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default Ncard;
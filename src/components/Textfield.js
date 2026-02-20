import { TextField, Box } from "@mui/material";

const Inputfield = ({ label, type = "text", placeholder, name, value, onChange }) => {
    return (
        <Box sx={{ flex: 1, minWidth: 200 }}>
            <TextField
                fullWidth
                size="small"   // 👈 sabse easy tareeka
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                required
                variant="outlined"
                sx={{
                    background: "rgb(32, 68, 102)",
                    borderRadius: 2,
                    input: {
                        color: "white",
                        padding: "8px 10px",   // 👈 height kam
                        fontSize: "14px",

                    },
                    "& .MuiOutlinedInput-root": {
                        minHeight: "38px",    // 👈 overall height
                        "& fieldset": { borderColor: "#2563eb", borderRadius: "10px" },
                        "&:hover fieldset": { borderColor: "#60a5fa" },
                        "&.Mui-focused fieldset": { borderColor: "#60a5fa" },
                    },

                }}
            />
        </Box>
    );
};
export default Inputfield;
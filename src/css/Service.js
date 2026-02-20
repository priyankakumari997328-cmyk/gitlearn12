import { fontSize } from "@mui/system";

const ServiceStyle =()=>({
    flexup: {
            minWidth: "250px",
            maxWidth: "350px",
            backgroundColor: "rgb(17,43,66)",
            borderRadius: 3,
            padding: 3,
            border: "1px solid #444",
            color: "#ccc",
            boxShadow: "0 30px 10px rgba(31,31,31,0.3)",
            "&:hover": {
              backgroundColor: "rgb(19,46,72)",
              borderTop: "2px solid blue"
            }
        },
    desc:{
        fontSize: "20px"
    },
    flex: { display: "flex", justifyContent: "center", gap: "20px" }
})
export default ServiceStyle;
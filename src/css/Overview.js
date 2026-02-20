import { height, maxHeight, width } from "@mui/system";

const OverviewStyle = () => ({
  welcome: {
    p: 3,
    maxWidth: 970,
    borderRadius: 2,
    border: "1px solid #2563eb",
    borderTop: "3px solid #2563eb",
    boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
    marginLeft: "285px",
    mt: "80px",
    background: "rgb(20,47,71)",
  },

  container: {
    mt: 2,
    gap: 2,
    display: "flex",

  },
  card: {
     width: "250px",
     
  },

  wCard: {
    p: 2,
    borderRadius: 2,
    background: "rgb(40,80,117)",
    color: "white",
    boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
    transition: "0.3s",
    "&:hover": {
      transform: "translateY(-5px)"
    },
    height: "150px"
  },

  progress: {
    mt: 1,
    height: 6,
    background: "#666",
    borderRadius: 5,
    overflow: "hidden"
  },

  progressBar: {
    height: "100%",
    background: "rgb(7,116,241)"
  },

  quickCard: {
    p: 2,
    borderRadius: 2,
    textAlign: "center",
    cursor: "pointer",
    background: "rgb(44,87,128)",
    color: "#ccc",
    transition: "0.3s",
    "&:hover": {
      background: "rgb(10,132,247)",
      color: "white"
    },
    width: "445px"
  }
});

export default OverviewStyle;
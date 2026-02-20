const LandingpStyle = () => ({
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#182848",
    padding: "20px 30px",
    color: "white",
    margin: "0px",
    position: "fixed",
    width: "1290px",
    zIndex: "100",

  },

  title: {
    fontSize: "60px",
  },

  desc: {
    fontSize: "16px",
    lineHeight: 1.6,
    marginBottom: "30px",
    color: "#ccc",
  },

  buttonRow: {
    "& button": {
      fontSize: "14px",
      color: "rgb(238,230,230)",
      marginRight: "10px",
    },
  }

})
export default LandingpStyle;
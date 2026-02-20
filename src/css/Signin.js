const SignupStyle = () => ({
  page: {
    backgroundColor: "rgb(14, 36, 56)",
    minHeight: "90vh",
    placeItems: "center",
    paddingTop: "50px"
  },

  card: {
    backgroundColor: "rgb(17,38,58)",
    padding: "30px",
    borderRadius: "10px",
    color: "#b1afaf",
    width: "380px",
    boxShadow: "3px 5px 10px black",
  },

  head: {
    color: "white",
    fontSize: "22px",
    fontWeight: "bold",
    textAlign: "center"
  },

  text: {
    fontSize: "13px",
    mb: 2,
    textAlign: "center"
  },

  flex: {
    display: "flex",
    gap: "15px",
    mt: 2,
  },

  letter: {
    fontSize: "10px",
    mt: 1,
  },

  checkbox: {
    display: "flex",
    alignItems: "center",
    mt: 2,
  },

  footer: {
    mt: 3,
    fontSize: "13px",
    textAlign: "center",
    color: "#14afca",
    cursor: "pointer",
  },
  border:{
    borderColor: "while"
  }
});

export default SignupStyle;

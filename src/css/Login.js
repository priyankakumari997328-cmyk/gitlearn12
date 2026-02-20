// import React from 'react'

import Login from "../page/login/Login";

// import Login from "../Pages/Login";

const LoginStyle = (theme) => ({
    LoginPage:{
     display: "flex",
     justifyContent : "center",
     alignItems: "center",
     height: "100vh",
     margin: 0, 
     backgroundColor: "rgb(14, 36, 56)",
     
     },
    LoginBox:{
    backgroundColor: "rgb(17,38,58)",
    color: "white",
    padding: "45px 20px",
    borderRadius: "10px",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
    borderTop: "3px solid #0080ff",
    width: "300px"
    
   
      
},
   LoginHeading:{
    marginBottom: "10px",
    fontWeight: "bold",
    textAlign: "center", 
},

 LoginText:{
    marginBottom: "20px",
    textAlign: "center",
    marginTop: "5px", 
},

LoginButton:{
    marginTop: "10px",
    padding: "10px",
    fontWeight: "bold",
    width: "93%",
    marginBottom: "20px",
},
RememberMeBox:{
    marginTop: "px",
    display: "flex",
    alignItems: "center",
    
},
RememberMeText:{
    fontSize : "12px",
    marginLeft: "-5px",
},
ForgotPasswordText:{
    fontSize : "12px",
    marginLeft: "18px",
    color: "#2DD4BF",
    cursor: "pointer",
},
SignUpText:{
    color: "#2DD4BF",
    cursor: "pointer",
    fontSize: "12px",
    marginLeft: "20px",
}


})

export default LoginStyle;
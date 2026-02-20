import { Box, Checkbox, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import LoginStyle from '../../css/Login';
import CustomInput from '../../components/Input';
import Button from "@mui/material/Button";
import React, { useState } from 'react';

const Login = () => {
  const styles = LoginStyle();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
  if (!email.trim() || !password.trim()) {
    alert("Please fill email and password");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.length === 0) {
    alert("No user found. Please signup first.");
    return;
  }

  const foundUser = users.find(
    (u) => u.email === email && u.password === password
  );

  if (foundUser) {
    localStorage.setItem("userData", JSON.stringify(foundUser));
    alert("Login successful");
    navigate("/dashboard");
  } else {
    alert("Invalid email or password");
  }
};


  return (
    <Box sx={styles.LoginPage}>   
      <Box sx={styles.LoginBox}>
        <Typography variant="h5" sx={styles.LoginHeading}>
          Welcome Back 👋
        </Typography>

        <Typography sx={styles.LoginText}>
          Sign in to continue to your dashboard
        </Typography>

        <CustomInput
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          required
          value={email}
          require
          onChange={(e) => setEmail(e.target.value)}
        />

        <CustomInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Box sx={styles.RememberMeBox}>
          <Checkbox size='small'/> 
          <Typography sx={styles.RememberMeText}>
            Remember me for 30 days
          </Typography>
          <Typography sx={styles.ForgotPasswordText}>
            Forgot password?
          </Typography>
        </Box>

        <Button 
          variant="contained" 
          fullWidth 
          color="primary" 
          sx={styles.LoginButton}
          onClick={handleLogin}
        >
          Login
        </Button>

        <Typography variant='body2' sx={{ fontSize: "12px" }}>
          New to WebTech Practice?
          <Typography
            component="span"
            variant='body2'
            sx={styles.SignUpText}
            onClick={() => navigate("/signup")}
          >
            {" "}Create an account
          </Typography>
        </Typography>
      </Box>
    </Box>
  )
}

export default Login;

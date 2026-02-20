import { Box, Typography, Button, Checkbox } from "@mui/material";
import SignupStyle from "../css/Signin";
import { useState } from "react";
import CustomInput from "../components/Input";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const styles = SignupStyle();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const { firstName, lastName, email, password, confirmPassword, terms } =
      formData;

    if (!firstName || !lastName || !email || !password) {
      alert("All fields are required!");
      return;
    }

    if (!passwordRegex.test(password)) {
      alert(
        "Password must be at least 8 characters and include 1 uppercase letter, 1 number, and 1 special character."
      );
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!terms) {
      alert("Please accept terms & conditions.");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some((u) => u.email === email)) {
      alert("Email is already registered!");
      return;
    }

    const userData = { firstName, lastName, email, password };
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully!");
    navigate("/login");
  };


  return (
    <Box sx={styles.page}>
      <Box sx={styles.card}>
        <Typography sx={styles.head}>Create your account</Typography>
        <Typography sx={styles.text}>
          Signup to practice the dashboard.
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <Box sx={styles.flex}>
            <Box>
              <Typography>First Name</Typography>
              <CustomInput
                placeholder="Firstname"
                name="firstName"
                value={formData.firstName}
                size="small"
                fullWidth
                onChange={handleChange}
              />
            </Box>
            <Box>
              <Typography>Last Name</Typography>
              <CustomInput
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                size="small"
                fullWidth
                onChange={handleChange}
              />
            </Box>
          </Box>

          <Box>
            <Typography>Email</Typography>
            <CustomInput
              placeholder="Email"
              name="email"
              type="email"
              value={formData.email}
              fullWidth
              size="small"
              onChange={handleChange}
              require
            />
          </Box>

          <Box sx={styles.flex}>
            <Box>
              <Typography>Password</Typography>
              <CustomInput
                placeholder="Password"
                name="password"
                type="password"
                value={formData.password}
                size="small"
                fullWidth
                require
                onChange={handleChange}
              />
            </Box>
            <Box>
              <Typography>Confirm Password</Typography>
              <CustomInput
                placeholder="Confirm Password"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                size="small"
                fullWidth
                require
                onChange={handleChange}
              />
            </Box>
          </Box>

          <Typography sx={styles.letter}>
            Use at least 8 characters, with letter & numbers.
          </Typography>

          <Box sx={styles.checkbox}>
            <Checkbox
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
            />
            <Typography>I agree to terms</Typography>
          </Box>

          <Button type="submit" variant="contained" fullWidth>
            Create account
          </Button>
        </Box>

        <Typography sx={styles.footer}>
          Already have an account?{" "}
          <span
            style={{ color: "#1976d2", cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            Sign in
          </span>
        </Typography>
      </Box>
    </Box>
  );
};

export default Signin;

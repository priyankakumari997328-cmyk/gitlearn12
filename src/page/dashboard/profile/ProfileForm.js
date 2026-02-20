import { useState, useEffect } from "react";
import { Box, Typography, Grid, Button, Paper } from "@mui/material";
import Inputfield from "../../../components/Textfield";
import InputFull from "./Inputfull";
import ProfileStyle from "../../../css/Profile";

const ProfileForm = ({ showDiv }) => {
  const styles = ProfileStyle();

  const [form, setForm] = useState({
    name: "",
    dob: "",
    email: "",
    phone: "",
    address: "",
    pincode: "",
    city: "",
    country: "",
    github: "",
  });

  // Load saved data on mount
  

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("profileData", JSON.stringify(form));
    alert("Profile Saved!");
    resetForm();
    
  };

  const resetForm = () => {
    setForm({
      name: "",
      dob: "",
      email: "",
      phone: "",
      address: "",
      pincode: "",
      city: "",
      country: "",
      github: "",
    });
  };

  return (
    <Box sx={{ maxWidth: 1000, marginLeft: "285px", mt: "80px", mb: "20px" }}>
      <Paper
        sx={{
          p: 3,
          borderRadius: 2,
          backgroundColor: "rgb(19, 45, 70)",
          border: "1px solid #2563eb",
          borderTop: "3px solid #2563eb",
          boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
        }}
      >
        <Typography variant="h5" mb={2} sx={{ color: "white" }}>
          Profile Settings
        </Typography>

        <form onSubmit={handleSubmit}>
          <Typography variant="h6" mb={1} sx={{ color: "white" }}>
            Personal Information
          </Typography>

          <Grid sx={styles.container}>
            <Grid item sx={styles.item}>
              <Typography sx={{ color: "white" }}>Enter Full Name</Typography>
              <Inputfield
                placeholder="Enter Full Name"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </Grid>

            <Grid item sx={styles.item}>
              <Typography sx={{ color: "white" }}>Date of Birth</Typography>
              <Inputfield
                type="date"
                name="dob"
                value={form.dob}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Grid sx={styles.container}>
            <Grid item sx={styles.item}>
              <Typography sx={{ color: "white" }}>Email Address</Typography>
              <Inputfield
                type="email"
                placeholder="Enter Email Address"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </Grid>

            <Grid item sx={styles.item}>
              <Typography sx={{ color: "white" }}>Phone Number</Typography>
              <Inputfield
                type="number"
                placeholder="Enter Mobile No"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Typography variant="h6" mb={1} sx={{ color: "white" }}>
            Address Information
          </Typography>

          <Typography sx={{ color: "white" }}>Street Address</Typography>
          <Grid sx={styles.address}>
            <InputFull
              placeholder="Enter your complete address"
              name="address"
              value={form.address}
              onChange={handleChange}
            />
          </Grid>

          <Grid sx={styles.container}>
            <Grid item sx={styles.item}>
              <Typography sx={{ color: "white" }}>PIN Code</Typography>
              <Inputfield
                type="number"
                placeholder="Enter Your pincode"
                name="pincode"
                value={form.pincode}
                onChange={handleChange}
              />
            </Grid>

            <Grid item sx={styles.item}>
              <Typography sx={{ color: "white" }}>City</Typography>
              <Inputfield
                placeholder="Enter your city name"
                name="city"
                value={form.city}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Grid sx={styles.container}>
            <Grid item sx={styles.item}>
              <Typography sx={{ color: "white" }}>Country</Typography>
              <Inputfield
                placeholder="Enter your country name"
                name="country"
                value={form.country}
                onChange={handleChange}
              />
            </Grid>

            <Grid item sx={styles.item}>
              <Typography sx={{ color: "white" }}>Github Profile</Typography>
              <Inputfield
                type="url"
                placeholder="https://github.com/username"
                name="github"
                value={form.github}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
            <Button
              type="button"
              variant="outlined"
              onClick={() => {
                resetForm();
                showDiv(2);
              }}
            >
              Cancel
            </Button>

            <Button variant="contained" type="submit">
              Save Changes
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default ProfileForm;

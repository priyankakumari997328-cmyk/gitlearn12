import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import Pinput from "./Pinput";
import Scard from "./Scard";

const Security = ({ showDiv }) => {
  const [pass, setPass] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const handleChange = (e) => {
    setPass({ ...pass, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    let loggedInUser = JSON.parse(localStorage.getItem("userData"));
    const passpattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}$/;

    if (!pass.current || !pass.new || !pass.confirm) {
      alert("Please fill all fields");
      return;
    }

    if (pass.current !== loggedInUser.password) {
      alert("Incorrect current password!");
      return;
    }

    if (!passpattern.test(pass.new)) {
      alert("Password must be strong!");
      return;
    }

    if (pass.new !== pass.confirm) {
      alert("Passwords do not match");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUser = { ...loggedInUser, password: pass.new };

    users = users.map((u) =>
      u.email === loggedInUser.email ? updatedUser : u
    );

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("userData", JSON.stringify(updatedUser));

    alert("Password updated!");
    setPass({ current: "", new: "", confirm: "" });
  };

  const handleClear = () => {
    setPass({ current: "", new: "", confirm: "" });
  };

  return (
    <Box
      sx={{
        borderRadius: 3,
        p: 3,
        border: "1px solid #2563eb",
        borderTop: "3px solid #2563eb",
        maxWidth: 970,
        backgroundColor: "rgb(19, 45, 70)",
        mx: "auto",
        mt: "80px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        marginLeft: "285px"
      }}
    >
      <Typography variant="h5" color="white" mb={2}>
        Security Settings
      </Typography>

      <Typography color="white" mb={1}>
        🔒 Change Password
      </Typography>
      <Typography color="#ccc" mb={2}>
        Keep your account secure by using a strong password.
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mb: 1 }}>
        <Pinput
          label="Current Password"
          placeholder="Enter current password"
          name="current"
          value={pass.current}
          onChange={handleChange}
        />

        <Pinput
          label="New Password"
          placeholder="New password"
          name="new"
          value={pass.new}
          onChange={handleChange}
        />
      </Box>

      <Pinput
        label="Confirm New Password"
        placeholder="Re-enter new password"
        name="confirm"
        value={pass.confirm}
        onChange={handleChange}
      />

      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 2 }}>
        <Button variant="outlined" onClick={handleClear}>
          Clear
        </Button>
        <Button variant="contained" onClick={handleUpdate}>
          Update Password
        </Button>
      </Box>

      <Typography color="white" mt={4} mb={2}>
        Security Information
      </Typography>

      <Box sx={{ display: "flex", gap: 2 }}>
        <Scard icon="📅" title="Account Created" value="8/13/2025" />
        <Scard icon="📝" title="Last Updated" value="Never updated" />
        <Scard icon="🌐" title="Session" value="Browser active" />
      </Box>
    </Box>
  );
};

export default Security;
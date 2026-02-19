import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      alert("Fill all fields");
      return;
    }

    // fake auth (for demo)
    const user = { email, role };
    localStorage.setItem("user", JSON.stringify(user));

    if (role === "admin") navigate("/admin");
    else if (role === "faculty") navigate("/faculty");
    else navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Research Portal</h2>
        <p>Sign in to continue</p>

        <select onChange={(e) => setRole(e.target.value)}>
          <option value="student">Student</option>
          <option value="faculty">Faculty</option>
          <option value="admin">Admin</option>
        </select>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Sign In</button>

        <small>© 2026 Research ID System</small>
      </div>
    </div>
  );
};

export default Login;

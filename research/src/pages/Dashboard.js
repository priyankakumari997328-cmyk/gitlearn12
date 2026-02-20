import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  return (
    <>
    <Navbar/>
      <div style={styles.container}>
        <h1>Welcome, Researcher 👋</h1>
        <p>Your Research ID</p>

        <div style={styles.card}>
          {user?.researchId}
        </div>

        <div style={styles.grid}>
          <div style={styles.box} onClick={() => navigate("/applications")}>
            📄 My Applications
          </div>

          <div style={styles.box} onClick={() => navigate("/projects")}>
            🧑‍🏫 Faculty Projects
          </div>

          <div style={styles.box} onClick={() => navigate("/progress")}>
            📊 Progress
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    padding: "40px"
  },
  card: {
    marginTop: "10px",
    padding: "20px",
    background: "#0f172a",
    color: "#38bdf8",
    width: "250px",
    borderRadius: "10px",
    fontSize: "20px"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    marginTop: "40px"
  },
  box: {
    padding: "30px",
    background: "white",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    fontSize: "18px",
    cursor: "pointer",
    textAlign: "center"
  }
};

export default Dashboard;

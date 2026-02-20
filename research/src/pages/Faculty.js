import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Faculty = () => {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ padding: 40 }}>
        <h1>Faculty Panel</h1>

        <div style={{ marginTop: 30 }}>
          
          <div 
            style={card} 
            onClick={() => navigate("/projects")}
          >
            Create Research Project
          </div>

          <div 
            style={card} 
            onClick={() => navigate("/applications")}
          >
            View Applications
          </div>

          <div 
            style={card} 
            onClick={() => navigate("/approve")}
          >
            Approve Students
          </div>

        </div>
      </div>
    </>
  );
};

const card = {
  padding: 25,
  marginBottom: 15,
  background: "white",
  borderRadius: 10,
  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  cursor: "pointer",
  transition: "0.2s"
};

export default Faculty;

import { useEffect, useState } from "react";

const Applications = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("applications")) || [];
    setApps(data);
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h2>My Applications</h2>

      {apps.length === 0 && <p>No applications found</p>}

      {apps.map((a, i) => (
        <div key={i} style={{
          border:"1px solid #ccc",
          margin:10,
          padding:15,
          borderRadius:8
        }}>
          <h3>{a.research}</h3>
          <p>Faculty: {a.faculty}</p>
          <p style={{color:"orange"}}>Status: {a.status}</p>
        </div>
      ))}
    </div>
  );
};

export default Applications;

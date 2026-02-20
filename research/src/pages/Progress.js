import Navbar from "../components/Navbar";

const Progress = () => {
  const apps = JSON.parse(localStorage.getItem("applications")) || [];

  return (
    <>
      <Navbar />
      <div style={{ padding: 40 }}>
        <h1>Research Progress</h1>

        {apps.length === 0 ? (
          <p>No research started yet.</p>
        ) : (
          apps.map((app, i) => (
            <div key={i} style={card}>
              <h3>{app.topic}</h3>
              <p>Status: {app.status}</p>
              <progress value="50" max="100"></progress>
            </div>
          ))
        )}
      </div>
    </>
  );
};

const card = {
  padding: 20,
  marginTop: 15,
  background: "white",
  borderRadius: 10,
  boxShadow: "0 8px 20px rgba(0,0,0,0.1)"
};

export default Progress;

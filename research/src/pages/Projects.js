import Navbar from "../components/Navbar";

const projects = [
  { name: "Dr Sharma", topic: "Medical AI", field: "AI" },
  { name: "Dr Mehta", topic: "Blockchain Security", field: "Cyber" }
];

const Projects = () => {
  const apply = (p) => {
    const apps = JSON.parse(localStorage.getItem("applications")) || [];
    apps.push({ ...p, status: "Pending" });
    localStorage.setItem("applications", JSON.stringify(apps));
    alert("Applied Successfully!");
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: 40 }}>
        <h1>Faculty Projects</h1>

        {projects.map((p, i) => (
          <div key={i} style={card}>
            <h3>{p.topic}</h3>
            <p>Faculty: {p.name}</p>
            <p>Field: {p.field}</p>
            <button onClick={() => apply(p)}>Apply</button>
          </div>
        ))}
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

export default Projects;

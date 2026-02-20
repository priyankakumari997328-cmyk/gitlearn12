function ProjectCard({ project, onApply, applied }) {
  return (
    <div style={styles.card}>
      <h3>{project.title}</h3>
      <p><b>Faculty:</b> {project.faculty}</p>
      <p><b>Department:</b> {project.dept}</p>
      <p>{project.desc}</p>

      {applied ? (
        <p style={{ color: "green" }}>
          Status: {applied.status}
        </p>
      ) : (
        <button
          style={styles.btn}
          onClick={() => onApply(project)}
        >
          Apply
        </button>
      )}
    </div>
  );
}

const styles = {
  card: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    width: "280px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
  },
  btn: {
    marginTop: "10px",
    border: "none",
    padding: "8px 14px",
    borderRadius: "8px",
    background: "#38bdf8",
    color: "white",
    cursor: "pointer"
  }
};

export default ProjectCard;

import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { name: "Dashboard", path: "/" },
    { name: "Applications", path: "/applications" },
    { name: "Profile", path: "/profile" }
  ];

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div style={styles.nav}>
      <div style={styles.logo}>
        <span style={{ color: "#38bdf8" }}>Research</span>
        <span style={{ color: "white" }}>Hub</span>
      </div>

      <div style={styles.center}>
        {links.map(link => (
          <span
            key={link.path}
            onClick={() => navigate(link.path)}
            style={{
              ...styles.link,
              ...(location.pathname === link.path ? styles.active : {})
            }}
          >
            {link.name}
          </span>
        ))}
      </div>

      <div style={styles.right}>
        <div style={styles.avatar}>A</div>
        <button style={styles.logout} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

const styles = {
  nav: {
    height: "60px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 40px",
    background: "rgba(15,23,42,0.8)",
    backdropFilter: "blur(10px)",
    color: "white",
    position: "sticky",
    top: 0,
    zIndex: 10
  },
  logo: { fontSize: "22px", fontWeight: "700" },
  center: { display: "flex", gap: "30px" },
  link: { cursor: "pointer", paddingBottom: "4px" },
  active: { borderBottom: "2px solid #38bdf8", color: "#38bdf8" },
  right: { display: "flex", alignItems: "center", gap: "15px" },
  avatar: {
    width: "32px", height: "32px", borderRadius: "50%",
    background: "#38bdf8", display: "flex",
    alignItems: "center", justifyContent: "center",
    fontWeight: "bold", color: "#0f172a"
  },
  logout: {
    background: "transparent", border: "1px solid #38bdf8",
    color: "#38bdf8", padding: "5px 10px",
    borderRadius: "6px", cursor: "pointer"
  }
};

export default Navbar;

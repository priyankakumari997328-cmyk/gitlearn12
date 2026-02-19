import { useState } from "react";
import Navbar from "../components/Navbar";

const Approve = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Rahul Sharma", project: "AI Research", status: "Pending" },
    { id: 2, name: "Priya Singh", project: "ML Model", status: "Pending" },
    { id: 3, name: "Amit Verma", project: "Web Development", status: "Pending" }
  ]);

  const handleApprove = (id) => {
    const updated = students.map(student =>
      student.id === id
        ? { ...student, status: "Approved" }
        : student
    );
    setStudents(updated);
  };

  const handleReject = (id) => {
    const updated = students.map(student =>
      student.id === id
        ? { ...student, status: "Rejected" }
        : student
    );
    setStudents(updated);
  };

  return (
    <>
      
      <div style={{ padding: 40 }}>
        <h1>Approve Students</h1>

        <div style={{ marginTop: 30 }}>
          {students.map(student => (
            <div key={student.id} style={card}>
              <div>
                <h3>{student.name}</h3>
                <p>Project: {student.project}</p>
                <p>
                  Status:{" "}
                  <span style={{
                    color:
                      student.status === "Approved"
                        ? "green"
                        : student.status === "Rejected"
                        ? "red"
                        : "orange"
                  }}>
                    {student.status}
                  </span>
                </p>
              </div>

              {student.status === "Pending" && (
                <div style={{ display: "flex", gap: 10 }}>
                  <button
                    style={approveBtn}
                    onClick={() => handleApprove(student.id)}
                  >
                    Approve
                  </button>

                  <button
                    style={rejectBtn}
                    onClick={() => handleReject(student.id)}
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const card = {
  padding: 20,
  marginBottom: 20,
  background: "white",
  borderRadius: 10,
  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const approveBtn = {
  background: "green",
  color: "white",
  border: "none",
  padding: "8px 15px",
  borderRadius: "6px",
  cursor: "pointer"
};

const rejectBtn = {
  background: "red",
  color: "white",
  border: "none",
  padding: "8px 15px",
  borderRadius: "6px",
  cursor: "pointer"
};

export default Approve;

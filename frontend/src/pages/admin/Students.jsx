import { useState } from "react";

function Students() {
  // Mock student data (later from backend)
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Hari",
      roll: "PSGIT001",
      hostel: "B Block",
      active: true
    },
    {
      id: 2,
      name: "Arun",
      roll: "PSGIT045",
      hostel: "A Block",
      active: false
    }
  ]);

  const toggleStatus = (id) => {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, active: !s.active } : s
      )
    );
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>

      {/* Header */}
      <div className="bg-white shadow-sm p-3 sticky-top">
        <h5 className="fw-bold mb-0">Manage Students</h5>
        <small className="text-muted">
          Enable or disable student accounts
        </small>
      </div>

      {/* Students List */}
      <div className="container-fluid py-3">

        {students.map((student) => (
          <div key={student.id} className="card shadow-sm mb-3">
            <div className="card-body d-flex justify-content-between align-items-center">

              <div>
                <h6 className="fw-semibold mb-1">{student.name}</h6>
                <small className="text-muted">
                  {student.roll} • {student.hostel}
                </small>
              </div>

              <button
                className={`btn btn-sm ${
                  student.active
                    ? "btn-outline-success"
                    : "btn-outline-danger"
                }`}
                onClick={() => toggleStatus(student.id)}
              >
                {student.active ? "Active" : "Disabled"}
              </button>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Students;

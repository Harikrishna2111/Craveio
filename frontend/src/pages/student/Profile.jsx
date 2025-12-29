import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [hostel, setHostel] = useState("");

  const isFormValid = name && roll && hostel;

  const handleSubmit = () => {
    if (isFormValid) {
      // Later: save profile to backend
      navigate("/home");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f9fa"
      }}
    >
      <div style={{ width: "100%", maxWidth: "420px", padding: "16px" }}>

        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="fw-bold">Complete Your Profile</h2>
          <p className="text-muted">
            This helps us verify you as a student
          </p>
        </div>

        {/* Profile Card */}
        <div className="card shadow-sm p-4">

          {/* Name */}
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Roll Number */}
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Roll Number
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="PSGXXXX"
              value={roll}
              onChange={(e) => setRoll(e.target.value)}
            />
          </div>

          {/* Hostel */}
          <div className="mb-4">
            <label className="form-label fw-semibold">
              Hostel
            </label>
            <select
              className="form-select"
              value={hostel}
              onChange={(e) => setHostel(e.target.value)}
            >
              <option value="">Select your hostel</option>
              <option value="A Block">A Block</option>
              <option value="B Block">B Block</option>
              <option value="C Block">C Block</option>
              <option value="D Block">D Block</option>
            </select>
          </div>

          {/* Submit */}
          <button
            className="btn btn-primary w-100"
            disabled={!isFormValid}
            onClick={handleSubmit}
          >
            Continue
          </button>

        </div>

        {/* Footer */}
        <div className="text-center mt-4 small text-muted">
          Your details are used only for order verification
        </div>

      </div>
    </div>
  );
}

export default Profile;

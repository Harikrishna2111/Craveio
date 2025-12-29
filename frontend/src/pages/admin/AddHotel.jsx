import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddHotel() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) setPhone(value);
  };

  const isValid =
    name.trim().length > 0 &&
    phone.length === 10 &&
    password.length >= 6;

  const handleSubmit = () => {
    if (isValid) {
      // Later: send data to backend
      navigate("/admin/hotels");
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

        {/* Header */}
        <div className="text-center mb-4">
          <h4 className="fw-bold">Add New Hotel</h4>
          <p className="text-muted">
            Create a hotel account
          </p>
        </div>

        {/* Form Card */}
        <div className="card shadow-sm p-4">

          {/* Hotel Name */}
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Hotel Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Hotel name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Phone */}
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Phone Number
            </label>
            <div className="input-group">
              <span className="input-group-text">+91</span>
              <input
                type="text"
                className="form-control"
                placeholder="Hotel contact number"
                value={phone}
                onChange={handlePhoneChange}
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="form-label fw-semibold">
              Temporary Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Minimum 6 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <small className="text-muted">
              Hotel can change this later
            </small>
          </div>

          {/* Submit */}
          <button
            className="btn btn-primary w-100"
            disabled={!isValid}
            onClick={handleSubmit}
          >
            Create Hotel
          </button>

        </div>

      </div>
    </div>
  );
}

export default AddHotel;

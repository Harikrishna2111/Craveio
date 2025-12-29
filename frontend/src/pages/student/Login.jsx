import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) {
      setPhone(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.length === 10) {
      navigate("/otp", { state: { phone } });
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
      
      {/* Centered wrapper */}
      <div className="w-100" style={{ maxWidth: "420px" }}>

        {/* App Name */}
        <div className="text-center mb-4">
          <h2 className="fw-bold">Craveio</h2>
          <p className="text-muted">
            Order food from nearby hotels, hassle-free
          </p>
        </div>

        {/* Login Card */}
        <div className="card shadow-sm p-4">
          <label className="form-label fw-semibold">
            Enter your mobile number
          </label>

          <div className="input-group mb-3">
            <span className="input-group-text">+91</span>
            <input
              type="text"
              className="form-control"
              placeholder="9876543210"
              value={phone}
              onChange={handleChange}
            />
          </div>

          <button
            className="btn btn-primary w-100"
            disabled={phone.length !== 10}
            onClick={handleSubmit}
          >
            Send OTP
          </button>

          <p className="text-center text-muted mt-3 small">
            Only PSG iTech students are allowed
          </p>
        </div>

        {/* Footer */}
        <div className="text-center mt-4 small text-muted">
          Terms & Privacy
        </div>

      </div>
    </div>
  );
}

export default Login;

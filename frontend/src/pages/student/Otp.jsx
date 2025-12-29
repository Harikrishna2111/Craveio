import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Otp() {
  const location = useLocation();
  const navigate = useNavigate();
  const phone = location.state?.phone || "";

  const [otp, setOtp] = useState("");

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 6) {
      setOtp(value);
    }
  };

  const handleVerify = () => {
    if (otp.length === 6) {
      // Later: verify OTP with backend
      navigate("/profile"); // next page
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
          <h2 className="fw-bold">Verify OTP</h2>
          <p className="text-muted">
            OTP sent to <strong>+91 {phone}</strong>
          </p>
        </div>

        {/* OTP Card */}
        <div className="card shadow-sm p-4">

          <label className="form-label fw-semibold">
            Enter 6-digit OTP
          </label>

          <input
            type="text"
            className="form-control text-center fs-4 mb-3"
            placeholder="••••••"
            value={otp}
            onChange={handleChange}
          />

          <button
            className="btn btn-primary w-100"
            disabled={otp.length !== 6}
            onClick={handleVerify}
          >
            Verify OTP
          </button>

          {/* Resend */}
          <div className="text-center mt-3">
            <button className="btn btn-link p-0 small">
              Resend OTP
            </button>
          </div>

        </div>

        {/* Footer */}
        <div className="text-center mt-4 small text-muted">
          Didn’t receive the code? Check your network
        </div>

      </div>
    </div>
  );
}

export default Otp;

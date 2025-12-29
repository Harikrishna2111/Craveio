import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isValid = username.length > 0 && password.length >= 6;

  const handleLogin = () => {
    if (isValid) {
      // Later: backend admin auth
      navigate("/admin/dashboard");
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
          <h4 className="fw-bold">Craveio Admin</h4>
          <p className="text-muted">
            Authorized access only
          </p>
        </div>

        {/* Login Card */}
        <div className="card shadow-sm p-4">

          <div className="mb-3">
            <label className="form-label fw-semibold">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Admin username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className="btn btn-danger w-100"
            disabled={!isValid}
            onClick={handleLogin}
          >
            Login
          </button>

        </div>

        <div className="text-center mt-4 small text-muted">
          This area is restricted
        </div>

      </div>
    </div>
  );
}

export default AdminLogin;

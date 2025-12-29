import { useNavigate } from "react-router-dom";

function ScanFailed() {
  const navigate = useNavigate();

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

        {/* Error Icon */}
        <div className="text-center mb-4">
          <div
            className="bg-danger text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
            style={{ width: "72px", height: "72px", fontSize: "36px" }}
          >
            ✕
          </div>

          <h4 className="fw-bold text-danger">
            Verification Failed
          </h4>
          <p className="text-muted">
            Do NOT hand over the food
          </p>
        </div>

        {/* Reason Card */}
        <div className="card shadow-sm p-3 mb-4 text-center">
          <small className="text-muted">
            The QR code is invalid, expired, or already used.
          </small>
        </div>

        {/* Actions */}
        <button
          className="btn btn-primary w-100 mb-2"
          onClick={() => navigate("/delivery/scan")}
        >
          Try Scanning Again
        </button>

        <button
          className="btn btn-outline-danger w-100"
          onClick={() => navigate("/hotel/dashboard")}
        >
          Contact Hotel / Admin
        </button>

      </div>
    </div>
  );
}

export default ScanFailed;

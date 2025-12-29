import { useNavigate } from "react-router-dom";

function Scan() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000"
      }}
    >
      <div style={{ width: "100%", maxWidth: "420px", padding: "16px", color: "#fff" }}>

        {/* Header */}
        <div className="text-center mb-4">
          <h4 className="fw-bold">Scan Pickup QR</h4>
          <p className="text-muted">
            Ask student to show QR code
          </p>
        </div>

        {/* Camera Placeholder */}
        <div
          className="border border-light rounded d-flex align-items-center justify-content-center mb-4"
          style={{ height: "300px" }}
        >
          <span className="text-muted">
            Camera view here
          </span>
        </div>

        {/* Mock Buttons */}
        <button
          className="btn btn-success w-100 mb-2"
          onClick={() => navigate("/delivery/success")}
        >
          (Mock) Scan Success
        </button>

        <button
          className="btn btn-outline-light w-100"
          onClick={() => navigate("/delivery/failed")}
        >
          (Mock) Scan Failed
        </button>

      </div>
    </div>
  );
}

export default Scan;

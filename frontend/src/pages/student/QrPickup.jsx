import { useParams, useNavigate } from "react-router-dom";

function QrPickup() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock QR image (later generated from backend)
  const qrUrl =
    "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=ORDER_" +
    id;

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
          <h4 className="fw-bold">Pickup QR Code</h4>
          <p className="text-muted">
            Show this QR at the pickup point
          </p>
        </div>

        {/* QR Card */}
        <div className="card shadow-sm p-4 text-center">

          <img
            src={qrUrl}
            alt="Pickup QR Code"
            className="img-fluid mb-3"
          />

          <p className="fw-semibold mb-1">
            Order #{id}
          </p>

          <small className="text-muted">
            This QR is valid for one pickup only
          </small>

        </div>

        {/* Instructions */}
        <div className="alert alert-warning mt-4 text-center">
          Do not share this QR with anyone.
        </div>

        {/* Fallback */}
        <div className="text-center mt-3 small text-muted">
          If QR doesn’t scan, contact support
        </div>

        {/* Hidden completion trigger (mock) */}
        <div className="mt-4">
          <button
            className="btn btn-outline-secondary w-100"
            onClick={() => navigate(`/order/${id}/completed`)}
          >
            (Mock) Mark as Picked Up
          </button>
        </div>

      </div>
    </div>
  );
}

export default QrPickup;

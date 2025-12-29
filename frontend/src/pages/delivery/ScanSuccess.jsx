import { useNavigate } from "react-router-dom";

function ScanSuccess() {
  const navigate = useNavigate();

  // Mock order info (later from backend)
  const order = {
    id: 123,
    student: "Hari",
    hostel: "B Block",
    items: "Idli x2, Dosa x1"
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

        {/* Success Icon */}
        <div className="text-center mb-4">
          <div
            className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
            style={{ width: "72px", height: "72px", fontSize: "36px" }}
          >
            ✓
          </div>

          <h4 className="fw-bold text-success">
            Pickup Verified
          </h4>
          <p className="text-muted">
            Hand over the food to the student
          </p>
        </div>

        {/* Order Info */}
        <div className="card shadow-sm p-3 mb-4">
          <p className="mb-1">
            <strong>Order ID:</strong> #{order.id}
          </p>
          <p className="mb-1">
            <strong>Student:</strong> {order.student}
          </p>
          <p className="mb-1">
            <strong>Hostel:</strong> {order.hostel}
          </p>
          <p className="mb-0">
            <strong>Items:</strong> {order.items}
          </p>
        </div>

        {/* CTA */}
        <button
          className="btn btn-primary w-100"
          onClick={() => navigate("/delivery/scan")}
        >
          Scan Next Order
        </button>

      </div>
    </div>
  );
}

export default ScanSuccess;

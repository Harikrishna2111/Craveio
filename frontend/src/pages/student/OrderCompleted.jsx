import { useParams, useNavigate } from "react-router-dom";

function OrderCompleted() {
  const { id } = useParams();
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

        {/* Success Icon */}
        <div className="text-center mb-4">
          <div
            className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
            style={{ width: "64px", height: "64px", fontSize: "32px" }}
          >
            ✓
          </div>

          <h4 className="fw-bold">Order Completed</h4>
          <p className="text-muted">
            Your food has been successfully picked up
          </p>
        </div>

        {/* Order Info */}
        <div className="card shadow-sm p-3 mb-4 text-center">
          <p className="mb-1 fw-semibold">
            Order #{id}
          </p>
          <small className="text-muted">
            Enjoy your meal 🍽️
          </small>
        </div>

        {/* CTA */}
        <button
          className="btn btn-primary w-100"
          onClick={() => navigate("/home")}
        >
          Back to Home
        </button>

      </div>
    </div>
  );
}

export default OrderCompleted;

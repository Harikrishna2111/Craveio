import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

function OrderStatus() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock status (later from backend via WebSocket)
  const [status] = useState("PREPARING");

  const steps = [
    { key: "PLACED", label: "Order Placed" },
    { key: "ACCEPTED", label: "Hotel Accepted" },
    { key: "PREPARING", label: "Food Preparing" },
    { key: "READY", label: "Ready for Pickup" }
  ];

  const isCompleted = (stepKey) => {
    const order = ["PLACED", "ACCEPTED", "PREPARING", "READY"];
    return order.indexOf(stepKey) <= order.indexOf(status);
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>

      {/* Header */}
      <div className="bg-white shadow-sm p-3 sticky-top">
        <h5 className="fw-bold mb-0">Order Status</h5>
        <small className="text-muted">
          Order #{id}
        </small>
      </div>

      <div className="container-fluid py-4 pb-5">

        {/* Status Timeline */}
        <div className="card shadow-sm mb-4">
          <div className="card-body">

            {steps.map((step, index) => (
              <div
                key={step.key}
                className="d-flex align-items-center mb-3"
              >
                <div
                  className={`rounded-circle d-flex align-items-center justify-content-center me-3 ${
                    isCompleted(step.key)
                      ? "bg-success text-white"
                      : "bg-light text-muted"
                  }`}
                  style={{ width: "32px", height: "32px" }}
                >
                  {isCompleted(step.key) ? "✓" : index + 1}
                </div>

                <span
                  className={
                    isCompleted(step.key)
                      ? "fw-semibold"
                      : "text-muted"
                  }
                >
                  {step.label}
                </span>
              </div>
            ))}

          </div>
        </div>

        {/* Info Box */}
        <div className="alert alert-info">
          Please wait while the hotel prepares your food.
          You’ll be notified when it’s ready for pickup.
        </div>

      </div>

      {/* Bottom CTA (appears when READY) */}
      {status === "READY" && (
        <div className="position-fixed bottom-0 start-0 end-0 bg-white shadow-lg p-3">
          <button
            className="btn btn-primary w-100"
            onClick={() => navigate(`/order/${id}/qr`)}
          >
            Show Pickup QR Code
          </button>
        </div>
      )}

    </div>
  );
}

export default OrderStatus;

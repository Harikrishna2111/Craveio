import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

function OrderDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock order data (later from backend)
  const order = {
    id,
    student: "Hari",
    hostel: "B Block",
    items: [
      { name: "Idli", qty: 2, price: 20 },
      { name: "Dosa", qty: 1, price: 40 }
    ],
    total: 80
  };

  const [status, setStatus] = useState("ACCEPTED");

  const nextStatus = () => {
    if (status === "ACCEPTED") setStatus("PREPARING");
    else if (status === "PREPARING") setStatus("READY");
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>

      {/* Header */}
      <div className="bg-white shadow-sm p-3 sticky-top">
        <h5 className="fw-bold mb-0">Order #{order.id}</h5>
        <small className="text-muted">
          {order.student} • {order.hostel}
        </small>
      </div>

      <div className="container-fluid py-3 pb-5">

        {/* Items */}
        <div className="card shadow-sm mb-3">
          <div className="card-body">
            <h6 className="fw-semibold mb-3">Items</h6>

            {order.items.map((item, index) => (
              <div
                key={index}
                className="d-flex justify-content-between mb-2"
              >
                <span>
                  {item.name} × {item.qty}
                </span>
                <span>
                  ₹{item.price * item.qty}
                </span>
              </div>
            ))}

            <hr />

            <div className="d-flex justify-content-between fw-bold">
              <span>Total</span>
              <span>₹{order.total}</span>
            </div>
          </div>
        </div>

        {/* Status Card */}
        <div className="card shadow-sm">
          <div className="card-body">
            <h6 className="fw-semibold mb-2">Order Status</h6>

            <span
              className={`badge ${
                status === "READY"
                  ? "bg-success"
                  : status === "PREPARING"
                  ? "bg-warning text-dark"
                  : "bg-secondary"
              }`}
            >
              {status}
            </span>

            <div className="mt-3">
              {status !== "READY" && (
                <button
                  className="btn btn-primary w-100"
                  onClick={nextStatus}
                >
                  {status === "ACCEPTED"
                    ? "Mark as Preparing"
                    : "Mark as Ready"}
                </button>
              )}
            </div>
          </div>
        </div>

      </div>

      {/* Footer CTA */}
      {status === "READY" && (
        <div className="position-fixed bottom-0 start-0 end-0 bg-success text-white p-3 text-center">
          Order is ready for pickup
        </div>
      )}

    </div>
  );
}

export default OrderDetails;

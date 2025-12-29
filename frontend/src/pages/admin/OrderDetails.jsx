import { useParams } from "react-router-dom";

function OrderDetails() {
  const { id } = useParams();

  // Mock order data (later from backend)
  const order = {
    id,
    student: "Hari",
    hostel: "B Block",
    hotel: "Annapoorna Hotel",
    items: [
      { name: "Idli", qty: 2, price: 20 },
      { name: "Dosa", qty: 1, price: 40 }
    ],
    total: 80,
    status: "PREPARING",
    timeline: [
      { step: "PLACED", time: "10:05 AM" },
      { step: "ACCEPTED", time: "10:07 AM" },
      { step: "PREPARING", time: "10:10 AM" }
    ]
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>

      {/* Header */}
      <div className="bg-white shadow-sm p-3 sticky-top">
        <h5 className="fw-bold mb-0">Order #{order.id}</h5>
        <small className="text-muted">
          {order.student} • {order.hotel}
        </small>
      </div>

      <div className="container-fluid py-3 pb-5">

        {/* Order Info */}
        <div className="card shadow-sm mb-3">
          <div className="card-body">
            <p className="mb-1">
              <strong>Student:</strong> {order.student}
            </p>
            <p className="mb-1">
              <strong>Hostel:</strong> {order.hostel}
            </p>
            <p className="mb-0">
              <strong>Hotel:</strong> {order.hotel}
            </p>
          </div>
        </div>

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

        {/* Status Timeline */}
        <div className="card shadow-sm mb-3">
          <div className="card-body">
            <h6 className="fw-semibold mb-3">Order Timeline</h6>

            {order.timeline.map((t, index) => (
              <div key={index} className="d-flex justify-content-between mb-2">
                <span>{t.step}</span>
                <small className="text-muted">{t.time}</small>
              </div>
            ))}

            <span className="badge bg-warning text-dark mt-2">
              {order.status}
            </span>
          </div>
        </div>

        {/* Admin Actions (Disabled for now) */}
        <div className="card shadow-sm">
          <div className="card-body">
            <h6 className="fw-semibold mb-3">Admin Actions</h6>

            <button
              className="btn btn-outline-danger w-100 mb-2"
              disabled
            >
              Force Cancel Order
            </button>

            <button
              className="btn btn-outline-secondary w-100"
              disabled
            >
              Initiate Refund
            </button>

            <small className="text-muted d-block mt-2">
              These actions will be enabled with backend integration
            </small>
          </div>
        </div>

      </div>
    </div>
  );
}

export default OrderDetails;

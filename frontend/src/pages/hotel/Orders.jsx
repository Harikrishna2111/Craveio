import { useNavigate } from "react-router-dom";

function Orders() {
  const navigate = useNavigate();

  // Mock orders (later from backend / realtime)
  const orders = [
    {
      id: 101,
      student: "Hari",
      items: "Idli x2, Dosa x1",
      total: 80,
      status: "PENDING"
    },
    {
      id: 102,
      student: "Arun",
      items: "Veg Biryani x1",
      total: 120,
      status: "PENDING"
    }
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>

      {/* Header */}
      <div className="bg-white shadow-sm p-3 sticky-top">
        <h5 className="fw-bold mb-0">New Orders</h5>
        <small className="text-muted">
          Accept or reject incoming orders
        </small>
      </div>

      {/* Orders List */}
      <div className="container-fluid py-3">

        {orders.map(order => (
          <div key={order.id} className="card shadow-sm mb-3">
            <div className="card-body">

              {/* Order Info */}
              <div className="mb-2">
                <h6 className="fw-semibold mb-1">
                  Order #{order.id}
                </h6>
                <small className="text-muted">
                  {order.student} • {order.items}
                </small>
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="fw-bold">₹{order.total}</span>
                <span className="badge bg-warning text-dark">
                  {order.status}
                </span>
              </div>

              {/* Actions */}
              <div className="d-flex gap-2">
                <button
                  className="btn btn-success w-100"
                  onClick={() =>
                    navigate(`/hotel/orders/${order.id}`)
                  }
                >
                  Accept
                </button>

                <button
                  className="btn btn-outline-danger w-100"
                >
                  Reject
                </button>
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Orders;

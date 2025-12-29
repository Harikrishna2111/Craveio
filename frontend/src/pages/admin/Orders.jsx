import { useNavigate } from "react-router-dom";

function Orders() {
  const navigate = useNavigate();

  // Mock orders data (later from backend)
  const orders = [
    {
      id: 201,
      student: "Hari",
      hotel: "Annapoorna Hotel",
      total: 80,
      status: "PREPARING"
    },
    {
      id: 202,
      student: "Arun",
      hotel: "Biryani Hub",
      total: 120,
      status: "READY"
    },
    {
      id: 203,
      student: "Karthik",
      hotel: "Spicy Treat",
      total: 150,
      status: "COMPLETED"
    }
  ];

  const statusColor = (status) => {
    switch (status) {
      case "PENDING":
        return "bg-secondary";
      case "ACCEPTED":
        return "bg-info";
      case "PREPARING":
        return "bg-warning text-dark";
      case "READY":
        return "bg-primary";
      case "COMPLETED":
        return "bg-success";
      default:
        return "bg-light text-dark";
    }
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>

      {/* Header */}
      <div className="bg-white shadow-sm p-3 sticky-top">
        <h5 className="fw-bold mb-0">All Orders</h5>
        <small className="text-muted">
          Monitor system-wide orders
        </small>
      </div>

      {/* Orders List */}
      <div className="container-fluid py-3">

        {orders.map(order => (
          <div
            key={order.id}
            className="card shadow-sm mb-3"
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/admin/orders/${order.id}`)}
          >
            <div className="card-body d-flex justify-content-between align-items-center">

              <div>
                <h6 className="fw-semibold mb-1">
                  Order #{order.id}
                </h6>
                <small className="text-muted">
                  {order.student} • {order.hotel}
                </small>
              </div>

              <div className="text-end">
                <span className="fw-bold d-block">
                  ₹{order.total}
                </span>
                <span className={`badge ${statusColor(order.status)}`}>
                  {order.status}
                </span>
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Orders;

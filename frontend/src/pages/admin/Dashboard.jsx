import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  // Mock stats (later from backend)
  const stats = {
    students: 320,
    hotels: 8,
    activeOrders: 12,
    completedOrders: 1450
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>

      {/* Header */}
      <div className="bg-white shadow-sm p-3 sticky-top">
        <h5 className="fw-bold mb-0">Admin Dashboard</h5>
        <small className="text-muted">
          System overview
        </small>
      </div>

      <div className="container-fluid py-3">

        {/* Stats Cards */}
        <div className="row g-3 mb-4">

          <div className="col-6">
            <div className="card shadow-sm text-center">
              <div className="card-body">
                <h6 className="fw-semibold">Students</h6>
                <h4>{stats.students}</h4>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="card shadow-sm text-center">
              <div className="card-body">
                <h6 className="fw-semibold">Hotels</h6>
                <h4>{stats.hotels}</h4>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="card shadow-sm text-center">
              <div className="card-body">
                <h6 className="fw-semibold">Active Orders</h6>
                <h4>{stats.activeOrders}</h4>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="card shadow-sm text-center">
              <div className="card-body">
                <h6 className="fw-semibold">Completed</h6>
                <h4>{stats.completedOrders}</h4>
              </div>
            </div>
          </div>

        </div>

        {/* Navigation Cards */}
        <div className="card shadow-sm mb-3"
             style={{ cursor: "pointer" }}
             onClick={() => navigate("/admin/students")}
        >
          <div className="card-body">
            <h6 className="fw-semibold mb-1">Manage Students</h6>
            <small className="text-muted">
              View & control student accounts
            </small>
          </div>
        </div>

        <div className="card shadow-sm mb-3"
             style={{ cursor: "pointer" }}
             onClick={() => navigate("/admin/hotels")}
        >
          <div className="card-body">
            <h6 className="fw-semibold mb-1">Manage Hotels</h6>
            <small className="text-muted">
              Add or disable hotels
            </small>
          </div>
        </div>

        <div className="card shadow-sm mb-3"
             style={{ cursor: "pointer" }}
             onClick={() => navigate("/admin/orders")}
        >
          <div className="card-body">
            <h6 className="fw-semibold mb-1">All Orders</h6>
            <small className="text-muted">
              Monitor order activity
            </small>
          </div>
        </div>

        <div className="card shadow-sm"
             style={{ cursor: "pointer" }}
             onClick={() => navigate("/admin/settings")}
        >
          <div className="card-body">
            <h6 className="fw-semibold mb-1">Admin Settings</h6>
            <small className="text-muted">
              App configuration
            </small>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;

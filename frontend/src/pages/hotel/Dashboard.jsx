import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Dashboard() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>

      {/* Header */}
      <div className="bg-white shadow-sm p-3 sticky-top d-flex justify-content-between align-items-center">
        <div>
          <h5 className="fw-bold mb-0">Hotel Dashboard</h5>
          <small className="text-muted">
            Manage your orders
          </small>
        </div>

        {/* Open / Close Toggle */}
        <button
          className={`btn btn-sm ${
            isOpen ? "btn-success" : "btn-secondary"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "OPEN" : "CLOSED"}
        </button>
      </div>

      {/* Content */}
      <div className="container-fluid py-4">

        {/* New Orders */}
        <div
          className="card shadow-sm mb-3"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/hotel/orders")}
        >
          <div className="card-body d-flex justify-content-between align-items-center">
            <div>
              <h6 className="fw-semibold mb-1">New Orders</h6>
              <small className="text-muted">
                Orders waiting for action
              </small>
            </div>
            <span className="badge bg-danger fs-6">3</span>
          </div>
        </div>

        {/* Preparing Orders */}
        <div
          className="card shadow-sm mb-3"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/hotel/orders?status=preparing")}
        >
          <div className="card-body d-flex justify-content-between align-items-center">
            <div>
              <h6 className="fw-semibold mb-1">Preparing</h6>
              <small className="text-muted">
                Orders in progress
              </small>
            </div>
            <span className="badge bg-warning text-dark fs-6">2</span>
          </div>
        </div>

        {/* Completed Orders */}
        <div
          className="card shadow-sm mb-3"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/hotel/orders?status=completed")}
        >
          <div className="card-body d-flex justify-content-between align-items-center">
            <div>
              <h6 className="fw-semibold mb-1">Completed</h6>
              <small className="text-muted">
                Orders already served
              </small>
            </div>
            <span className="badge bg-success fs-6">12</span>
          </div>
        </div>

        {/* Menu Management */}
        <div
          className="card shadow-sm"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/hotel/menu")}
        >
          <div className="card-body">
            <h6 className="fw-semibold mb-1">Menu Management</h6>
            <small className="text-muted">
              Add or update food items
            </small>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;

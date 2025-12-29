import { useNavigate } from "react-router-dom";

function Settings() {
  const navigate = useNavigate();

  // Mock hotel data (later from backend)
  const hotel = {
    name: "Annapoorna Hotel",
    phone: "9876543210",
    location: "Near PSG iTech"
  };

  const handleLogout = () => {
    // Later: clear auth token
    navigate("/hotel/login");
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>

      {/* Header */}
      <div className="bg-white shadow-sm p-3 sticky-top">
        <h5 className="fw-bold mb-0">Settings</h5>
        <small className="text-muted">
          Hotel account & preferences
        </small>
      </div>

      <div className="container-fluid py-3">

        {/* Hotel Info */}
        <div className="card shadow-sm mb-3">
          <div className="card-body">
            <h6 className="fw-semibold mb-3">Hotel Details</h6>

            <p className="mb-1">
              <strong>Name:</strong> {hotel.name}
            </p>
            <p className="mb-1">
              <strong>Phone:</strong> +91 {hotel.phone}
            </p>
            <p className="mb-0">
              <strong>Location:</strong> {hotel.location}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="card shadow-sm">
          <div className="card-body">

            <button
              className="btn btn-outline-primary w-100 mb-3"
              disabled
            >
              Edit Profile (Admin Only)
            </button>

            <button
              className="btn btn-outline-danger w-100"
              onClick={handleLogout}
            >
              Logout
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Settings;

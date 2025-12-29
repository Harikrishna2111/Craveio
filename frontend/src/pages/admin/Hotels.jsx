import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Hotels() {
  const navigate = useNavigate();

  // Mock hotel data (later from backend)
  const [hotels, setHotels] = useState([
    {
      id: 1,
      name: "Annapoorna Hotel",
      phone: "9876543210",
      active: true
    },
    {
      id: 2,
      name: "Biryani Hub",
      phone: "9123456780",
      active: false
    }
  ]);

  const toggleStatus = (id) => {
    setHotels(
      hotels.map((h) =>
        h.id === id ? { ...h, active: !h.active } : h
      )
    );
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>

      {/* Header */}
      <div className="bg-white shadow-sm p-3 sticky-top d-flex justify-content-between align-items-center">
        <div>
          <h5 className="fw-bold mb-0">Manage Hotels</h5>
          <small className="text-muted">
            Control hotel access
          </small>
        </div>

        <button
          className="btn btn-sm btn-primary"
          onClick={() => navigate("/admin/hotels/add")}
        >
          + Add
        </button>
      </div>

      {/* Hotels List */}
      <div className="container-fluid py-3">

        {hotels.map((hotel) => (
          <div key={hotel.id} className="card shadow-sm mb-3">
            <div className="card-body d-flex justify-content-between align-items-center">

              <div>
                <h6 className="fw-semibold mb-1">{hotel.name}</h6>
                <small className="text-muted">
                  +91 {hotel.phone}
                </small>
              </div>

              <button
                className={`btn btn-sm ${
                  hotel.active
                    ? "btn-outline-success"
                    : "btn-outline-danger"
                }`}
                onClick={() => toggleStatus(hotel.id)}
              >
                {hotel.active ? "Enabled" : "Disabled"}
              </button>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Hotels;

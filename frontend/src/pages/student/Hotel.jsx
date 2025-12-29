import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

function Hotel() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock hotel data
  const hotel = {
    id,
    name: "Annapoorna Hotel",
    cuisine: "South Indian",
    status: "OPEN"
  };

  // Mock menu data
  const menu = [
    { id: 1, name: "Idli", price: 20 },
    { id: 2, name: "Dosa", price: 40 },
    { id: 3, name: "Poori", price: 45 },
    { id: 4, name: "Veg Biryani", price: 120 }
  ];

  const [cart, setCart] = useState({});

  const addToCart = (item) => {
    setCart((prev) => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1
    }));
  };

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>

      {/* Header */}
      <div className="bg-white shadow-sm p-3 sticky-top">
        <h5 className="fw-bold mb-0">{hotel.name}</h5>
        <small className="text-muted">{hotel.cuisine}</small>
      </div>

      {/* Menu */}
      <div className="container-fluid py-3 pb-5">

        {menu.map((item) => (
          <div key={item.id} className="card mb-3 shadow-sm">
            <div className="card-body d-flex justify-content-between align-items-center">

              <div>
                <h6 className="fw-semibold mb-1">{item.name}</h6>
                <small className="text-muted">₹{item.price}</small>
              </div>

              <button
                className="btn btn-outline-primary btn-sm"
                onClick={() => addToCart(item)}
              >
                Add
              </button>

            </div>
          </div>
        ))}

      </div>

      {/* Cart Bar */}
      {cartCount > 0 && (
        <div
          className="position-fixed bottom-0 start-0 end-0 bg-primary text-white p-3"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/cart")}
        >
          <div className="d-flex justify-content-between align-items-center">
            <span>{cartCount} item(s) added</span>
            <span className="fw-bold">View Cart →</span>
          </div>
        </div>
      )}

    </div>
  );
}

export default Hotel;

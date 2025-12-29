import { useState } from "react";

function Menu() {
  // Mock menu data (later from backend)
  const [menu, setMenu] = useState([
    { id: 1, name: "Idli", price: 20, available: true },
    { id: 2, name: "Dosa", price: 40, available: true },
    { id: 3, name: "Veg Biryani", price: 120, available: false }
  ]);

  const toggleAvailability = (id) => {
    setMenu(menu.map(item =>
      item.id === id
        ? { ...item, available: !item.available }
        : item
    ));
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>

      {/* Header */}
      <div className="bg-white shadow-sm p-3 sticky-top">
        <h5 className="fw-bold mb-0">Menu Management</h5>
        <small className="text-muted">
          Control what’s available today
        </small>
      </div>

      {/* Menu List */}
      <div className="container-fluid py-3 pb-5">

        {menu.map(item => (
          <div key={item.id} className="card shadow-sm mb-3">
            <div className="card-body d-flex justify-content-between align-items-center">

              <div>
                <h6 className="fw-semibold mb-1">{item.name}</h6>
                <small className="text-muted">₹{item.price}</small>
              </div>

              <button
                className={`btn btn-sm ${
                  item.available
                    ? "btn-outline-success"
                    : "btn-outline-secondary"
                }`}
                onClick={() => toggleAvailability(item.id)}
              >
                {item.available ? "Available" : "Unavailable"}
              </button>

            </div>
          </div>
        ))}

      </div>

      {/* Add Item Button */}
      <div className="position-fixed bottom-0 start-0 end-0 bg-white shadow-lg p-3">
        <button className="btn btn-primary w-100">
          + Add New Item
        </button>
      </div>

    </div>
  );
}

export default Menu;

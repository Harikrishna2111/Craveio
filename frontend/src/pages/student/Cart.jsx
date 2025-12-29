import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Cart() {
  const navigate = useNavigate();

  // Mock cart data (later from global state / backend)
  const [cart, setCart] = useState([
    { id: 1, name: "Idli", price: 20, qty: 2 },
    { id: 2, name: "Dosa", price: 40, qty: 1 }
  ]);

  const increaseQty = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    ));
  };

  const decreaseQty = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    ));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>

      {/* Header */}
      <div className="bg-white shadow-sm p-3 sticky-top">
        <h5 className="fw-bold mb-0">Your Cart</h5>
        <small className="text-muted">
          Review your items
        </small>
      </div>

      {/* Cart Items */}
      <div className="container-fluid py-3 pb-5">

        {cart.map(item => (
          <div key={item.id} className="card mb-3 shadow-sm">
            <div className="card-body d-flex justify-content-between align-items-center">

              <div>
                <h6 className="fw-semibold mb-1">{item.name}</h6>
                <small className="text-muted">
                  ₹{item.price} × {item.qty}
                </small>
              </div>

              <div className="d-flex align-items-center gap-2">
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => decreaseQty(item.id)}
                >
                  −
                </button>

                <span className="fw-bold">{item.qty}</span>

                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => increaseQty(item.id)}
                >
                  +
                </button>
              </div>

            </div>
          </div>
        ))}

      </div>

      {/* Bottom Bar */}
      <div
        className="position-fixed bottom-0 start-0 end-0 bg-white shadow-lg p-3"
      >
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="fw-semibold">Total</span>
          <span className="fw-bold">₹{total}</span>
        </div>

        <button
          className="btn btn-primary w-100"
          onClick={() => navigate("/checkout")}
        >
          Proceed to Checkout
        </button>
      </div>

    </div>
  );
}

export default Cart;

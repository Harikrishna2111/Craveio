import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  // Mock order data
  const items = [
    { id: 1, name: "Idli", price: 20, qty: 2 },
    { id: 2, name: "Dosa", price: 40, qty: 1 }
  ];

  const total = items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const placeOrder = () => {
    // Later: create order + payment
    navigate("/order/123"); // mock order id
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>

      {/* Header */}
      <div className="bg-white shadow-sm p-3 sticky-top">
        <h5 className="fw-bold mb-0">Order Review</h5>
        <small className="text-muted">
          Please confirm your order
        </small>
      </div>

      <div className="container-fluid py-3 pb-5">

        {/* Pickup Info */}
        <div className="card mb-3 shadow-sm">
          <div className="card-body">
            <h6 className="fw-semibold mb-1">Pickup Method</h6>
            <small className="text-muted">
              Hostel pickup point (show QR at pickup)
            </small>
          </div>
        </div>

        {/* Order Items */}
        <div className="card mb-3 shadow-sm">
          <div className="card-body">
            <h6 className="fw-semibold mb-3">Items</h6>

            {items.map(item => (
              <div
                key={item.id}
                className="d-flex justify-content-between mb-2"
              >
                <span>
                  {item.name} × {item.qty}
                </span>
                <span>₹{item.price * item.qty}</span>
              </div>
            ))}

            <hr />

            <div className="d-flex justify-content-between fw-bold">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom CTA */}
      <div className="position-fixed bottom-0 start-0 end-0 bg-white shadow-lg p-3">
        <button
          className="btn btn-success w-100"
          onClick={placeOrder}
        >
          Place Order
        </button>
      </div>

    </div>
  );
}

export default Checkout;

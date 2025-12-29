import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  // Mock data (later from backend)
  const hotels = [
    {
      id: 1,
      name: "Annapoorna Hotel",
      cuisine: "South Indian",
      status: "OPEN"
    },
    {
      id: 2,
      name: "Spicy Treat",
      cuisine: "Chinese & Fast Food",
      status: "CLOSED"
    },
    {
      id: 3,
      name: "Biryani Hub",
      cuisine: "Biryani",
      status: "OPEN"
    }
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>

      {/* Header */}
      <div className="bg-white shadow-sm p-3 sticky-top">
        <h5 className="mb-0 fw-bold">Craveio</h5>
        <small className="text-muted">
          Nearby hotels
        </small>
      </div>

      {/* Hotel List */}
      <div className="container-fluid py-3">

        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="card mb-3 shadow-sm"
            onClick={() => {
              if (hotel.status === "OPEN") {
                navigate(`/hotel/${hotel.id}`);
              }
            }}
            style={{
              cursor: hotel.status === "OPEN" ? "pointer" : "not-allowed",
              opacity: hotel.status === "OPEN" ? 1 : 0.6
            }}
          >
            <div className="card-body d-flex justify-content-between align-items-center">

              <div>
                <h6 className="fw-bold mb-1">{hotel.name}</h6>
                <small className="text-muted">{hotel.cuisine}</small>
              </div>

              <span
                className={`badge ${
                  hotel.status === "OPEN" ? "bg-success" : "bg-secondary"
                }`}
              >
                {hotel.status}
              </span>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Home;

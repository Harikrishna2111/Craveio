import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f9fa"
      }}
    >
      <div style={{ width: "100%", maxWidth: "420px", padding: "16px" }}>

        {/* Icon */}
        <div className="text-center mb-4">
          <div
            className="bg-secondary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
            style={{ width: "64px", height: "64px", fontSize: "28px" }}
          >
            ?
          </div>

          <h4 className="fw-bold">Page Not Found</h4>
          <p className="text-muted">
            The page you’re looking for doesn’t exist
          </p>
        </div>

        {/* Info Card */}
        <div className="card shadow-sm p-3 mb-4 text-center">
          <small className="text-muted">
            It might have been moved, deleted, or the link is wrong.
          </small>
        </div>

        {/* CTA */}
        <button
          className="btn btn-primary w-100"
          onClick={() => navigate("/home")}
        >
          Go to Home
        </button>

      </div>
    </div>
  );
}

export default NotFound;

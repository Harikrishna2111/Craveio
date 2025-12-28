import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/ping")
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Craveio Frontend</h2>
      <p>{msg}</p>
    </div>
  );
}

export default App;

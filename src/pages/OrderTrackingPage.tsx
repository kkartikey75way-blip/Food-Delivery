import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function OrderTrackingPage() {
  const { id } = useParams();
  const [status, setStatus] = useState("Connecting...");
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const socket = new WebSocket(`ws://localhost:8000/ws/orders/${id}`);

    socket.onopen = () => {
      setConnected(true);
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setStatus(data.status);
    };

    socket.onerror = () => {
      setStatus("Connection error");
    };

    return () => socket.close();
  }, [id]);

  return (
    <div className="container py-5 text-center">
      <h1 className="fw-bold mb-4">Order Tracking</h1>

      <div className="card mx-auto p-4 shadow-sm" style={{ maxWidth: 420 }}>
        <h5 className="mb-3">Order ID: {id}</h5>

        <div className="alert alert-primary fw-semibold">
          {status}
        </div>

        <small className="text-muted">
          {connected ? "Live updates enabled" : "Connecting..."}
        </small>
      </div>
    </div>
  );
}

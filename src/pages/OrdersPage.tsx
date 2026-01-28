import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export default function OrdersPage() {
  const orders = useSelector(
    (state: RootState) => state.orders.orders
  );

  const statusMap: Record<
    string,
    { label: string; className: string }
  > = {
    delivered: { label: "DELIVERED", className: "bg-success" },
    on_the_way: { label: "ON THE WAY", className: "bg-primary" },
    preparing: { label: "PREPARING", className: "bg-warning text-dark" },
    cancelled: { label: "CANCELLED", className: "bg-danger" },
  };

  // EMPTY STATE
  if (orders.length === 0) {
    return (
      <div className="container py-5 d-flex flex-column align-items-center justify-content-center">
        <h3 className="fw-semibold mb-3">No orders yet</h3>
        <Link to="/restaurants" className="btn btn-primary">
          Browse Restaurants
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h1 className="fw-bold display-6 mb-4">Your Orders</h1>

      <div className="d-flex flex-column gap-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="card shadow-sm border-0"
          >
            <div className="card-body">
              {/* HEADER */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <h5 className="fw-semibold mb-1">
                    {order.restaurant}
                  </h5>
                  <small className="text-muted">
                    Order ID: {order.id}
                  </small>
                </div>

                <span
                  className={`badge ${
                    statusMap[order.status]?.className
                  }`}
                >
                  {statusMap[order.status]?.label}
                </span>
              </div>

              {/* META INFO */}
              <div className="row text-muted small mb-3">
                <div className="col-md-4">
                  <strong>Date:</strong> {order.date}
                </div>
                <div className="col-md-4">
                  <strong>Items:</strong> {order.items.length}
                </div>
                <div className="col-md-4">
                  <strong>Total:</strong>{" "}
                  <span className="fw-semibold text-primary">
                    Rs.{order.total.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="d-flex gap-2">
                <Link
                  to={`/orders/${order.id}`}
                  className="btn btn-outline-secondary btn-sm"
                >
                  View Details
                </Link>

                <Link
                  to={`/orders/${order.id}/track`}
                  className="btn btn-outline-primary btn-sm"
                >
                  Track Order
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

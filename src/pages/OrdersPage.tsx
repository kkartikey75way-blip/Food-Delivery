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

  if (orders.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h3>No orders yet 🍽️</h3>
        <Link to="/restaurants" className="btn btn-primary mt-3">
          Order Now
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h1 className="fw-bold display-5 mb-4">Your Orders</h1>

      <div className="d-flex flex-column gap-3">
        {orders.map((order) => (
          <Link
            key={order.id}
            to={`/orders/${order.id}`}
            className="card text-decoration-none text-dark shadow-sm border-0"
          >
            <div className="card-body">
              {/* Header */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <h5 className="fw-semibold mb-1">
                    {order.restaurant}
                  </h5>
                  <small className="text-muted">
                    Order #{order.id}
                  </small>
                </div>

                <span
                  className={`badge ${
                    statusMap[order.status].className
                  }`}
                >
                  {statusMap[order.status].label}
                </span>
              </div>

              {/* Meta */}
              <div className="row text-muted small">
                <div className="col-md-4">
                  <strong>Date:</strong> {order.date}
                </div>
                <div className="col-md-4">
                  <strong>Items:</strong> {order.items.length}
                </div>
                <div className="col-md-4">
                  <strong>Total:</strong>{" "}
                  <span className="fw-semibold text-primary">
                    ${order.total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

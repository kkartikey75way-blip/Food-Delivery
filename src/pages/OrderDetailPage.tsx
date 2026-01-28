import { useParams } from "react-router-dom";

export default function OrderDetailPage() {
  const { id } = useParams();

  const order = {
    id: id || "ORD-001",
    restaurant: "The Golden Spoon",
    status: "delivered",
    items: [
      { name: "Margherita Pizza", quantity: 2, price: 12.99 },
      { name: "Caesar Salad", quantity: 1, price: 8.99 },
    ],
    subtotal: 34.97,
    deliveryFee: 2.99,
    tax: 2.8,
    total: 40.76,
    deliveryAddress: "123 Main St, New York, NY 10001",
    orderedAt: "2026-01-28 14:30",
    deliveredAt: "2026-01-28 15:15",
  };

  return (
    <div className="container py-5">
      <h1 className="fw-bold display-5 mb-4">Order Details</h1>

      <div className="row g-4">
        {/* Left Section */}
        <div className="col-lg-8">

          {/* Order Items */}
          <div className="card shadow-sm border-0 mb-4">
            <div className="card-body">
              <h4 className="fw-bold mb-4">Order #{order.id}</h4>

              {order.items.map((item, index) => (
                <div
                  key={index}
                  className="d-flex justify-content-between align-items-center pb-3 mb-3 border-bottom"
                >
                  <div>
                    <p className="fw-semibold mb-1">{item.name}</p>
                    <small className="text-muted">
                      Quantity: {item.quantity}
                    </small>
                  </div>
                  <p className="fw-semibold mb-0">
                    Rs.{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Delivery Details */}
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="fw-bold mb-3">Delivery Details</h5>

              <p className="mb-2">
                <strong>Address:</strong> {order.deliveryAddress}
              </p>
              <p className="mb-2">
                <strong>Ordered:</strong> {order.orderedAt}
              </p>
              <p className="mb-0">
                <strong>Delivered:</strong> {order.deliveredAt}
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-lg-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h4 className="fw-bold mb-4">Summary</h4>

              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>Rs.{order.subtotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Delivery</span>
                <span>Rs.{order.deliveryFee.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Tax</span>
                <span>Rs.{order.tax.toFixed(2)}</span>
              </div>

              <hr />

              <div className="d-flex justify-content-between fw-bold fs-5 mb-4">
                <span>Total</span>
                <span className="text-primary">
                  Rs.{order.total.toFixed(2)}
                </span>
              </div>

              <button className="btn btn-primary w-100 btn-lg">
                Reorder
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/store";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../store/reducer/cartReducer";
import { Link } from "react-router-dom";

export default function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = cartItems.length ? 2.99 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + deliveryFee + tax;

  if (cartItems.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h3>Your cart is empty 🛒</h3>
        <Link to="/restaurants" className="btn btn-primary mt-3">
          Browse Restaurants
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4">Your Cart</h1>

      <div className="row g-4">
        {/* Items */}
        <div className="col-lg-8">
          {cartItems.map((item) => (
            <div key={item.id} className="card mb-3">
              <div className="card-body d-flex align-items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  width={90}
                  height={90}
                  className="rounded"
                />

                <div className="flex-grow-1">
                  <h5 className="mb-1">{item.name}</h5>
                  <p className="text-muted mb-0">
                    ${item.price.toFixed(2)}
                  </p>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => dispatch(decreaseQty(item.id))}
                  >
                    −
                  </button>
                  <span className="fw-semibold">{item.quantity}</span>
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => dispatch(increaseQty(item.id))}
                  >
                    +
                  </button>
                </div>

                <button
                  className="btn btn-link text-danger"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <h4 className="fw-bold mb-3">Order Summary</h4>

              <div className="d-flex justify-content-between">
                <span>Subtotal</span>
                <span>Rs.{subtotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Delivery</span>
                <span>Rs.{deliveryFee.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Tax</span>
                <span>Rs.{tax.toFixed(2)}</span>
              </div>

              <hr />

              <div className="d-flex justify-content-between fw-bold fs-5">
                <span>Total</span>
                <span className="text-primary">
                  Rs.{total.toFixed(2)}
                </span>
              </div>

              <Link
                to="/checkout"
                className="btn btn-primary w-100 mt-3"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

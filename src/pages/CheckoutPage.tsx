import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/store";
import { clearCart } from "../store/reducer/cartReducer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { showNotification } from "../store/reducer/notificationReducer";
import { addOrder } from "../store/reducer/orderReducer";
// ================= STRIPE =================
const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLIC_KEY || "pk_test_mock"
);

// ================= VALIDATION =================
const checkoutSchema = z.object({
  address: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  zipCode: z.string().regex(/^\d{5,6}$/, "Invalid ZIP code"),
  phone: z
    .string()
    .regex(/^\+?[1-9]\d{9,14}$/, "Invalid phone number"),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

// ================= CHECKOUT FORM =================
function CheckoutForm({ total }: { total: number }) {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();

  const [processing, setProcessing] = useState(false);
  const [cardError, setCardError] = useState<string | null>(null);
  const [cardComplete, setCardComplete] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async () => {
  if (!stripe || !elements || !cardComplete) return;

  setProcessing(true);

  try {
    await new Promise((r) => setTimeout(r, 2000));

    const orderId = "ORD" + Date.now();

    // CREATE ORDER
    dispatch(
      addOrder({
        id: orderId,
        restaurant: "The Golden Spoon",
        status: "preparing",
        items: [],
        total,
        date: new Date().toISOString().split("T")[0],
      })
    );

    // CLEAR CART
    dispatch(clearCart());

    // SHOW NOTIFICATION
    dispatch(
      showNotification({
        message: "Order placed successfully 🎉",
        type: "success",
      })
    );

    // 4️⃣ NAVIGATE TO TRACKING
    navigate(`/orders/${orderId}/track`);
  } catch (err) {
    dispatch(
      showNotification({
        message: "Payment failed. Try again",
        type: "error",
      })
    );
  } finally {
    setProcessing(false);
  }
};



  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* ADDRESS */}
      <div className="row g-3 mb-4">
        <div className="col-md-6">
          <label className="form-label fw-semibold">Address</label>
          <input
            {...register("address")}
            className={`form-control ${errors.address ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.address?.message}</div>
        </div>

        <div className="col-md-6">
          <label className="form-label fw-semibold">City</label>
          <input
            {...register("city")}
            className={`form-control ${errors.city ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.city?.message}</div>
        </div>

        <div className="col-md-6">
          <label className="form-label fw-semibold">ZIP Code</label>
          <input
            {...register("zipCode")}
            className={`form-control ${errors.zipCode ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.zipCode?.message}</div>
        </div>

        <div className="col-md-6">
          <label className="form-label fw-semibold">Phone</label>
          <input
            {...register("phone")}
            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.phone?.message}</div>
        </div>
      </div>

      {/* CARD */}
      <div className="mb-4">
        <label className="form-label fw-semibold">Card Details</label>
        <div className="border rounded p-3">
          <CardElement
            onChange={(event) => {
              setCardError(event.error ? event.error.message : null);
              setCardComplete(event.complete);
            }}
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#495057",
                },
                invalid: {
                  color: "#dc3545",
                },
              },
            }}
          />
        </div>

        {cardError && (
          <div className="text-danger small mt-2">
            {cardError}
          </div>
        )}
      </div>

      {/* SUBMIT */}
      <button
        type="submit"
        className="btn btn-primary w-100 btn-lg"
        disabled={!stripe || processing || !cardComplete}
      >
        {processing ? "Processing..." : `Pay ₹${total.toFixed(2)}`}
      </button>
    </form>
  );
}

// ================= PAGE =================
export default function CheckoutPage() {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  if (cartItems.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h3>Your cart is empty</h3>
        <Link to="/restaurants" className="btn btn-primary mt-3">
          Browse Restaurants
        </Link>
      </div>
    );
  }

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = 49;
  const tax = subtotal * 0.05;
  const total = subtotal + deliveryFee + tax;

  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4">Checkout</h1>

      <div className="row g-4">
        <div className="col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <Elements stripe={stripePromise}>
                <CheckoutForm total={total} />
              </Elements>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h4 className="fw-bold mb-3">Order Summary</h4>

              <div className="d-flex justify-content-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Delivery</span>
                <span>₹{deliveryFee.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Tax</span>
                <span>₹{tax.toFixed(2)}</span>
              </div>

              <hr />

              <div className="d-flex justify-content-between fw-bold fs-5">
                <span>Total</span>
                <span className="text-primary">
                  ₹{total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

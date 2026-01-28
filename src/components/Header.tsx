import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/store";
import { logout } from "../store/reducer/authReducer";

export default function Header() {
  const dispatch = useDispatch();

  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );

  // GET CART ITEMS
  const cartItems = useSelector(
    (state: RootState) => state.cart.items
  );

  // TOTAL CART COUNT (sum of quantities)
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">

        {/* Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
          <div
            className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center fw-bold"
            style={{ width: 36, height: 36 }}
          >
            F
          </div>
          <span className="fw-bold fs-5">FoodHub</span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">

          {/* Left Links */}
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/restaurants" className="nav-link fw-semibold">
                Restaurants
              </Link>
            </li>

            {isAuthenticated && (
              <>
                <li className="nav-item">
                  <Link to="/orders" className="nav-link fw-semibold">
                    Orders
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/profile" className="nav-link fw-semibold">
                    Profile
                  </Link>
                </li>
              </>
            )}
          </ul>

          {/* Right Actions */}
          <div className="d-flex align-items-center gap-3">

            {/* 🛒 CART ICON */}
            <Link to="/cart" className="position-relative text-dark">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>

              {/* DYNAMIC BADGE */}
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Auth Section */}
            {isAuthenticated ? (
              <div className="dropdown">
                <button
                  className="btn btn-outline-secondary dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  {user?.name || "Account"}
                </button>

                <ul className="dropdown-menu dropdown-menu-end shadow">
                  <li className="px-3 py-2">
                    <p className="mb-0 fw-semibold">{user?.name}</p>
                    <small className="text-muted">{user?.email}</small>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="dropdown-item text-danger fw-semibold"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <>
                <Link to="/auth/login" className="btn btn-outline-secondary">
                  Login
                </Link>
                <Link to="/auth/register" className="btn btn-primary">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

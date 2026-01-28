import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-light mt-5">
      <div className="container py-5">

        {/* Top Grid */}
        <div className="row g-4">

          {/* Brand */}
          <div className="col-md-6 col-lg-3">
            <h3 className="fw-bold mb-3 text-white">FoodHub</h3>
            <p className="text-secondary">
              Delicious meals delivered fresh to your doorstep. Fast, reliable,
              and tasty!
            </p>

            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-secondary fs-5" aria-label="Facebook">
                <i className="bi bi-facebook" />
              </a>
              <a href="#" className="text-secondary fs-5" aria-label="Twitter">
                <i className="bi bi-twitter" />
              </a>
              <a href="#" className="text-secondary fs-5" aria-label="Instagram">
                <i className="bi bi-instagram" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="col-md-6 col-lg-3">
            <h5 className="fw-semibold mb-3">Company</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="#" className="text-secondary text-decoration-none">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-secondary text-decoration-none">
                  Careers
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-secondary text-decoration-none">
                  Press
                </Link>
              </li>
              <li>
                <Link to="#" className="text-secondary text-decoration-none">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-6 col-lg-3">
            <h5 className="fw-semibold mb-3">Support</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="#" className="text-secondary text-decoration-none">
                  Help Center
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-secondary text-decoration-none">
                  Safety
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-secondary text-decoration-none">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-secondary text-decoration-none">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-md-6 col-lg-3">
            <h5 className="fw-semibold mb-3">Legal</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="#" className="text-secondary text-decoration-none">
                  Terms of Service
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-secondary text-decoration-none">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-secondary text-decoration-none">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <hr className="border-secondary my-4" />

        <p className="text-center text-secondary mb-0">
          © 2026 FoodHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

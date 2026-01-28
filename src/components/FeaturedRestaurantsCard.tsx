import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

interface Props {
  restaurant: {
    id: string;
    name: string;
    image: string;
    rating: number;
    cuisine: string;
    deliveryTime: string;
    deliveryFee: number;
    discount?: number;
  };
}

export default function FeaturedRestaurantCard({ restaurant }: Props) {
  return (
    <div className="col-md-6 col-lg-3">
      <Link
        to={`/restaurants/${restaurant.id}`}
        className="text-decoration-none text-dark"
      >
        {/* 🔥 position-relative REQUIRED for badge */}
        <div className="card h-100 shadow-sm border-0 position-relative">

          {/* ✅ DISCOUNT BADGE */}
          {restaurant.discount && restaurant.discount > 0 && (
            <span
              className="badge bg-success position-absolute"
              style={{ top: 10, left: 10, zIndex: 10 }}
            >
              {restaurant.discount}% OFF
            </span>
          )}

          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="card-img-top"
            style={{ height: 180, objectFit: "cover" }}
          />

          <div className="card-body">
            <div className="d-flex justify-content-between mb-2">
              <h5 className="fw-bold mb-0">{restaurant.name}</h5>
              <span className="badge bg-warning text-dark d-flex align-items-center gap-1">
                <FaStar /> {restaurant.rating}
              </span>
            </div>

            <p className="text-muted small mb-3">
              {restaurant.cuisine}
            </p>

            <div className="d-flex justify-content-between small">
              <span>⏱ {restaurant.deliveryTime}</span>
              <span className="fw-semibold text-primary">
                Rs.{restaurant.deliveryFee} delivery
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function RestaurantsPage() {
  const [restaurants, setRestaurants] = useState<any[]>([]);

  useEffect(() => {
    // Mock data
    setRestaurants([
      {
        id: "1",
        name: "The Golden Spoon",
        image:
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600",
        rating: 4.8,
        cuisine: "Italian",
        deliveryTime: "25-35 min",
        deliveryFee: 2.99,
      },
      {
        id: "2",
        name: "Sushi Master",
        image:
          "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600",
        rating: 4.9,
        cuisine: "Japanese",
        deliveryTime: "30-40 min",
        deliveryFee: 3.99,
      },
      {
        id: "3",
        name: "Burger Heaven",
        image:
          "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600",
        rating: 4.7,
        cuisine: "American",
        deliveryTime: "20-30 min",
        deliveryFee: 1.99,
      },
      {
        id: "4",
        name: "Spice Route",
        image:
          "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600",
        rating: 4.6,
        cuisine: "Indian",
        deliveryTime: "35-45 min",
        deliveryFee: 2.49,
      },
    ]);
  }, []);

  return (
    <div className="container py-5">
      <h1 className="fw-bold display-5 mb-4">All Restaurants</h1>

      <div className="row g-4">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="col-md-6 col-lg-4">
            <Link
              to={`/restaurants/${restaurant.id}`}
              className="text-decoration-none text-dark"
            >
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="card-img-top"
                  style={{
                    height: 200,
                    objectFit: "cover",
                  }}
                />

                <div className="card-body">
                  <h5 className="fw-semibold mb-1">
                    {restaurant.name}
                  </h5>
                  <p className="text-muted mb-3">
                    {restaurant.cuisine}
                  </p>

                  <div className="d-flex justify-content-between align-items-center small">
                    <span>{restaurant.deliveryTime}</span>
                    <span className="fw-semibold text-primary">
                      ${restaurant.deliveryFee.toFixed(2)} delivery
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

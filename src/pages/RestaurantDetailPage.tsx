import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { MdDeliveryDining, MdAccessTime } from "react-icons/md";

import InfoBadge from "../components/InfoBadge";
import MenuCard from "../components/MenuCard";

export default function RestaurantDetailPage() {
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState<any>(null);
  const [menu, setMenu] = useState<any[]>([]);

  useEffect(() => {
    setRestaurant({
      id,
      name: "The Golden Spoon",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200",
      rating: 4.8,
      reviewCount: 342,
      deliveryTime: "25-35 min",
      deliveryFee: 2.99,
      description: "Authentic Italian cuisine with a modern twist",
    });

    setMenu([
      {
        id: "1",
        name: "Margherita Pizza",
        description: "Classic tomato, mozzarella, basil",
        price: 12.99,
        image:
          "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400",
      },
      {
        id: "2",
        name: "Spaghetti Carbonara",
        description: "Creamy pasta with bacon and parmesan",
        price: 14.99,
        image:
          "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400",
      },
      {
        id: "3",
        name: "Caesar Salad",
        description: "Romaine lettuce, croutons, parmesan",
        price: 8.99,
        image:
          "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400",
      },
      {
        id: "4",
        name: "Tiramisu",
        description: "Classic Italian dessert",
        price: 6.99,
        image:
          "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400",
      },
    ]);
  }, [id]);

  if (!restaurant) {
    return (
      <div className="vh-100 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" />
      </div>
    );
  }

  return (
    <div>
      {/* HERO */}
      <div className="position-relative">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-100"
          style={{ height: 420, objectFit: "cover" }}
        />

        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.65), transparent)",
          }}
        />

        <div className="position-absolute bottom-0 start-0 w-100 text-white">
          <div className="container pb-4">
            <h1 className="fw-bold display-5 mb-2">
              {restaurant.name}
            </h1>
            <p className="lead mb-3">{restaurant.description}</p>

            <div className="d-flex flex-wrap gap-3">
              <InfoBadge
                icon={<FaStar />}
                iconClassName="text-warning"
                label={`${restaurant.rating} (${restaurant.reviewCount} reviews)`}
              />

              <InfoBadge
                icon={<MdAccessTime />}
                label={restaurant.deliveryTime}
              />

              <InfoBadge
                icon={<MdDeliveryDining />}
                label={`Rs.${restaurant.deliveryFee} delivery`}

              />
            </div>
          </div>
        </div>
      </div>

      {/* MENU */}
      <div className="container py-5">
        <h2 className="fw-bold mb-4">Menu</h2>
        <div className="row g-4">
          {menu.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

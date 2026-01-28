import { useState } from "react";

import {
  featuredRestaurants,
  categories,
  howItWorks,
} from "../data/homedata";

import FeaturedRestaurantCard from "../components/FeaturedRestaurantsCard";
import CategoryCard from "../components/CategoryCard";
import HowItWorksCard from "../components/HowItWorksCard";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `/restaurants?q=${searchQuery}`;
  };

  return (
    <div>

      {/* HERO */}
      <section
        className="text-white text-center py-5"
        style={{
          background: "linear-gradient(135deg, #ff6b35, #f03e3e, #6f42c1)",
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">
            Delicious Food,
            <br />Delivered to Your Door
          </h1>

          <form onSubmit={handleSearch} className="mb-4">
            <div className="input-group input-group-lg mx-auto" style={{ maxWidth: 700 }}>
              <input
                className="form-control"
                placeholder="Search for restaurants or cuisines..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-light fw-semibold">Search</button>
            </div>
          </form>
        </div>
      </section>

      {/* FEATURED */}
      <section className="container py-5">
        <div className="row g-4">
          {featuredRestaurants.map((r) => (
            <FeaturedRestaurantCard key={r.id} restaurant={r} />
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row g-4 justify-content-center">
            {categories.map((c) => (
              <CategoryCard key={c.name} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container py-5">
        <div className="row g-4">
          {howItWorks.map((item, i) => (
            <HowItWorksCard key={i} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}

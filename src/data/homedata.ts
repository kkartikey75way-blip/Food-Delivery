// Featured restaurants


export const featuredRestaurants = [
  {
    id: "1",
    name: "The Golden Spoon",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600",
    rating: 4.8,
    cuisine: "Italian",
    deliveryTime: "25-35 min",
    deliveryFee: 20,
    discount: 20, 
  },
  {
    id: "2",
    name: "Sushi Master",
    image:
      "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600",
    rating: 4.9,
    cuisine: "Japanese",
    deliveryTime: "30-40 min",
    deliveryFee: 30,
    discount: 15, 
  },
  {
    id: "3",
    name: "Burger Heaven",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600",
    rating: 4.7,
    cuisine: "American",
    deliveryTime: "20-30 min",
    deliveryFee: 10,
    discount: 10, 
  },
  {
    id: "4",
    name: "Spice Route",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600",
    rating: 4.6,
    cuisine: "Indian",
    deliveryTime: "35-45 min",
    deliveryFee: 20,
    discount: 10, 
  },
];


// Categories
export const categories = [
  {
    name: "Pizza",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
  },
  {
    name: "Burgers",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400",
  },
  {
    name: "Sushi",
    image:
      "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400",
  },
  {
    name: "Pasta",
    image:
      "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400",
  },
  {
    name: "Salads",
    image:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400",
  },
  {
    name: "Desserts",
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400",
  },
];


// How it works
import { FaSearch, FaShoppingCart, FaTruck } from "react-icons/fa";

export const howItWorks = [
  {
    title: "Choose Your Meal",
    description: "Browse restaurants and select your favorite dishes",
    icon: FaSearch,
  },
  {
    title: "Place Your Order",
    description: "Add items to cart and checkout securely",
    icon: FaShoppingCart,
  },
  {
    title: "Get Delivery",
    description: "Track your order and enjoy fresh food at your door",
    icon: FaTruck,
  },
];

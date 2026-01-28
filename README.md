# 🍔 FoodHub – Food Delivery Web Application

FoodHub is a **full-stack food delivery web application** built using **React (Vite + TypeScript)** for the frontend and **FastAPI** for the backend.  
It supports **user authentication, cart management, checkout, order history, and real-time order tracking** using **WebSockets**.

---

## 🚀 Features

### 🧑‍💻 User Features
- User authentication (Login / Register)
- Browse restaurants and menus
- Add items to cart with quantity management
- Dynamic price calculation with discounts
- Secure checkout (Stripe – dummy integration)
- Order history
- **Real-time order tracking**
- Logout & session handling

### 🔔 Notifications
- Login success notification
- Add-to-cart notification
- Order confirmation notification
- Live delivery status updates (WebSocket)

### 📦 Order Tracking (Real-Time)
- Order Confirmed
- Preparing Food
- Out for Delivery
- Delivered

---

## 🛠️ Tech Stack

### Frontend
- React + TypeScript
- Vite
- Redux Toolkit
- React Router
- React Hook Form + Zod
- Bootstrap 5
- Stripe (dummy payments)
- WebSocket (for tracking)
- React Icons

### Backend
- FastAPI
- WebSockets
- Uvicorn
- Python 3.10+

---

## 📂 Project Structure
Inside src:-
├── App.tsx
├── assets
│   └── react.svg
├── components
│   ├── CategoryCard.tsx
│   ├── FeaturedRestaurantsCard.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── HowItWorksCard.tsx
│   ├── InfoBadge.tsx
│   ├── MenuCard.tsx
│   └── ToastContainer.tsx
├── data
│   ├── categories.ts
│   └── homedata.ts
├── layouts
│   ├── AuthLayout.tsx
│   └── MainLayout.tsx
├── main.tsx
├── pages
│   ├── CartPage.tsx
│   ├── CheckoutPage.tsx
│   ├── HomePage.tsx
│   ├── LoginPage.tsx
│   ├── NotFoundPage.tsx
│   ├── OrderDetailPage.tsx
│   ├── OrdersPage.tsx
│   ├── OrderTrackingPage.tsx
│   ├── ProfilePage.tsx
│   ├── RegisterPage.tsx
│   ├── RestaurantDetailPage.tsx
│   └── RestaurantsPage.tsx
├── routes
│   ├── index.tsx
│   └── ProtectedRoute.tsx
├── services
│   ├── api.ts
│   └── baseQuery.ts
├── store
│   ├── reducer
│   │   ├── authReducer.ts
│   │   ├── cartReducer.ts
│   │   ├── notificationReducer.ts
│   │   └── orderReducer.ts
│   └── store.ts
├── styles.css
├── theme.d.ts
├── Themes.ts
├── types.ts
└── utils
    └── calculatePrice.ts


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/foodhub.git
cd foodhub

##  Frontend Setup
cd frontend
npm install
npm run dev

## Test Card Details (Stripe – Demo)
Card Number: 4242 4242 4242 4242
Expiry: Any future date
CVV: Any 3 digits

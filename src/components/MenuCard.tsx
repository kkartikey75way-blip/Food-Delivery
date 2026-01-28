import { useDispatch } from "react-redux";
import { FaPlus } from "react-icons/fa";
import { addToCart } from "../store/reducer/cartReducer";
import { calculateFinalPrice } from "../utils/calculatePrice";
import { showNotification } from "../store/reducer/notificationReducer";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  discount?: number;
}

interface Props {
  item: MenuItem;
}

export default function MenuCard({ item }: Props) {
  const dispatch = useDispatch();

  const pricing = calculateFinalPrice(
    item.price,
    item.discount ?? 0
  );

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: item.id,
        name: item.name,
        price: pricing.finalPrice,
        image: item.image,
      })
    );

    dispatch(
      showNotification({
        message: `${item.name} added to cart 🛒`,
        type: "success",
      })
    );
  };

  return (
    <div className="col-md-6 col-lg-4">
      <div className="card h-100 shadow-sm border-0 position-relative">
        
        {/* PROMO BADGE */}
        {item.discount && item.discount > 0 && (
          <span
            className="badge bg-success position-absolute"
            style={{ top: 10, left: 10 }}
          >
            {item.discount}% OFF
          </span>
        )}

        <img
          src={item.image}
          alt={item.name}
          className="card-img-top"
          style={{ height: 200, objectFit: "cover" }}
        />

        <div className="card-body d-flex flex-column">
          <h5 className="fw-semibold mb-2">{item.name}</h5>
          <p className="text-muted flex-grow-1">
            {item.description}
          </p>

          {/* PRICE */}
          <div className="mt-2">
            {item.discount && item.discount > 0 && (
              <span className="text-muted text-decoration-line-through me-2">
                Rs.{item.price.toFixed(2)}
              </span>
            )}
            <span className="fw-bold fs-5 text-primary">
              Rs.{pricing.finalPrice.toFixed(2)}
            </span>
          </div>

          <div className="mt-3">
            <button
              className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2"
              onClick={handleAddToCart}
            >
              <FaPlus size={14} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

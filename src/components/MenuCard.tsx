import { useDispatch } from "react-redux";
import { FaPlus } from "react-icons/fa";
import { addToCart } from "../store/reducer/cartReducer";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface Props {
  item: MenuItem;
}

export default function MenuCard({ item }: Props) {
  const dispatch = useDispatch();

  return (
    <div className="col-md-6 col-lg-4">
      <div className="card h-100 shadow-sm border-0">
        <img
          src={item.image}
          alt={item.name}
          className="card-img-top"
          style={{ height: 200, objectFit: "cover" }}
        />

        <div className="card-body d-flex flex-column">
          <h5 className="fw-semibold mb-2">{item.name}</h5>
          <p className="text-muted flex-grow-1">{item.description}</p>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <span className="fw-bold fs-5 text-primary">
              Rs.{item.price.toFixed(2)}
            </span>

            <button
              className="btn btn-primary d-flex align-items-center gap-2"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    image: item.image,
                  })
                )
              }
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

import { Link } from "react-router-dom";

interface Props {
  name: string;
  image: string;
}

export default function CategoryCard({ name, image }: Props) {
  return (
    <div className="col-6 col-md-4 col-lg-2">
      <Link
        to={`/restaurants?category=${name.toLowerCase()}`}
        className="card text-center shadow-sm border-0 h-100 text-decoration-none text-dark"
      >
        <img
          src={image}
          alt={name}
          className="card-img-top"
          style={{ height: 120, objectFit: "cover" }}
        />
        <div className="card-body py-3">
          <p className="fw-semibold mb-0">{name}</p>
        </div>
      </Link>
    </div>
  );
}

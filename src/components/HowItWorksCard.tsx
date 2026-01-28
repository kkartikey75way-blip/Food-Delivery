interface Props {
  title: string;
  description: string;
  icon: string;
}

export default function HowItWorksCard({
  title,
  description,
  icon,
}: Props) {
  return (
    <div className="col-md-4 text-center">
      <div
        className="mx-auto mb-3 rounded-circle d-flex align-items-center justify-content-center shadow"
        style={{
          width: 80,
          height: 80,
          background: "linear-gradient(135deg, #ff6b35, #6f42c1)",
          fontSize: "2rem",
        }}
      >
        {icon}
      </div>
      <h5 className="fw-bold">{title}</h5>
      <p className="text-muted">{description}</p>
    </div>
  );
}

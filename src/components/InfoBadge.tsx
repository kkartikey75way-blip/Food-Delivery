import { type ReactNode } from "react";

interface InfoBadgeProps {
  icon: ReactNode;
  label: string;
  iconClassName?: string;
}

export default function InfoBadge({
  icon,
  label,
  iconClassName,
}: InfoBadgeProps) {
  return (
    <span className="badge bg-light text-dark px-3 py-2 d-flex align-items-center gap-2">
      <span className={iconClassName}>{icon}</span>
      {label}
    </span>
  );
}

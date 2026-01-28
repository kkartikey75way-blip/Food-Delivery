import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { removeNotification } from "../store/reducer/notificationReducer";

export default function ToastContainer() {
  const dispatch = useDispatch();
  const notifications = useSelector(
    (state: RootState) => state.notification.notifications
  );

  useEffect(() => {
    notifications.forEach((n) => {
      setTimeout(() => {
        dispatch(removeNotification(n.id));
      }, 3000);
    });
  }, [notifications, dispatch]);

  return (
    <div
      style={{
        position: "fixed",
        top: 20,
        right: 20,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      {notifications.map((n) => (
        <div
          key={n.id}
          className={`alert alert-${getBootstrapType(n.type)} shadow`}
        >
          {n.message}
        </div>
      ))}
    </div>
  );
}

function getBootstrapType(type: string) {
  switch (type) {
    case "success":
      return "success";
    case "error":
      return "danger";
    case "warning":
      return "warning";
    default:
      return "info";
  }
}

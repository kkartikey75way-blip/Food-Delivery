import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { type RootState } from '../store/store';

export default function AuthLayout() {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-display font-bold text-gradient mb-2">
            FoodHub
          </h1>
          <p className="text-gray-600">Delicious meals delivered to your door</p>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
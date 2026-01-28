import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-display font-bold text-gradient mb-4">404</h1>
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn-primary inline-block">Go Home</Link>
      </div>
    </div>
  );
}
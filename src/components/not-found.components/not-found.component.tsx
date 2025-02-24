import { useLocation } from 'react-router-dom';

export const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-4">Page Not Found</h2>
        <p className="text-gray-500 mb-4">
          The page <span className="font-semibold">{location.pathname}</span> is under construction or doesn't exist.
        </p>
        <p className="text-gray-400 text-sm">Please check back later!</p>
      </div>
    </div>
  );
};
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">Welcome to My Practice App</h1>
        <p className="mb-8 text-gray-600">This is a collection of UI components built with React and Tailwind CSS</p>
        <Link 
          to="/one-user-card" 
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          View Components
        </Link>
      </div>
    </div>
  );
}; 
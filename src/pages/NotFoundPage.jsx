import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-2">404 - Page Not Found</h1>
      <p className="mb-4">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="text-blue-700 underline">
        Go to Home
      </Link>
    </div>
  );
}

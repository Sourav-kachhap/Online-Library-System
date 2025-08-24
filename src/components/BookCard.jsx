import { Link } from 'react-router-dom';

export default function BookCard({ book }) {
  return (
    <div className="bg-white p-4 rounded shadow flex flex-col">
      <h3 className="font-bold">{book.title}</h3>
      <div className="flex-1">
        <p className="text-sm text-gray-600">by {book.author}</p>
        <p className="text-xs text-blue-800">{book.category}</p>
      </div>
      <Link
        to={`/book/${book.id}`}
        className="text-blue-600 hover:underline mt-2"
      >
        View Details
      </Link>
    </div>
  );
}

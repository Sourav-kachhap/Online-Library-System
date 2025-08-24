import { Link } from 'react-router-dom';

const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi'];

export default function CategoryList() {
  return (
    <div className="flex gap-4 my-3">
      {categories.map((cat) => (
        <Link
          key={cat}
          to={`/books/${cat}`}
          className="px-3 py-1 bg-blue-100 rounded text-blue-700 hover:bg-blue-200"
        >
          {cat}
        </Link>
      ))}
    </div>
  );
}

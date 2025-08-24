import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function BookDetails() {
  const { id } = useParams();
  const books = useSelector((state) => state.books.books);
  const book = books.find((b) => String(b.id) === String(id));

  const navigate = useNavigate();

  if (!book) {
    return (
      <div>
        <p>Book not found.</p>
        <Link to="/books" className="text-blue-600 underline">
          Back to Browse
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-gray-50 rounded p-6 shadow">
      <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
      <p className="text-gray-700 mb-1"><b>Author:</b> {book.author}</p>
      <p className="mb-2"><b>Category:</b> {book.category}</p>
      <p className="mb-2">{book.description}</p>
      <p className="mb-2"><b>Rating:</b> {book.rating} / 5</p>

      <button
        onClick={() => navigate(-1)}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Back to Browse
      </button>
    </div>
  );
}

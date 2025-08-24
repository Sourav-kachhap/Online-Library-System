import { useSelector } from 'react-redux';
import CategoryList from '../components/CategoryList';
import BookList from '../components/BookList';
import { Link } from 'react-router-dom';

export default function Home() {
  const books = useSelector((state) => state.books.books);
  const popular = books.slice(0, 3);

  return (
    <div>
      <h1 className="text-3xl font-bold my-4">Welcome to the Online Library!</h1>

      <CategoryList />

      <h2 className="text-xl font-semibold my-3">Popular Books</h2>
      <BookList books={popular} />

      <Link to="/books" className="inline-block mt-4 text-blue-600 hover:underline">
        View All Books
      </Link>
    </div>
  );
}

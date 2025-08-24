import { useSelector } from 'react-redux';
import BookList from '../components/BookList';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

export default function BrowseBooks() {
  const { category } = useParams();
  const allBooks = useSelector((state) => state.books.books);
  const [search, setSearch] = useState('');

  let filteredBooks = allBooks;
  if (category) {
    filteredBooks = filteredBooks.filter(
      (book) => book.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (search) {
    filteredBooks = filteredBooks.filter(
      (book) =>
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-3">
        Browse Books {category && <>- <i>{category}</i></>}
      </h1>

      <input
        type="text"
        placeholder="Search by title or author..."
        className="border rounded p-2 w-full mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <BookList books={filteredBooks} />
    </div>
  );
}

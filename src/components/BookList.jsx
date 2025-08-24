import BookCard from './BookCard';

export default function BookList({ books }) {
  if (!books.length) return <p>No books found.</p>;

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {books.map((book) => (
        <BookCard book={book} key={book.id} />
      ))}
    </div>
  );
}

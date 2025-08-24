import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';

const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi'];

export default function AddBook() {
  const [form, setForm] = useState({
    title: '',
    author: '',
    description: '',
    category: categories[0],
    rating: '',
  });
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !form.title.trim() ||
      !form.author.trim() ||
      !form.description.trim() ||
      !form.rating.trim()
    ) {
      setError('Please fill in all fields.');
      return;
    }

    const ratingNumber = Number(form.rating);
    if (isNaN(ratingNumber) || ratingNumber < 0 || ratingNumber > 5) {
      setError('Rating must be a number between 0 and 5.');
      return;
    }

    dispatch(addBook({ ...form, rating: ratingNumber }));
    navigate('/books');
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded shadow p-6">
      <h1 className="text-2xl font-semibold mb-4">Add a New Book</h1>
      {error && <p className="text-red-600 mb-2">{error}</p>}

      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input
          className="border rounded p-2"
          placeholder="Title"
          name="title"
          value={form.title}
          onChange={handleChange}
        />
        <input
          className="border rounded p-2"
          placeholder="Author"
          name="author"
          value={form.author}
          onChange={handleChange}
        />
        <textarea
          className="border rounded p-2"
          placeholder="Description"
          name="description"
          value={form.description}
          onChange={handleChange}
        />
        <select
          className="border rounded p-2"
          name="category"
          value={form.category}
          onChange={handleChange}
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <input
          className="border rounded p-2"
          placeholder="Rating (0-5)"
          name="rating"
          value={form.rating}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Add Book
        </button>
      </form>
    </div>
  );
}

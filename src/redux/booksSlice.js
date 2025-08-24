import { createSlice } from '@reduxjs/toolkit';
import mockBooks from '../data/mockBooks';

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: mockBooks,
  },
  reducers: {
    addBook: (state, action) => {
      const newBook = { ...action.payload, id: Date.now() };
      state.books.push(newBook);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;

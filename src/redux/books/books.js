import { createAsyncThunk } from '@reduxjs/toolkit';
import BookStoreAPIMethods from '../../api/methods';

const ADD = 'Bookstore/src/redux/books/ADD';
const REMOVE = 'Bookstore/src/redux/books/REMOVE';
const GET = 'Bookstore/src/redux/books/GET';

const initialState = [
  {
    id: 'Book-1', title: 'my journey', author: 'mohamed saleh', category: 'all',
  },
  {
    id: 'Book-2', title: 'the unique', author: 'ahmed gamal', category: 'all',
  }];

export const addBook = (info) => ({
  type: ADD,
  payload: info,

});
export const removeBook = (index) => ({
  type: REMOVE,
  payload: +index,
});
export const fetchAllBooks = createAsyncThunk(
  GET,
  async () => {
    const response = await BookStoreAPIMethods.getBooks();
    const data = await response.data;
    const books = Object.keys(data).map((key) => ({
      id: key,
      title: data[key][0].title,
      author: data[key][0].author,
      category: data[key][0].category,
    }));
    return books;
  },
);
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case REMOVE:
      return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)];
    case `${GET}/fulfilled`:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
export default bookReducer;

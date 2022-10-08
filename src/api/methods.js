import http from './api-connector';

const createBook = (data) => http.post('/apps/8BP3Zy30smZEP0tcJ66W/books', data);
const createBookOBj = (bookId, bookTitle, bookAuthor, bookCategory) => JSON.stringify(
  {
    id: bookId,
    title: bookTitle,
    author: bookAuthor,
    category: bookCategory,
  },
);
const sendBook = (bookId, bookTitle, bookAuthor, bookCategory) => createBook(
  createBookOBj(bookId, bookTitle, bookAuthor, bookCategory),
);
const getBooks = () => http.get('/apps/8BP3Zy30smZEP0tcJ66W/books');
const deleteBook = (bookId) => http.delete(`/apps/8BP3Zy30smZEP0tcJ66W/books/${bookId}`);
const BookStoreAPIMethods = {
  sendBook,
  getBooks,
  deleteBook,
};
export default BookStoreAPIMethods;

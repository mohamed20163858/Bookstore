import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/books';

const Bookform = (props) => {
  const { numOfInitialElements } = props;
  const initialInfo = {
    id: numOfInitialElements,
    title: null,
    author: null,
    category: 'all',
  };
  const [info, setInfo] = useState(initialInfo);
  const dispatch = useDispatch();
  const sendData = (e) => {
    e.preventDefault();
    const bookName = e.target.querySelector('input:first-of-type');
    const bookAuthor = e.target.querySelector('input:last-of-type');
    const updatedInfo = {
      id: `Book-${info.id + 1}`,
      title: bookName.value,
      author: bookAuthor.value,
      category: 'all',
    };
    setInfo(updatedInfo);
    dispatch(addBook(updatedInfo));
    bookName.value = '';
    bookAuthor.value = '';
  };
  return (
    <form onSubmit={sendData}>
      <input type="text" placeholder="Book title" required />
      <input type="text" placeholder="Book author" required />
      <button type="submit">ADD BOOK</button>
    </form>
  );
};
Bookform.propTypes = {
  numOfInitialElements: PropTypes.number.isRequired,
};
export default Bookform;

import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook, removeBookInUI } from '../redux/books/books';

const Bookinfo = (props) => {
  const {
    id, title, author, category,
  } = props;
  const dispatch = useDispatch();
  const state = useSelector((state) => state.bookInfo);
  const removeAction = (e) => {
    for (let i = 0; i < state.length; i += 1) {
      if (+state[i].id === +e.target.parentElement.id) {
        dispatch(removeBookInUI(i));
        dispatch(removeBook(e.target.parentElement.id)());
      }
    }
  };

  return (
    <div id={id}>
      <p>{category}</p>
      <h3>{title}</h3>
      <p>{author}</p>
      <button type="submit" onClick={removeAction}>Remove</button>
    </div>
  );
};
Bookinfo.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default Bookinfo;

import PropTypes from 'prop-types';

const Bookinfo = (props) => {
  const { title, author } = props;
  return (
    <div>
      <h3>{title}</h3>
      <p>{author}</p>
      <button type="submit">Remove</button>
    </div>
  );
};
Bookinfo.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Bookinfo;

import { useSelector } from 'react-redux';
import Bookinfo from './Bookinfo';
import Bookform from './Bookform';

const Books = () => {
  const infoState = useSelector((state) => state.bookInfo);
  const infoUI = [];
  for (let i = 0; i < infoState.length; i += 1) {
    infoUI.push(<Bookinfo title={infoState[i].title} author={infoState[i].author} id={infoState[i].id} key={`book-${i + 1}`} />);
  }
  return (
    <>
      {infoUI}
      <Bookform numOfInitialElements={infoState.length} />
    </>
  );
};
export default Books;

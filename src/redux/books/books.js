const ADD = 'Bookstore/src/redux/books/ADD';
const REMOVE = 'Bookstore/src/redux/books/REMOVE';

const initialState = [];

export const addBook = (info) => ({
  type: ADD,
  payload: info,
});
export const removeBook = (index) => ({
  type: REMOVE,
  payload: index,
});
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case REMOVE:
      return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)];
    default:
      return state;
  }
};
export default bookReducer;

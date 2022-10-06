const ADD = 'Bookstore/src/redux/books/ADD';
const REMOVE = 'Bookstore/src/redux/books/REMOVE';

const initialState = [];

export const addBook = (info) => {
    return {
        type: ADD,
        payload: info
    };
};
export const removeBook = (index) => {
    return {
        type: REMOVE,
        payload: index
    };
}
export default  bookReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD:
            return [...state, action.payload ];
        case REMOVE:
            return [...state.slice(0,action.payload ), ...state.slice(action.payload +1)];
        default:
            return state;
    }

}
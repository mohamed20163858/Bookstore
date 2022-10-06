const CHECK_STATUS  = 'Bookstore/src/redux/categories';

const initialState = [];

export const checkCategoriesStatus = () => {
    return {
        type: CHECK_STATUS,
    }
}
export default categoryReducer = (state=initialState, action) => {
    switch(action.type) {
        case CHECK_STATUS:
            return 'Under construction';
        default:
            return state;
    }
}

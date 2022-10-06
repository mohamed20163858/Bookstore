import { bookReducer } from "./books/books";
import { categoryReducer} from "./categories/categories";
import {combineReducers} from "redux";
import {configureStore} from '@reduxjs/toolkit';
const rootReducer = combineReducers(
    {
        book: bookReducer,
        categor: categoryReducer,
    }
);
const store = configureStore({reducer: rootReducer});

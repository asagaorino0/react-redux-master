import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todoReducer from '../features/counter/todoSlice';
import fetchReducer from '../features/fetch/fetchSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    fetch: fetchReducer,
  },
});
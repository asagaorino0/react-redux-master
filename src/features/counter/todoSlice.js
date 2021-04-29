import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  todo: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add_todo: (state, action) => {
      const event = action.payload
      console.log(event);
      state.value.push({ ...event })
    },
    del_todo: (state, action) => {
      const del = action.payload
      console.log(del)
      state.value = ({ ...del })
    },
    all_delete: (state) => {
      state.value = [];
    },
  }
});

export const { add_todo, del_todo, all_delete } = todoSlice.actions;

export const selectTodo = (state) => state.todo.value;

export default todoSlice.reducer;
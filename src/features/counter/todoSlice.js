import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // value: [],
  value: [
    {
      id: 1,
      todo: "ごはん",
      complete: false,
      auth: false,
    },
    {
      id: 2,
      todo: "おやつ",
      complete: false,
      auth: false,
    },
    {
      id: 3,
      todo: "さんぽ",
      complete: false,
      auth: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add_todo: (state, action) => {
      const event = action.payload
      state.value.push({ ...event })
    },
    del_todo: (state, action) => {
      const del = action.payload
      const todos = del.todos.filter(todos => {
        return todos.todo !== del.todo;
      });
      state.value = todos
    },
    DONE_LIST: (state, action) => {
      const done = action.payload
      const todos = done.todos.map(todos => {
        if (todos.id === done.id)
          return {
            id: todos.id,
            todo: todos.todo,
            complete: true,
            auth: todos.auth,
          }
        else {
          return {
            id: todos.id,
            todo: todos.todo,
            complete: todos.complete,
            auth: todos.auth,
          }
        }
      })
      state.value = todos
    },
    check_list: (state, action) => {
      const check = action.payload
      const todos = check.todos.map(todos => {
        if (todos.id === check.id)
          return {
            id: todos.id,
            todo: todos.todo,
            complete: todos.complete,
            auth: true,
          }
        else {
          return {
            id: todos.id,
            todo: todos.todo,
            complete: todos.complete,
            auth: todos.auth,
          }
        }
      })
      state.value = todos
    },
    all_delete: (state) => {
      state.value = [];
    },
  }
});

export const { add_todo, del_todo, all_delete, DONE_LIST, check_list } = todoSlice.actions;

export const selectTodo = (state) => state.todo.value;

export default todoSlice.reducer;
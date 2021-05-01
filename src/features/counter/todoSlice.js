import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // value: [],
  value: [
    {
      id: 1,
      todo: "AAAAAA",
      complete: false,
      auth: false,
    },
    {
      id: 2,
      todo: "BBBBBBB",
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
      console.log(event.id);//確認用
      state.value.push({ ...event })
    },
    del_todo: (state, action) => {
      const del = action.payload
      console.log('del.todo', del.todo)//確認用
      console.log('?', del)//確認用
      const todos = del.todos.filter(todos => {
        return todos.todo !== del.todo;
      });
      state.value = todos
      console.log('statevalue', state.value)//確認用
    },
    DONE_LIST: (state, action) => {
      const done = action.payload
      console.log('done', done, done.id)
      const todos = done.todos.map(todos => {
        console.log('todoid', todos.id)
        if (todos.id === done.id)
          return {
            id: todos.id,
            todo: todos.todo,
            complete: true,
          }
        else {
          return {
            id: todos.id,
            todo: todos.todo,
            complete: todos.complete,
          }
        }
      })
      state.value = todos
      console.log('statevalue', state.value)//確認用
    },
    check_list: (state, action) => {
      const check = action.payload
      console.log('check', check, check.id)
      const todos = check.todos.map(todos => {
        console.log('todoid', todos.id)
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
      console.log('statevalue', state.value)//確認用
    },
    all_delete: (state) => {
      state.value = [];
      console.log('statevalue', state.value)
    },
  }
});

export const { add_todo, del_todo, all_delete, DONE_LIST, check_list } = todoSlice.actions;

export const selectTodo = (state) => state.todo.value;

export default todoSlice.reducer;
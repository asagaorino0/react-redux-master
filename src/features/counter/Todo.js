import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodo, add_todo, all_delete, del_todo, DONE_LIST, check_list } from './todoSlice';
import Checkbox from '@material-ui/core/Checkbox';
import styles from './Counter.module.css';
// import { Button } from 'react-bootstrap'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
export function Todo() {
  const todos = useSelector(selectTodo);
  const dispatch = useDispatch();
  const [event, setEvent] = useState('');
  const [complete, setComplete] = useState(false);
  const [del, setDel] = useState('');
  const [auth, setAuth] = React.useState(false);
  const addClick = () => {
    dispatch(add_todo({ id: todos.length + 1, todo: event, complete, auth }))
  }
  const allDelete = () => {
    dispatch(all_delete());
  };
  const delClick = (todo) => {
    dispatch(del_todo({ todos, todo }))
    // dispatch(del_todo({ todos }))---これは機能しなかった
    console.log(del)
  };
  const done = (id) => {
    dispatch(DONE_LIST({ todos, id }))
  };
  const check = (id) => {
    dispatch(check_list({ todos, id, auth }))
  };

  return (
    <div>
      <span className={styles.value}>Todo List</span>
      <br />
      <input type="text" onChange={e => setEvent(e.target.value)} />
      <button
        aria-label="add_todo"
        onClick={addClick}
      >
        add_todo
        </button>
      <button
        aria-label="all_delete"
        onClick={allDelete}
      >
        all_delete
        </button>
      <ul>
        {
          todos.map(item => {
            return (
              <div key={item.id} >
                <Checkbox
                  onChange={() => check(item.id)}
                  color="primary"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                {/* {item.id}: */}
                {item.todo}

                {item.auth &&
                  <IconButton aria-label="delete" >
                    <DeleteIcon onClick={() => delClick(item.todo)} />
                  </IconButton>
                }





              </div>
            )
          })
        }
        <br />
        <br />
        ---違う仕組みの実装---
                {
          todos
            .filter((todo) => todo.complete === false)
            .map(item => {
              return (
                <div key={item.id}>{item.id}:{item.todo}
                  <button
                    className={styles.button}
                    aria-label="Decrement value" onClick={() => done(item.id)}>-</button>
                </div>
              )
            })
        }
      </ul>
    </div >
  );
}
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodo, add_todo, all_delete, del_todo, DONE_LIST, check_list } from './todoSlice';
// import Checkbox from '@material-ui/core/Checkbox';
import styles from './Counter.module.css';
// import { Button } from 'react-bootstrap'
// import DeleteIcon from '@material-ui/icons/Delete';
// import IconButton from '@material-ui/core/IconButton';
export function Todo() {
  const todos = useSelector(selectTodo);
  const dispatch = useDispatch();
  const [event, setEvent] = useState('');
  const [naiyou, setNaiyou] = useState('');
  const [limit, setLimit] = useState('');
  const [complete] = useState(false);
  const [auth] = React.useState(false);
  const addClick = () => {
    const add =
      todos
        .map(todos => {
          return (
            todos.id
          )
        })
    const max = Math.max(...add)
    if ((add.includes(todos.length + 1)) === true)
      dispatch(add_todo({
        id: max + 1, todo: event, naiyou, limit, complete, auth
      }))
    else
      dispatch(add_todo({
        id: todos.length + 1, todo: event, naiyou, limit, complete, auth
      }))
    setEvent("")
    setNaiyou("")
    setLimit("")
  };
  const allDelete = () => {
    dispatch(all_delete());
  };
  const delClick = (todo) => {
    dispatch(del_todo({ todos, todo }))
    // dispatch(del_todo({ todos }))---これは機能しなかった
  };
  const done = (id, complete) => {
    dispatch(DONE_LIST({ todos, id, naiyou }))
  };
  const check = (id) => {
    dispatch(check_list({ todos, id, naiyou, auth }))
  };

  return (
    <div>
      <div>
        <span className={styles.value}>List</span>
        <br />
        <label > 項目 </label>
        <input
          type="text"
          name="event"
          value=""
          autoFocus={true}
          onChange={e => setEvent(e.target.value)}
          value={event}
        />
        <br />
        <label > 内容 </label>
        <input
          type="text"
          name="naiyou"
          value=""
          autoFocus={true}
          onChange={e => setNaiyou(e.target.value)}
          value={naiyou}
        />
        {/* <label >limit　: </label> */}
        {/* <input
          type="date"
          name="limitt"
          // label="event"
          // autoFocus={true}
          onChange={e => setLimit(e.target.value)}
          value={limit}
        /> */}
      </div>
      <button
        aria-label="input"
        onClick={addClick}
      >
        input
        </button>
      {/* <button
        aria-label="all_delete"
        onClick={allDelete}
      >
        all_delete
        </button> */}
      <ul>
        {
          todos.map(item => {
            return (
              <div key={item.id} >
                {/* <Checkbox
                  onChange={() => check(item.id)}
                  color="primary"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                /> */}
                <input type="checkbox"
                  // id={data.id}
                  onChange={() => check(item.id)}
                />
                {/* {item.id}: */}
                {item.todo}
                :{item.naiyou}
                {item.auth &&
                  <button
                    className={styles.button}
                    aria-label="Decrement value" onClick={() => delClick(item.todo)} >-</button>
                  // <IconButton aria-label="delete" >
                  //   <DeleteIcon onClick={() => delClick(item.todo)} />
                  // </IconButton>
                }
              </div>
            )
          })
        }

        {/*   {
          todos
            .filter((todo) => todo.complete === false)
            .map(item => {
              return (
                <div key={item.id}>{item.id}:{item.todo}
                  <button
                    className={styles.button}
                    aria-label="Decrement value" onClick={() => done(item.id, item.complete)}>-</button>
                </div>
              )
            })
        } */}
      </ul>
    </div >
  );
}
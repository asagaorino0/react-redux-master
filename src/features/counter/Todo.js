import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodo, add_todo, all_delete, del_todo } from './todoSlice';
import Checkbox from '@material-ui/core/Checkbox';
// import FormGroup from '@material-ui/core/FormGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import styles from './Counter.module.css';
import { bindActionCreators } from '@reduxjs/toolkit';

export function Todo() {
  const todos = useSelector(selectTodo);
  const dispatch = useDispatch();
  const [event, setEvent] = useState('');
  // const [checked, setChecked] = React.useState(true);
  const [auth, setAuth] = React.useState(true);
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const addClick = () => {
    dispatch(add_todo({ id: todos.length + 1, todo: event }))
  }
  const allDelete = () => {
    dispatch(all_delete());
  };

  const delClick = () => {
    const newdata = todos.filter(item => {
      return item.id !== 2;
    });
    dispatch(del_todo({ newdata }))
    console.log(newdata);
    // return { newdata };
  };
  return (
    <div>
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
      {/* <button
        aria-label="all_delete"
        onClick={() => dispatch(all_delete())}
      >
        all_delete
        </button> */}
      <ul>
        {
          todos.map(item => {


            // console.log(item)
            return (
              <div key={item.id}>
                <Checkbox
                  onChange={handleChange}
                  color="primary"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                {item.id}: {item.todo}
                <button
                  className={styles.button}
                  aria-label="Decrement value" onClick={delClick}>
                  -
                </button>
              </div>
            )

          })


        }
      </ul>
    </div >
  );
}
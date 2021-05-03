import React from 'react';
import logo from './logo.svg';
import { Todo } from './features/counter/Todo';
import { Fetch } from './features/fetch/fetch';
import { GetTodo } from './features/fetch/getTodo';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Todo />
        <Fetch />
        <GetTodo />
        {/* <Counter /> */}
      </header>
    </div>
  );
}

export default App;

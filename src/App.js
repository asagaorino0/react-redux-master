import React from 'react';
import { Todo } from './features/counter/Todo';
// import { Fetch } from './features/fetch/fetch';
// import { GetTodo } from './features/fetch/getTodo';
// import { Counter } from './features/counter/Counter';
import './App.css';
// import Header from './components/Header'
import PageA from './pages/PageA'
// import PageB from './pages/PageB'
// import PageC from './pages/PageC'
// import { Login } from './pages/Login';
import { BrowserRouter as Router, MemoryRouter, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <MemoryRouter>
        <Router>
          <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <Todo />
            <PageA />
            {/* <Fetch />
        <GetTodo /> */}
            {/* <Counter /> */}
          </header>
          <Switch>
            {/* <Route exact path='/' component={Login} /> */}
            {/* <Route exact path='/PageA' component={PageA} />
            <Route exact path='/PageB' component={PageB} />
            <Route exact path='/PageC' component={PageC} /> */}
            {/* <Route exact path='/Header/:nameH' component={Header} /> */}
          </Switch>
        </Router>
      </MemoryRouter>
    </div >
  );
}

export default App;

import React from 'react';
import TodoTitle from './TodoTitle';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <TodoTitle />
      </header>
      <main>
          <TodoForm />
          <TodoList />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;

import React from 'react';
import TodoList from './components/TodoList';
import TodoContext from './contexts/TodoContext'
import AddTodo from './components/AddTodo';

const App = () => {
  return (
    <TodoContext>
      <div className="uk-container">
        <TodoList></TodoList>
        <hr />
        <AddTodo></AddTodo>
      </div>
    </TodoContext>
  );
}

export default App;

import React from 'react';
import TodoItem from './TodoItem';
import '../styles/TodoList.css';

const TodoList = ({ todos, setTodos }) => {
  return (
    <>
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
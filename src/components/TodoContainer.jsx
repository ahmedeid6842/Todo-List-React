import React, { useState, useEffect } from "react";
import "../styles/TodoContainer.css";

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    saveLocalTodos();
  });

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (!localStorage.getItem("todos")) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      const localTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodos);
    }
  };
  return (
    <div className="todo-container">
      <h1>setUp localStorage</h1>
    </div>
  );
};

export default TodoContainer;

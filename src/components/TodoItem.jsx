import React, { useState } from "react";
import "../styles/TodoItem.css";
import trashIcon from "../images/icons8-trash.svg";

const TodoItem = ({ todo, todos, setTodos }) => {
  const [isRemoved, setIsRemoved] = useState(false);

  const deleteHandler = () => {
    setIsRemoved(true);
    setTimeout(() => {
      setTodos(todos.filter((task) => task.id !== todo.id));
    }, 800);
  };

  const completeHandler = () => {
    setTodos(
      todos.map((task) => {
        if (task.id === todo.id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      })
    );
  };

  return (
    <>
      <li className={`todo ${isRemoved ? "fall" : ""}`}>
        <div className="todo__info">
          <label
            className={`todo__checkbox ${todo.completed ? "completed" : ""}`}
          >
            {todo.text}

            <input type="checkbox" onClick={completeHandler} />
          </label>
        </div>

        <div className="todo__options">
          <img
            src={trashIcon}
            alt="trash-icon"
            className="trash-icon"
            onClick={deleteHandler}
          />
        </div>
      </li>
    </>
  );
};

export default TodoItem;

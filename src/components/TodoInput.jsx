import React,{useState} from "react";
import { v4 as uuidv4 } from "uuid";
import '../styles/TodoInput.css';

function TodoInput({todos, setTodos }) {
  const [inputText, setInputText] = useState('');
    
  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!inputText) {
      return;
    }

    const newTodo = {
      id: uuidv4(),
      completed: false,
      text: inputText,
    };

    setTodos([...todos, newTodo]);
    setInputText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Please add your task"
        value={inputText}
        onChange={handleInputChange}
        className="text-input"
      />
    </form>
  );
}

export default TodoInput;
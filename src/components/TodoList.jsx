import React, { useState } from "react";
import TodoItem from "./TodoItem";

const tododata = [
  { id: 1, title: "Learn React" },
  { id: 2, title: "Learn Node" },
  { id: 3, title: "Learn ES6" },
  { id: 4, title: "Choose UI Framework" },
  { id: 5, title: "Submit Prototype" },
];

const TodoList = (props) => {
  const [todos, setTodos] = useState(tododata);
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo !== "") {
      setTodos([
        ...todos,
        { id: Math.floor(Math.random() * 1000), title: newTodo },
      ]);
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <div className="todolist">
      <h2>{props.title}</h2>
      <p>{props.description}</p>

      {todos.map((item) => {
        return <TodoItem key={item.id} item={item} onDelete={handleDelete} />;
      })}

      <br />

      <form onSubmit={handleSubmit}>
        <label>
          New ToDo:&nbsp;
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
        </label>
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default TodoList;

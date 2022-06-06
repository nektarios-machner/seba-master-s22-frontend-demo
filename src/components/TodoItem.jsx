import React, { useState } from "react";

const TodoItem = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="card">
      <h3 className={isChecked ? "completed" : null}>{props.item.title}</h3>
      <label>Completed</label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      ></input>
      <br />
      <br />
      <button onClick={() => props.onDelete(props.item.id)}>Remove</button>
    </div>
  );
};

export default TodoItem;

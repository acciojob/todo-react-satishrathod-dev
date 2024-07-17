import React, { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [Task, setTasks] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const addTask = (e) => {
    setTasks([...Task, input]);
    setInput("");
    e.preventDefault();
  };

  const deleteTask = (index) => {
    const newTasks = Task.filter((Task, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <h3>To-Do List</h3>
      <form onSubmit={addTask}>
        <input type="text" value={input} onChange={handleInput} />
        <button onClick={addTask}>Add Todo</button>
      </form>
      <div>
        <ul style={{}}>
          {Task.map((item, index) => {
            return (
              <li key={index}>
                {" "}
                {item} <button onClick={() => deleteTask(index)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Todo;

import React, { useState } from "react";

function App() {
  const [inputT, setIT] = useState("");
  const [items, setItems] = useState([]);
  function handleChange(event) {
    const newValue = event.target.value;
    setIT(newValue);
    // inputT = yo
  }
  function addTasksToArray() {
    setItems((prevTasks) => {
      return [...prevTasks, inputT];
    });
    setIT("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputT} />
        <button onClick={addTasksToArray}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => {
            return <li>{todoItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;

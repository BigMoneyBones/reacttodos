import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ToDoComponent />
      </header>
    </div>
  );
}

const ToDoComponent = () => {
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const [importance, setImportance] = useState("low");

  const [toDoList, setToDoList] = useState([]);

  return (
    <div>
      <div>
        Title &nbsp;
        <input
          type="text"
          value={title}
          onChange={(event) => {
            const newTitle = event.target.value;
            setTitle(newTitle);
          }}
        ></input>
      </div>
      <hr />
      <div>
        Description &nbsp;
        <input
          type="text"
          value={description}
          onChange={(event) => {
            const newDescription = event.target.value;
            setDescription(newDescription);
          }}
        ></input>
      </div>
      <hr />
      <select
        onChange={(event) => {
          const newImportance = event.target.value;
          setImportance(newImportance);
        }}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <span>
        &nbsp;
        <button
          type="submit"
          onClick={(event) => {
            const newToDoListItem = { title, description, importance };
            const updatedToDoList = [...toDoList];
            updatedToDoList.push(newToDoListItem);
            setToDoList(updatedToDoList);
            console.log(updatedToDoList);
            setTitle("");
            setDescription("");
            setImportance("low");
          }}
        >
          Submit
        </button>
        <div>
          {toDoList.map((element, index) => {
            return (
              <div key={index}>
                <p>Task: {element.title}</p>
                <p>Description: {element.description}</p>
                <p>Importance: {element.importance}</p>
                <hr />
              </div>
            );
          })}
        </div>
      </span>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [importance, setImportance] = useState("Low");
  const [toDoList, setToDoList] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ToDoComponent
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          importance={importance}
          setImportance={setImportance}
          toDoList={toDoList}
          setToDoList={setToDoList}
        />
      </header>
    </div>
  );
}

const importanceAttributes = [
  {
    level: "Low",
    color: "yellow",
  },
  {
    level: "Medium",
    color: "orange",
  },
  {
    level: "High",
    color: "red",
  },
  {
    level: "Critcal",
    color: "purple",
  },
];

const ToDo = (props) => {
  return (
    <li style={{ color: props.color }}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <h3>{props.importance}</h3>
      <hr />
    </li>
  );
};

const ImportanceLevelSelector = (props) => {
  return <option value={props.level}>{props.level}</option>;
};

const ToDoComponent = (props) => {
  return (
    <div>
      <div>
        Title &nbsp;
        <input
          type="text"
          value={props.title}
          onChange={(event) => {
            const newTitle = event.target.value;
            props.setTitle(newTitle);
          }}
        ></input>
      </div>
      <hr />
      <div>
        Description &nbsp;
        <input
          type="text"
          value={props.description}
          onChange={(event) => {
            const newDescription = event.target.value;
            props.setDescription(newDescription);
          }}
        ></input>
      </div>
      <hr />
      <select
        onChange={(event) => {
          const newImportance = event.target.value;
          props.setImportance(newImportance);
        }}
      >
        {importanceAttributes.map((element, index) => {
          return (
            <ImportanceLevelSelector
              key={index}
              level={element.level}
            ></ImportanceLevelSelector>
          );
        })}
      </select>
      <span>
        &nbsp;
        <button
          type="submit"
          onClick={
            ("click",
            () => {
              const updatedToDoList = [...props.toDoList];
              updatedToDoList.push({
                title: props.title,
                description: props.description,
                importance: props.importance,
              });
              props.setToDoList(updatedToDoList);
              // console.log(updatedToDoList);
              props.setTitle("");
              props.setDescription("");
              props.setImportance(importanceAttributes[0].level);
            })
          }
        >
          Submit
        </button>
        <div>
          {props.toDoList.map((todo, index) => {
            const importanceColor = importanceAttributes.find((option) => {
              return option.level === todo.importance;
            }).color;
            return (
              <ToDo
                title={todo.title}
                description={todo.description}
                importance={todo.importance}
                color={importanceColor}
                key={index}
              ></ToDo>
            );
          })}
        </div>
      </span>
    </div>
  );
};

export default App;

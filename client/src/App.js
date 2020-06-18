import React from 'react';
import "./css/style.css";
import AppNavbar from "./components/AppNavbar";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <ToDoList />
    </div>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Hangman from "./Hangman";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Hangman />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

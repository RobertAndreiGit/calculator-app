import React from "react";
import ReactDOM from "react-dom";
import Calculator from "/components/Calculator.js";

import "./styles.css";

function App() {
  return (
    <div id="app-container">
      <Calculator />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

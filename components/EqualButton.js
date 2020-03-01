import React from "react";
import "../src/styles.css";

export default function EqualButton({ fun }) {
  return (
    <div className="button-container">
      <button onClick={fun} className="operation-button">
        =
      </button>
    </div>
  );
}

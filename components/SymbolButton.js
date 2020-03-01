import React from "react";
import "../src/styles.css";

export default function SymbolButton({ add, sign }) {
  return (
    <div className="button-container">
      <button onClick={() => add(sign)} className="operation-button">
        {sign}
      </button>
    </div>
  );
}

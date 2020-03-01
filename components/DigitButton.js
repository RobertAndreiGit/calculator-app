import React from "react";
import "../src/styles.css";

export default function DigitButton({ digit, addDigit }) {
  return (
    <div className="button-container">
      <button onClick={() => addDigit(digit)}>{digit}</button>
    </div>
  );
}

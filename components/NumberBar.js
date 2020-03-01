import React from "react";
import "../src/styles.css";

export default function NumberBar({ nr }) {
  return (
    <div id="number-area">
      <p> {nr} </p>
    </div>
  );
}

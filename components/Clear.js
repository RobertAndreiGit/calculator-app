import React from "react";

export default function Clear({ func }) {
  return (
    <div className="button-container" id="clear-button">
      <button onClick={func}>C</button>
    </div>
  );
}

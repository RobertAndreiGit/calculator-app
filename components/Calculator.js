import React, { useState } from "react";
import NumberBar from "/components/NumberBar.js";
import SymbolButton from "/components/SymbolButton.js";
import DigitButton from "/components/DigitButton.js";
import EqualButton from "/components/EqualButton.js";
import Clear from "/components/Clear.js";

import "../src/styles.css";

export default function Calculator() {
  const [num, setNum] = useState("0");

  function addSymbol(symbol) {
    let x = num;
    let nums = num.split(" ");
    if (nums.length >= 3) {
      x = getSum();
    }
    if (!isNaN(num.split(" ").slice(-1)[0])) setNum(x + " " + symbol);
    else {
      let tmp = x.split(" ");
      tmp[tmp.length - 1] = symbol;
      setNum(tmp.join(" "));
    }
  }

  function addNumber(digit) {
    if (!isNaN(num.split(" ").slice(-1)[0]) && num !== "0") {
      setNum(num + digit);
    } else if (num === "0") {
      setNum(digit);
    } else {
      setNum(num + " " + digit);
    }
  }

  function clear() {
    setNum("0");
  }

  function getSum() {
    let nums = num.split(" ");
    if (nums.length === 3) {
      let x;
      switch (nums[1]) {
        case "+":
          x = (Number(nums[0], 10) + Number(nums[2], 10)).toString();
          setNum(x);
          return x;
        case "-":
          x = (Number(nums[0], 10) - Number(nums[2], 10)).toString();
          setNum(x);
          return x;
        case "×":
          x = (Number(nums[0], 10) * Number(nums[2], 10)).toString();
          setNum(x);
          return x;
        case "÷":
          x = (Number(nums[0], 10) / Number(nums[2], 10)).toString();
          setNum(x);
          return x;
        default:
          break;
      }
    }
  }

  return (
    <div className="App">
      <div className="line main-area">
        <NumberBar nr={num} />
      </div>
      <div className="line">
        <EqualButton fun={getSum} />
        <DigitButton addDigit={addNumber} digit="0" />
        <Clear func={clear} />
        <SymbolButton sign="+" add={addSymbol} />
      </div>
      <div className="line">
        <DigitButton addDigit={addNumber} digit="7" />
        <DigitButton addDigit={addNumber} digit="8" />
        <DigitButton addDigit={addNumber} digit="9" />
        <SymbolButton sign="-" add={addSymbol} />
      </div>
      <div className="line">
        <DigitButton addDigit={addNumber} digit="4" />
        <DigitButton addDigit={addNumber} digit="5" />
        <DigitButton addDigit={addNumber} digit="6" />
        <SymbolButton sign="×" add={addSymbol} />
      </div>
      <div className="line">
        <DigitButton addDigit={addNumber} digit="1" />
        <DigitButton addDigit={addNumber} digit="2" />
        <DigitButton addDigit={addNumber} digit="3" />

        <SymbolButton sign="÷" add={addSymbol} />
      </div>
    </div>
  );
}

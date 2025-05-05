import React from "react";

export default function App() {
  return (
    <div>
      <BillInput />
      <Service>How did you like the service?</Service>
      <Service>How did your friend like the service?</Service>
      <DisplayBillTotal />
      <Reset />
    </div>
  );
}

function BillInput() {
  return (
    <div>
      How much was the bill?<input type="text"></input>
    </div>
  );
}

function Service({ children }) {
  return (
    <div>
      {children}
      <select>
        <option>Dissatisfied (0%)</option>
        <option>It was okay (5%)</option>
        <option>It was good (10%)</option>
        <option>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function DisplayBillTotal() {
  return (
    <p>
      <h3>You pay filler (filler).</h3>
    </p>
  );
}

function Reset() {
  return (
    <div>
      <button>Reset</button>
    </div>
  );
}

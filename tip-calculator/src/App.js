import React, { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [myTip, setMyTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  function reset() {
    setBill(0);
    setMyTip(0);
    setFriendTip(0);
  }

  return (
    <div>
      <BillInput setBill={setBill} bill={bill} />
      <Service tip={myTip} setTip={setMyTip}>
        How did you like the service?
      </Service>
      <Service tip={friendTip} setTip={setFriendTip}>
        How did your friend like the service?
      </Service>
      <DisplayBillTotal bill={bill} myTip={myTip} friendTip={friendTip} />
      <Reset reset={reset} />
    </div>
  );
}

function BillInput({ bill, setBill }) {
  return (
    <div>
      How much was the bill?
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      ></input>
    </div>
  );
}

function Service({ tip, setTip, children }) {
  return (
    <div>
      {children}
      <select value={tip} onChange={(e) => setTip(Number(e.target.value))}>
        <option value=".0">Dissatisfied (0%)</option>
        <option value=".05">It was okay (5%)</option>
        <option value=".10">It was good (10%)</option>
        <option value=".20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function DisplayBillTotal({ bill, myTip, friendTip }) {
  const myTipCalculated = Number(bill) * Number(myTip);
  const friendTipCalculated = Number(bill) * Number(friendTip);
  const totalTip = (myTipCalculated + friendTipCalculated) / 2;

  return (
    <p>
      <h3>
        You pay ${bill + totalTip} + (${bill} + ${totalTip}).
      </h3>
    </p>
  );
}

function Reset({ reset }) {
  return (
    <div>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

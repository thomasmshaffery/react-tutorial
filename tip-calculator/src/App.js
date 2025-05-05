import React, { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(null);
  const [myTip, setMyTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

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
      <Reset />
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
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function DisplayBillTotal({ bill, myTip, friendTip }) {
  return (
    <p>
      <h3>
        You pay {bill} + {myTip} + {friendTip}.
      </h3>
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

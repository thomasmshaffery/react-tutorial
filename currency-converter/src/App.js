// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState("100");
  const [display, setDisplay] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();

      async function getConversion() {
        try {
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`,
            { signal: controller.signal }
          );

          if (!res.ok) throw new Error("Something went wrong.");

          const data = await res.json();
          if (data.Response === "False") throw new Error("API Fail.");
          setDisplay(data.rates[toCurrency].toFixed(2));
        } catch (err) {
          console.log(err.message);
        }
      }

      getConversion();
      return function () {
        controller.abort();
      };
    },
    [amount, fromCurrency, toCurrency]
  );

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{display}</p>
    </div>
  );
}

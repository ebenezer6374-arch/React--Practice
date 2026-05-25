import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const isEven = count % 2 === 0;

  return (
    <main>
      <h1>Count: {count}</h1>

      {isEven && <h2>Even Number</h2>}

      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment
      </button>
    </main>
  );
}
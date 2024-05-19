import { useState } from "react";
import React from "react";
const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <section className="Omen">
      <button onClick={decrement} className="button1">
        -
      </button>
      <span className="Omen">{count}</span>
      <button onClick={increment} className="button2">
        +
      </button>
    </section>
  );
};

export default App;

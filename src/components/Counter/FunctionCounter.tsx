import { useState } from 'react';

export default function FunctionCounter() {
  const [counter, setCounter] = useState(42);

  function handleIncrement() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  return (
    <div>
      <h2>Counter</h2>
      <h3>{counter}</h3>
      <button onClick={handleIncrement}>Click</button>
    </div>
  );
}

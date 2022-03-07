import { useMemo, useState } from 'react';

export default function FunctionExpensiveCalc() {
  const [number, setNumber] = useState(1);
  const [counter, setCounter] = useState(0);
  const [expensiveFuncCounter, setExpensiveFuncCounter] = useState(0);

  const multipliedNumber = useMemo(() => multiplyByTen(number), [number]);

  function multiplyByTen(number: number) {
    setExpensiveFuncCounter((prevCounter) => prevCounter + 1);
    return number * 10;
  }

  function handleNumberChange(event: any) {
    setNumber(Number(event.target.value));
  }

  function handleReRender() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  return (
    <>
      <h2>Function ExpensiveCalc</h2>
      <div>
        <input type="number" value={number} onChange={handleNumberChange} />{' '}
        times 10 is {multipliedNumber}
        <button onClick={handleReRender}>Re-render</button>
        <p>Re-rendered {counter} times</p>
        <p>Expensive function called {expensiveFuncCounter} times</p>
      </div>
    </>
  );
}

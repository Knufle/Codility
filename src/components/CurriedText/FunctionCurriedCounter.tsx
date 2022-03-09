import { ChangeEvent, useState } from 'react';

export default function FunctionCurriedText() {
  const [text, setText] = useState('number is');
  const [number, setNumber] = useState(5);

  function handleSetTextAndNumber(additionalValue = 0) {
    return (e: ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
      setNumber(additionalValue);
    };
  }

  function handleSetNumber(e: ChangeEvent<HTMLInputElement>) {
    setNumber(Number(e.target.value));
  }

  return (
    <div>
      <h2>Curried Text</h2>
      <h3>
        {text} {number}
      </h3>
      <label>text</label>
      <input
        type="text"
        placeholder="number is"
        onChange={handleSetTextAndNumber(number)}
      />
      <br />
      <label>number</label>
      <input type="number" placeholder="5" onChange={handleSetNumber} />
    </div>
  );
}

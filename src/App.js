import './App.css';

import RomanNumerals from './services/RomanNumerals'
import {useState} from "react";

function App() {
  const defaultDecimal = 1000;
  const defaultRoman = RomanNumerals.toRoman(defaultDecimal)
  const [romanNumber, setRomanNumber] = useState(defaultRoman);
  const [decimalNumber, setDecimalNumber] = useState(defaultDecimal);

  const onRomanNumberChange = event => {
    const romanNumber = event.target.value.toUpperCase();
    setRomanNumber(romanNumber);

  };

  const onDecimalNumberChange = event => {
    const decimalNumber = event.target.value;
    setDecimalNumber(decimalNumber);
  };
  return (
    <div className="App">
      <input
          type="text"
          placeholder="Enter roman number"
          value={romanNumber}
          onChange={onRomanNumberChange}
          required
      />
      <input
          type="number"
          placeholder="Enter decimal number"
          value={decimalNumber}
          onChange={onDecimalNumberChange}
          pattern="\d*"
          required
      />
    </div>
  );
}

export default App;

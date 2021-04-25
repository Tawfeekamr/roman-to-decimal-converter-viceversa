import './App.css';

import RomanNumerals from './services/RomanNumerals'
import {useState} from "react";

function App() {


    const defaultDecimal = 111;
    const defaultRoman = RomanNumerals.toRoman(defaultDecimal);
    const [romanNumber, setRomanNumber] = useState(defaultRoman);
    const [romanNumberValid, setRomanNumberValid] = useState(RomanNumerals.isRomanNumberValid(defaultRoman));
    const [decimalNumber, setDecimalNumber] = useState(defaultDecimal);
    const [decimalNumberValid, setDecimalNumberValid] = useState(RomanNumerals.isRomanNumberValid(defaultRoman));

    const onRomanNumberHandler = e => {
        const romanNumber = e.target.value.toUpperCase();
        setRomanNumber(romanNumber);
        setRomanNumberValid(RomanNumerals.isRomanNumberValid(romanNumber));
        if (RomanNumerals.isRomanNumberValid(romanNumber)) {
            const decimal = RomanNumerals.fromRoman(romanNumber);
            setDecimalNumber(decimal);
            setDecimalNumberValid(true);
        } else {
            setDecimalNumber("");
        }
    };

    const onDecimalNumberHandler = e => {
        const decimalNumber = e.target.value;
        if (RomanNumerals.isDecimalNumberValid(decimalNumber)) {
            setDecimalNumberValid(true);
            setRomanNumberValid(true);
            setRomanNumber(RomanNumerals.toRoman(decimalNumber));
        } else {
            setDecimalNumberValid(false);
            setRomanNumber("");
        }
        setDecimalNumber(decimalNumber);
    };
  return (
    <div className="App">
        <label htmlFor=""> Roman </label>
      <input
          type="text"
          className={romanNumberValid ? 'valid' : 'not-valid'}
          placeholder="Enter roman number"
          value={romanNumber}
          onChange={onRomanNumberHandler}
          required
      />
      <p
          className={romanNumberValid ? 'd-none' : 'not-valid-text'}
      >
          Not valid Roman number, Please enter correct Roman character not exceed MMM
      </p>
      <br/>
        <label htmlFor=""> Number </label>
        <input
          type="number"
          className={decimalNumberValid ? 'valid' : 'not-valid'}
          placeholder="Enter decimal number"
          value={decimalNumber}
          onChange={onDecimalNumberHandler}
          pattern="\d*"
          required
      />
        <p
            className={decimalNumberValid ? 'd-none' : 'not-valid-text'}
        >
            Not valid number, please make sure you're writing numbers not exceed 2000
        </p>
    </div>
  );
}

export default App;

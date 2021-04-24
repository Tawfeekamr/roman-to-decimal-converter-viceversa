import romanLetters from '../helpers';

let RomanNumerals = {};

export default RomanNumerals = {

    // Form Decimal to Roman
    toRoman : (decimalValue) => {
        let romanNumber = "";
        for (let i in romanLetters) {
            while (decimalValue >= romanLetters[i]) {
                romanNumber += i;
                decimalValue -= romanLetters[i];
            }
        }
        return romanNumber;
    },


// Form Roman to Decimal
    fromRoman: (romanNumber) => {
        return this.fromRomanConverter(romanNumber, 0);
    },

    fromRomanConverter: (romanNumber, decimalValue) => {

        for (let key in romanLetters) {
            const value = romanLetters[key];
            if (romanNumber.indexOf(key) === 0) {
                decimalValue = value + this.fromRomanConverter(romanNumber.substr(key.length), decimalValue);
                return decimalValue;
            }
        }
        return decimalValue;
    }

}

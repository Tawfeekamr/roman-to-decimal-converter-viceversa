import romanLetters from '../helpers';

let RomanNumerals = {};

 const MIN_DECIMAL_VALUE = 1;
 const MAX_DECIMAL_VALUE = 2000;

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
    fromRoman: function (romanNumber, decimalValue = 0) {

        for (let key in romanLetters) {
            const value = romanLetters[key];
            if (romanNumber.indexOf(key) === 0) {
                decimalValue = value + this.fromRoman(romanNumber.substr(key.length), decimalValue);
                return decimalValue;
            }
        }
        return decimalValue;
    },

    // Check if the Roman valid
    isRomanNumberValid: function(romanNumber) {
        return /^(?=[MDCLXVI])(M{0,3})(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/.test(
            romanNumber
        );
    },

    // Check if the Number valid
     isDecimalNumberValid: (decimalNumber) => {
        return (
            /^\d+$/.test(decimalNumber) &&
            decimalNumber >= MIN_DECIMAL_VALUE &&
            decimalNumber <= MAX_DECIMAL_VALUE
        );
    }

}

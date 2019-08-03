const validateWithLuhn = digits => {
  let re = /^(4|5)([0-9]{15})$/;
  let sixteenDigits = "n";
  let test = digits.join("").toString();
  digits = digits.map(Number);

  re.test(test) ? (sixteenDigits = "valid") : (sixteenDigits = "invalid");

  let validSixteenDigits = "n";
  let evenIndexDigits = [];
  let oddIndexDigits = [];
  for (i = 1; i <= digits.length; i++) {
    if (i % 2 !== 0) {
      oddIndexDigits.push(digits[i - 1]);
    } else evenIndexDigits.push(digits[i - 1]);
  }

  oddIndexDigits = oddIndexDigits.map(x => x * 2);
  let greaterThanNine = oddIndexDigits.filter(x => x > 9);
  greaterThanNine = greaterThanNine.map(x => x - 9);
  let lessThanNine = oddIndexDigits.filter(x => x < 9);
  let reducer = (prev, current) => prev + current;
  let totalEvenIndexDigits = evenIndexDigits.reduce(reducer);
  let totalOddIndexDigits =
    greaterThanNine.reduce(reducer) + lessThanNine.reduce(reducer);
  let total = totalEvenIndexDigits + totalOddIndexDigits;
  total % 10 === 0
    ? (validSixteenDigits = "valid")
    : (validSixteenDigits = "invalid");
  if (sixteenDigits === "valid" && validSixteenDigits === "valid") {
    return true;
  } else return false;
};

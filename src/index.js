module.exports = function toReadable (number) {
    let result;

    if (isNaN(+number)) {
      return "Please, inter a number";
    }
  
    if (number === 0) {
      result = "zero";
    }
  
    const basic = {
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine",
      10: "ten",
      11: "eleven",
      12: "twelve",
      13: "thirteen",
      14: "fourteen",
      15: "fifteen",
      16: "sixteen",
      17: "seventeen",
      18: "eighteen",
      19: "nineteen"
    };
  
    const enother = {
      0: "ten",
      1: "eleven",
      2: "twelve",
      3: "thirteen",
      4: "fourteen",
      5: "fifteen",
      6: "sixteen",
      7: "seventeen",
      8: "eighteen",
      9: "nineteen"
    };
  
    const dozens = {
      2: "twenty",
      3: "thirty",
      4: "forty",
      5: "fifty",
      6: "sixty",
      7: "seventy",
      8: "eighty",
      9: "ninety"
    };
  
    if (number > 0 && number < 20) {
      result = basic[number];
    }
  
    if (number >= 20 && number < 100) {
      const numberStr = number.toString();
  
      if (+numberStr[1] === 0) {
        result = dozens[+numberStr[0]];
      } else {
        result = `${dozens[numberStr[0]]} ${basic[+numberStr[1]]}`;
      }
    }
  
    if (number >= 100) {
      const numberStr = number.toString();
      const firstIndex = +numberStr[0];
      const middleIndex = +numberStr[1];
      const lastIndex = +numberStr[2];
  
      if (middleIndex === 0) {
        result = `${basic[firstIndex]} hundred`;
        result += ` ${basic[lastIndex] ? basic[lastIndex] : ""}`;
      } else {
        result = `${basic[firstIndex]} hundred`;
        result += ` ${
          dozens[middleIndex] && lastIndex !== 0
            ? dozens[middleIndex]
            : enother[0]
        }`;
        result += ` ${basic[lastIndex] ? basic[lastIndex] : ""}`;
      }
    }
    return result;
}

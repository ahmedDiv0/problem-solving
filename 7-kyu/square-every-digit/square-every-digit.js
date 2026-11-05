function squareDigits(num) {
  let result = "";
  const str = String(num);
​
  for (let i = 0; i < str.length; i++) {
    result += str[i] ** 2;
  }
​
  return Number(result);
}
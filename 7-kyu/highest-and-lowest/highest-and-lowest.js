function highAndLow(numbers) {
  const eachNum = numbers.split(" ");
  const maxNum = Math.max(...eachNum);
  const minNum = Math.min(...eachNum);
  return `${maxNum} ${minNum}`;
}
​
​
function highAndLow(numbers) {
  const nums = numbers.split(" ").map(Number);
  const maxNum = nums.reduce((acc, n) => n > acc ? n : acc);
  const minNum = nums.reduce((acc, n) => n < acc ? n : acc);
  return `${maxNum} ${minNum}`;
}
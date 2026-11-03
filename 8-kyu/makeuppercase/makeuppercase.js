function makeUpperCase(str) {
  // Code here
​
return str.toUpperCase()
}
​
​
​
function makeUpperCase(str) {
  // Code here
​
return str.split("").map(c => c.toUpperCase()).join("")
}
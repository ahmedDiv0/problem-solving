function digitize(n) {
  //code here
  
  return n.toString().split("").reverse().map(stringToNumber => Number(stringToNumber)  )
}
​
​
function digitize(n) {
  //code here
  
  return n.toString().split("").reverse().map(Number) 
}
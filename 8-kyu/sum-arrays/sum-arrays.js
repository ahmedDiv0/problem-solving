function sum (numbers) {
​
  let result = 0 
  
  for( let i = 0 ; i < numbers.length ; i++){
    
    result += numbers[i]
  }
  
return result
}
​
​
function sum (numbers) {
​
return numbers.reduce((acc, n) => acc + n , 0)
}
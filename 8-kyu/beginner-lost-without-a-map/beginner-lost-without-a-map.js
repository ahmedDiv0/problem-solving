function maps(x){
  let result = []
  for(let i =0 ; i < x.length ; i++ ){
    result.push(x[i] * 2 )
  }
  return result
}
​
​
function maps(x){
  return x.map( a => a * 2)
}
​
​
function maps(x) {
  return x.reduce((acc, n) => [...acc, n * 2], []);
}
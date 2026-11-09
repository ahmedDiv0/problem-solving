function filter_list(l) {
  // Return a new array with the strings filtered out
  
  return l.filter( s => typeof s  === "number" )
  
}
​
​
function filter_list(l) {
  // Return a new array with the strings filtered out
  
  return l.filter( s => typeof s  !== "string" )
  
}
​
function filter_list(l) {
  // Return a new array with the strings filtered out
  
  return l.filter( s => typeof s  === "number" )
  
}
​
​
function filter_list(l) {
  // Return a new array with the strings filtered out
  
  let result = []
  
  for( let i = 0 ; i < l.length ; i++) {
    if (typeof l[i] === "number"){
      result.push(l[i])
    }
  }
 
  
  return result
  
}
​
​
​
​
function chopAndProcess(arr) {
  arr.pop();
  return Promise.resolve(arr);
}
 

const arr = ['a', 'b', 'c', 'd', 'e', 'f'];

console.log(arr)
chopAndProcess(arr)
  .then(function(arr) {
    console.log(arr); 
    chopAndProcess(arr)
    return arr;
  })
  .then(function(arr) {
    console.log(arr); 
    chopAndProcess(arr);
    return arr;
  })
  .then(function(arr) {
    console.log(arr); 
    chopAndProcess(arr);
    return arr;
  })
  .then(function(arr) {
    console.log(arr); 
    chopAndProcess(arr);
    return arr;
  })
  .then(function(arr) {
    console.log(arr); 
    chopAndProcess(arr);
    return arr;
  })
  .then(function() {
    console.log("FINISHED!");
  })

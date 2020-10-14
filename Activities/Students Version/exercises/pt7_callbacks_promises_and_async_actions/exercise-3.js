const chopAndProcess = (arr) => Promise.resolve(arr)
 

const arr = ['a', 'b', 'c', 'd', 'e', 'f'];

chopAndProcess(arr)
  .then(function(arr) {
    arr.pop(); console.log(arr); return arr;
  })
  .then(function(arr) {
    arr.pop(); console.log(arr); return arr;
  })
  .then(function(arr) {
    arr.pop(); console.log(arr); return arr;
  })
  .then(function(arr) {
    arr.pop(); console.log(arr); return arr;
  })
  .then(function(arr) {
    arr.pop(); console.log(arr); return arr;
  })
  .then(function() {
    console.log("FINISHED!");
  })

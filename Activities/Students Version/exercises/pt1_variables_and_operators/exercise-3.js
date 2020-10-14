const a = { property: 10000 };
const b = a;

b.property = 500;

console.log("The value of property in a is " + a.property);
console.log("The value of property in b is " + b.property);

// I expect the output of both console logs to be 500 as the value of property 
// has been reassigned on line 4 to 500.
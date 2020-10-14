// Create a map building Functions

// a) Function which builds a square Map and returns it
// example; buildMap(2) would return [['0,0', '1,0'],['0,1', '1,1']]

// Write your function here...


const buildMap = (axis) => {
let sqMap = new Array(axis)
let index = 0
  for (let i = 0; i < axis; i++) {
    sqMap[i] = new Array()
    for (let j = 0; j < axis; j++) {
    sqMap[i].push(`${j},${index}`)
    }
    index++
  }
    return sqMap
}

let squareMap = buildMap(5);
console.log(squareMap);
console.log('\n');

// b) Function to build a rectangular Map and return it

const buildMap2 = (xAxis, yAxis) => {
    let sqMap = new Array(yAxis)
    let index = 0
      for (let i = 0; i < yAxis; i++) {
        sqMap[i] = new Array()
        for (let j = 0; j < xAxis; j++) {
        sqMap[i].push(`${j},${index}`)
        }
        index++
      }
        return sqMap
    }

let recMap = buildMap2(3, 7);
console.log(recMap);
console.log('\n');

// c) Function to output built map nicely into the console

const prettyMap = (map) => console.log(map)

prettyMap(squareMap);
prettyMap(recMap);

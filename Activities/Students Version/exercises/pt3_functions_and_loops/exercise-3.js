// Shuffle the array

let array = []
for (let i = 1; i <= 25; i++) {
  array.push(i);
}
console.log("Standard array: " + array);

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array
}

let shuffledArray = shuffle(array);
console.log("Shuffled array: " + shuffledArray);

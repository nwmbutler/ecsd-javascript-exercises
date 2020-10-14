// Try and Catch

// a)

const f1 = () => {
   let counter = 0;
  try {
    while (counter < 10) {
    console.log("Counter number is: " + counter);
    counter++;
    }
   } catch(e) {
      console.log(e)
    }
  }



// Uncomment the line below to test
 f1();

// b)

const f2 = () => {
  throw new Error("What a dangerous function!");
}

const someFunc = () => {
  try { 
    f2();
  } catch(e) {
    console.log(e)
  }
}

someFunc(f2)
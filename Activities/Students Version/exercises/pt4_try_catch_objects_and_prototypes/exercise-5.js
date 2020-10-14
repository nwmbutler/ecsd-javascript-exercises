function Factory(blueprint) {
  return buildBluePrint(blueprint);
}

const buildBluePrint = (blueprint) => {
  return new blueprint
}

function Car() {
  this.drive = () => {
    console.log("The car drove.");
  }
}

function Ship() {
  this.sail = () => {
    console.log("The boat sailed.");
  }
}

function Plane() {
  this.fly = () => {
    console.log("The plane flew.");
  }
}

// Write code here to test your implementation of the Factory Prototype.
car = Factory(Car)
car.drive()

fighterJet = Factory(Plane)
fighterJet.fly()
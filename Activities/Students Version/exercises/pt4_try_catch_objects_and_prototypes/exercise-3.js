// Shop object

const { profileEnd } = require("console");

const shop = {
  name: "Happy Goods",
  location: "London - Old Street",
  currency: "Sterling (£)",
  inventory: [
    {
      name: "Apple Pie",
      price: 12.56,
      available: true
    },
    {
      name: "Banana Pastry",
      price: 6.25,
      available: true
    },
    {
      name: "Cherry Sundae",
      price: 9.99,
      available: false
    },
    {
      name: "Sharp Soda",
      price: 1.99,
      available: true
    },
    {
      name: "Tuna Sandwich",
      price: 3.29,
      available: false
    }
  ]
}

// a) Cost of Sharp Soda?
console.log("Sharp soda costs: " + shop.inventory[3].price + "\n")

// b) Dynamic Reading

const isAvailable = (inventoryIndex) => {
  return shop.inventory[inventoryIndex].available ? "In stock" : "Out of stock"
}

// Uncomment line below to test
console.log("Cherry Sundae available? ==> " + isAvailable(2) + "\n");

// c) Adding Dynamic Entry

const addItem = (name, price, avail) => {
  shop.inventory.push({ name: name, price: price, available: avail })
}
addItem("cheese", 4.55, true)
// Uncomment and replace argument with one which specifies to your item if necessary
console.log("Is the new item available? ==> " + isAvailable(5) + "\n")

// d) Dynamic Reading +

const search = (query) => {
  shop.inventory.forEach((product) => {
    if(product.name.match(query)) {
      console.log(product.name)
    }
  })
  console.log("\n")
}

// Uncomment line below to test
search("h");

// e) List All

const listAvailableInventory = () => {
  shop.inventory.forEach((product) => {
    if(product.available) {
      console.log(product.name + ": " + product.price)
    }
  })
  console.log("\n")
}
// Uncomment line below to test
listAvailableInventory();


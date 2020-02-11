// Amazon Shopping Cart
const user = {
  name: 'Kim',
  active: true,
  cart: [],
  purchases: [],
  history: []
}

const tax = 0.03

// Adds item to cart
const addItem = function(item) {
  user.cart.push(item)
  updateHistory(`${user.name} added ${item.name}`)
}

// Remove item from cart
const removeItem = function(item) {
  const tempCart = []
  for(let i=0; i < user.cart.length; i++) {
    if (user.cart[i].name !== item.name) {
      tempCart.push(user.cart[i])
    }
  }
  user.cart = tempCart
  updateHistory(`${user.name} removed ${item.name}`)
}

// Adds sales tax
const addSalesTax = function(item) {
  let price = (tax * item.price) + item.price
  var item = {
    name: item.name,
    price: price
  }
  return item
}

// Purchases items and empty cart
const purchaseItems = function() {
  for(let i=0; i < user.cart.length; i++) {
    let item = addSalesTax(user.cart[i])
    user.purchases.push(item)
    updateHistory(`${user.name} purchased ${item.name} at ${item.price}`)
  }
  emptyCart()
}

// Empties cart
const emptyCart = function() {
  user.cart = []
}

// Updates user history
const updateHistory = function(action) {  
  user.history.push(action)
}

addItem({name: 'item1', price: 25.00})
addItem({name: 'item2', price: 40.00})
//console.log('After adding items', user)
removeItem({name: 'item2'})
console.log('After removing items', user)
purchaseItems()
console.log(user)


// Implement a cart feature
// 1. Add items to a cart
// 2. Add 3% tax to an item
// 3. Buy items: cart --> pruchases
// 4. Empty cart

// Bonus
// Accepts refunds
// Track user history
// Amazon Shopping Cart
// Implement a cart feature
// 1. Add items to a cart
// 2. Add 3% tax to an item
// 3. Buy items: cart --> pruchases
// 4. Empty cart

// Bonus
// Accepts refunds
// Track user history

const user = {
  name: 'Kim',
  active: true,
  cart: [],
  purchases: [],
  history: []
}

const tax = 0.03

// Cart State
const cartState = function() {
  let cart = [...user.cart]
  function getCart() {
    return cart
  }
  function addItem(item) {
    return cart.push(item)
  }
  function removeItem(find) {
    let index = -1
    cart.forEach(function(item, index2){
      if (item.name === find.name) {
        index = index2
      }
    })
    if (index > -1) {
      return cart.splice(index, 1)
    }
  }
  return {
    getCart,
    addItem,
    removeItem
  }
  // updateHistory(`${user.name} added ${item.name}`)
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

const print = function(obj) {
  console.log(obj)
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
  return []
}

// Updates user history
const updateHistory = function(action) {  
  user.history.push(action)
}

(function() {
  let cart = cartState()
  cart.addItem({name: 'item1', price: 25.00})
  cart.addItem({name: 'item2', price: 40.00})
  print(cart.getCart())
  
  cart.removeItem({name: 'item2'})
  print(cart.getCart())
  //purchaseItems()
}());

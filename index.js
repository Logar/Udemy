// Amazon Shopping Cart
// Implement a cart feature
// 1. Add items to a cart
// 2. Add 3% tax to an item
// 3. Buy items: cart --> pruchases
// 4. Empty cart

// Bonus
// Accepts refunds
// Track user history

// Cart Module
const cartModule = (function () {
  function addItem(cart, item) {
    return cart.concat(item)
  }
  function removeItem(cart, item) {
    const found = cart.find(({name}) => name === item.name)
    return cart.splice(cart.indexOf(found), 1)
  }
  // Empties cart
  function emptyCart(cart) {
    return cart.splice(0, cart.length)
  }
  return {
    addItem,
    removeItem,
    emptyCart
  }
}());

// Adds sales tax
const addSalesTax = function(price) {
  const tax = 0.03
  return (tax * price) + price
}

// Purchase module 
const purchaseModule = (function () {
  function addPurchases(purchases, cart) {
    return purchases.concat(cart.map(
      item => (item.name, addSalesTax(item.price))
    ))
  }
  return {
    addPurchases
  }
}());

// User history
const userHistory = function() {
  function addHistory(history, item) {
    return history.concat([item])
  }
  return {
    addHistory
  }
}

(function () {
  // private
  const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: [],
    history: []
  }
  let cart = [...user.cart]
  let purchases = [...user.purchases]

  cart = cart.concat(
    cartModule.addItem(cart, {name: 'item1', price: 25.40}),
    cartModule.addItem(cart, {name: 'item2', price: 40.15}),
    cartModule.addItem(cart, {name: 'item3', price: 5.99})
  )
  cartModule.removeItem(cart, {name: 'item2'})

  console.log('Cart: ', cart)
  purchases = purchases.concat(
    purchaseModule.addPurchases(purchases, cart)
  )
  console.log('Purchases: ', purchases)
  console.log('User: ', user)
}());
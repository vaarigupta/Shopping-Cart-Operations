const express = require('express');
const { resolve } = require('path');
const cors = require('cors');

const app = express();
const port = 3010;
app.use(cors());

let cart = [
  { productId: 1, name: 'Laptop', price: 50000, quantity: 1 },
  { productId: 2, name: 'Mobile', price: 20000, quantity: 2 },
];

//Endpoint 1: Add an Item to the Cart
function addNewItemToCart(cart, newItem) {
  cart.push(newItem);
  return cart;
}
app.get('/cart/add', (req, res) => {
  let productId = parseInt(req.query.productId);
  let name = req.query.name;
  let price = parseFloat(req.query.price);
  let quantity = parseInt(req.query.quantity);
  let newItem = {
    productId: productId,
    name: name,
    price: price,
    quantity: quantity,
  };
  let cartItems = addNewItemToCart(cart, newItem);
  res.json({ cartItems });
});

//Endpoint 2: Edit Quantity of an Item in the Cart
function updateQuantityById(cart, productId, quantity) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].productId === productId) {
      cart[i].quantity = quantity;
      break;
    }
  }
  return cart;
}
app.get('/cart/edit', (req, res) => {
  let productId = parseInt(req.query.productId);
  let quantity = parseInt(req.query.quantity);
  let cartItems = updateQuantityById(cart, productId, quantity);
  res.json({ cartItems });
});

//Endpoint 3: Delete an Item from the Cart
function deleteProductFromCart(cart, productId) {
  return cart.filter((x) => x.productId != productId);
}
app.get('/cart/delete', (req, res) => {
  let productId = parseInt(req.query.productId);
  let cartItems = deleteProductFromCart(cart, productId);
  cart = cartItems;
  res.json({ cartItems });
});

//Endpoint 4: Read Items in the Cart
app.get('/cart', (req, res) => {
  let cartItems = cart;
  res.json({ cartItems });
});

//Endpoint 5: Calculate Total Quantity of Items in the Cart
function calculateTotalQuantityInCart(cart) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].quantity;
  }
  return total;
}
app.get('/cart/total-quantity', (req, res) => {
  let totalQuantity = calculateTotalQuantityInCart(cart);
  res.json({ totalQuantity });
});

//Endpoint 6: Calculate Total Price of Items in the Cart
function calculateTotalPriceOfCart(cart) {
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].quantity * cart[i].price;
  }
  return totalPrice;
}
app.get('/cart/total-price', (req, res) => {
  let totalPrice = calculateTotalPriceOfCart(cart);
  res.json({ totalPrice });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

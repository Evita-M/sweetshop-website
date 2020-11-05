document.getElementById("cart-info").addEventListener("click", function() {
  const cart = document.getElementById("cart");
  cart.classList.toggle("show-cart");
  console.log(cart);
});


document.getElementById("cart-item-remove").addEventListener("click", function() {
  const cartItem = document.getElementById("cart-item");
  cartItem.remove;
});
const cartTotalEl = document.querySelector('.cart-total');
const pricesEls = document.querySelectorAll('.cart-price');
let totalPrice = 0;

pricesEls.forEach(priceEl => {
  totalPrice += Number(priceEl.textContent.replace('$',''))
});

cartTotalEl.textContent = `$ ${totalPrice.toFixed(2)}`;




function deleteRow(r) {

  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("myTable").deleteRow(i);
  totalPrice -= Number(r.parentNode.parentNode.querySelector('.cart-price').textContent.replace('$',''))
  cartTotalEl.textContent = `$ ${totalPrice.toFixed(2)}`
}

// Get a reference to the shopping cart icon element
const cartIcon = document.querySelector('.fa-shopping-cart');

// Add a click event listener to the cart icon
cartIcon.addEventListener('click', addToCart);

// Function to handle the click event
function addToCart(event) {
  event.preventDefault();

  // Get the parent product element
  const productElement = event.target.parentElement.parentElement;

  // Extract the necessary information from the product element
  const productName = productElement.querySelector('h5').textContent;
  const productPrice = productElement.querySelector('h4').textContent;

  // Create an object representing the item to be added to the cart
  const item = {
    name: productName,
    price: productPrice
  };

  // Perform any necessary logic to add the item to the cart
  // You can use local storage, session storage, or any other data structure of your choice to store the cart items

  // Example: Store the item in local storage
  const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];
  existingCartItems.push(item);
  localStorage.setItem('cart', JSON.stringify(existingCartItems));

  // Redirect the user to the cart page
  window.location.href = 'cart.html';
}
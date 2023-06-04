// Array to store cart items
let cartItems = [];

// Function to handle the "Add to Cart" button click
function handleAddToCartClick(event) {
  const product = event.target.dataset.product;
  const price = Number(event.target.dataset.price);
  
  addToCart(product, price); // Add the product to the cart
  
  updateCart(); // Update the cart UI
}

// Function to add products to the cart
function addToCart(productName, price) {
  // Check if the product is already in the cart
  const existingItem = cartItems.find(item => item.name === productName);
  
  if (existingItem) {
    existingItem.quantity++; // Increment quantity if the product is already in the cart
  } else {
    cartItems.push({ name: productName, price: price, quantity: 1 }); // Add a new product to the cart
  }
}

// Function to update the cart UI
function updateCart() {
  const cartItemsElement = document.getElementById('cart-items');
  const cartTotalElement = document.getElementById('cart-total');
  
  // Clear previous cart items
  cartItemsElement.innerHTML = '';
  
  let total = 0;
  
  // Render cart items
  cartItems.forEach(item => {
    const itemElement = document.createElement('li');
    itemElement.textContent = `${item.name} - $${item.price} - Quantity: ${item.quantity}`;
    cartItemsElement.appendChild(itemElement);
    
    total += item.price * item.quantity;
  });
  
  cartTotalElement.textContent = total;
}

// Function to simulate checkout process
function checkout() {
  // Perform necessary operations for the checkout process, such as validating form fields, applying coupons, etc.
  
  // Example: Clear the cart after checkout
  cartItems = [];
  
  updateCart(); // Update the cart UI
}

// Add event listeners to "Add to Cart" buttons
const addToCartButtons = document.getElementsByClassName('add-to-cart-btn');
Array.from(addToCartButtons).forEach(button => {
  button.addEventListener('click', handleAddToCartClick);
});

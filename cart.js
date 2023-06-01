<!DOCTYPE html>
<html>
<head>
  <!-- Other head elements -->
  <script src="path/to/your/javascript/file.js"></script>
</head>
<body>
  <!-- Product listing -->
  <div class="product">
    <h3>Product 1</h3>
    <p>Price: $10</p>
    <button onclick="addToCart('Product 1', 10)">Add to Cart</button>
  </div>
  
  <div class="product">
    <h3>Product 2</h3>
    <p>Price: $15</p>
    <button onclick="addToCart('Product 2', 15)">Add to Cart</button>
  </div>
  
  <!-- Cart -->
  <div id="cart">
    <h3>Cart</h3>
    <ul id="cart-items"></ul>
    <p>Total: $<span id="cart-total">0</span></p>
    <button onclick="checkout()">Checkout</button>
  </div>
  
  <!-- Other website content -->
</body>
</html>

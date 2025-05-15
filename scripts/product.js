const cartSidebar = document.querySelector('.cart-sidebar');
const cartFloater = document.querySelector('.cart-floater');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.getElementById('cart-total');
const closeCartButton = document.querySelector('.close-cart');
const clearCartButton = document.querySelector('.clear-cart');

let total = 0;

// Add to Cart Functionality
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-product');
        const productPrice = parseFloat(button.getAttribute('data-price'));

        // Add item to cart
        const cartItem = document.createElement('li');
        cartItem.textContent = `${productName} - $${productPrice.toFixed(2)}`;
        cartItems.appendChild(cartItem);

        // Update total
        total += productPrice;
        cartTotal.textContent = total.toFixed(2);

        // Open cart sidebar
        cartSidebar.classList.add('open');
    });
});

// Function to toggle the cart sidebar
function toggleCart() {
    cartSidebar.classList.toggle('open');
}

// Open cart when the floating button is clicked
cartFloater.addEventListener('click', toggleCart);

// Close cart when the close button is clicked
closeCartButton.addEventListener('click', toggleCart);

// Clear Cart Functionality
clearCartButton.addEventListener('click', () => {
    // Remove all items from the cart
    cartItems.innerHTML = '';

    // Reset the total price
    total = 0;
    cartTotal.textContent = total.toFixed(2);

    // Optionally, close the cart after clearing
    cartSidebar.classList.remove('open');
});
// 1. Create a variable to keep track of the total items
let cartCount = 0;

// 2. Find the Cart element using the ID we just added
const cartElement = document.getElementById('cart-link');

// 3. Find ALL the "Add to Cart" buttons on the page
// querySelectorAll grabs every button inside a .product-card
const addButtons = document.querySelectorAll('.product-card button');

// 4. Loop through each button and tell it to listen for a click
addButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Increase the cart count by 1
        cartCount++;
        
        // Update the text inside the navigation bar
        cartElement.textContent = `Cart (${cartCount})`;
        
        // Change the button text temporarily to show it worked
        button.textContent = 'Added!';
        button.style.backgroundColor = '#27ae60'; // Turn it green
        
        // Change the button back after 1.5 seconds (1500 milliseconds)
        setTimeout(() => {
            button.textContent = 'Add to Cart';
            button.style.backgroundColor = '#3498db'; // Back to blue
        }, 1500);
    });
});
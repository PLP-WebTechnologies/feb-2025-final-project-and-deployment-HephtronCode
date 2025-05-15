document.addEventListener('DOMContentLoaded', () => {
    const checkoutForm = document.querySelector('.checkout-form');
    const paymentSelect = document.getElementById('payment');
    const submitButton = document.querySelector('.submit-btn');

    // Add event listener for form submission
    checkoutForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Validate form fields
        if (!validateForm()) {
            alert('Please fill out all required fields correctly.');
            return;
        }

        // Show confirmation message
        alert('Thank you for your order! Your order has been placed successfully.');
        checkoutForm.reset(); // Reset the form after submission
    });

    // Add event listener for payment method selection
    paymentSelect.addEventListener('change', (event) => {
        handlePaymentMethod(event.target.value);
    });

    // Validate form fields
    function validateForm() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const address = document.getElementById('address').value.trim();
        const city = document.getElementById('city').value.trim();
        const zip = document.getElementById('zip').value.trim();

        // Check if all fields are filled
        if (!name || !email || !address || !city || !zip) {
            return false;
        }

        // Validate email format
        if (!validateEmail(email)) {
            return false;
        }

        return true;
    }

    // Email validation helper function
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Handle payment method selection
    function handlePaymentMethod(paymentMethod) {
        const additionalFieldsContainer = document.querySelector('.additional-fields');

        // Clear any existing additional fields
        additionalFieldsContainer.innerHTML = '';

        if (paymentMethod === 'credit-card') {
            // Add credit card fields
            additionalFieldsContainer.innerHTML = `
                <div class="form-group">
                    <label for="card-number">Card Number</label>
                    <input type="text" id="card-number" name="card-number" placeholder="Enter your card number" required>
                </div>
                <div class="form-group">
                    <label for="expiry-date">Expiry Date</label>
                    <input type="text" id="expiry-date" name="expiry-date" placeholder="MM/YY" required>
                </div>
                <div class="form-group">
                    <label for="cvv">CVV</label>
                    <input type="text" id="cvv" name="cvv" placeholder="Enter CVV" required>
                </div>
            `;
        } else if (paymentMethod === 'paypal') {
            // Add PayPal instructions
            additionalFieldsContainer.innerHTML = `
                <p>Please log in to your PayPal account after placing the order to complete the payment.</p>
            `;
        } else if (paymentMethod === 'bank-transfer') {
            // Add bank transfer instructions
            additionalFieldsContainer.innerHTML = `
                <p>Bank transfer details will be sent to your email after placing the order.</p>
            `;
        }
    }
});
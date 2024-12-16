document.addEventListener('DOMContentLoaded', function () {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartTable = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const clearCartBtn = document.getElementById('clearCart');

    function updateCart() {
        cartTable.innerHTML = '';
        let total = 0;

        cartItems.forEach((item, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${item.name}</td>
                <td>₹${item.price.toFixed(2)}</td>
                <td>
                    <div class="input-group w-75">
                        <button class="btn btn-outline-secondary btn-sm" onclick="updateQuantity(${index}, -1)">-</button>
                        <input type="number" class="form-control form-control-sm text-center" value="${item.quantity}" min="1" onchange="updateQuantityDirect(${index}, this.value)">
                        <button class="btn btn-outline-secondary btn-sm" onclick="updateQuantity(${index}, 1)">+</button>
                    </div>
                </td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="removeItem(${index})">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            `;
            cartTable.appendChild(row);
            total += item.price * item.quantity;
        });

        cartTotal.textContent = `₹${total.toFixed(2)}`;
        updateCartCount();
    }

    function updateCartCount() {
        const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        document.querySelector('.cart-count').textContent = count;
    }

    clearCartBtn.addEventListener('click', function () {
        if (confirm('Are you sure you want to clear your cart?')) {
            cartItems.length = 0;
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            updateCart();
        }
    });

    // Initialize cart
    updateCart();
});

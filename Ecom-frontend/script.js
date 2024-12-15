document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const removeFromCartButtons = document.querySelectorAll(".remove-from-cart");
    const cartCount = document.getElementById("cart-count");

    let itemCount = 0;

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            itemCount++;
            cartCount.textContent = itemCount;
        });
    });

    // Event delegation for remove from cart buttons
    document.body.addEventListener("click", (event) => {
        if (event.target.classList.contains("remove-from-cart")) {
            itemCount--;
            if (itemCount < 0) {
                itemCount = 0; // Ensure count is non-negative
            }
            cartCount.textContent = itemCount;
        }
    });
});

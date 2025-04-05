// Sample product data (in a real app, this would come from a database)
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 99.99,
        image: "https://honeywellconnection.com/in/wp-content/uploads/2024/08/01-8.jpg",
        rating: 4,
        category: "electronics"
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 199.99,
        image: "https://m.media-amazon.com/images/I/61koyOZAWyL.jpg",
        rating: 5,
        category: "electronics"
    },
    {
        id: 3,
        name: "Cotton T-Shirt",
        price: 24.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB_FNSwOfoCg5HwCpoZkR8ley1Df4eWZORUg&s",
        rating: 3,
        category: "fashion"
    },
    {
        id: 4,
        name: "Running Shoes",
        price: 79.99,
        image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/23655434/2023/6/16/8a00ddaf-ad1e-4b7c-b8bd-9146a8a489bc1686915536918HRXbyHrithikRoshanBlackWalkingSportsShoeForMen1.jpg",
        rating: 4,
        category: "fashion"
    },
    {
        id: 5,
        name: "Blender",
        price: 49.99,
        image: "https://images-cdn.ubuy.co.in/64ca0e4da858e121b25ce6f4-vevor-professional-blender-commercial.jpg",
        rating: 4,
        category: "home"
    },
    {
        id: 6,
        name: "Perfume",
        price: 59.99,
        image: "https://beardo.in/cdn/shop/files/Beardo_WS_EDP_A__Banner_2160x2160_05_8af08840-b055-43c7-8e02-5af85fc34bd8.jpg?v=1742191482&width=1946",
        rating: 5,
        category: "beauty"
    },
    {
        id: 7,
        name: "Laptop",
        price: 899.99,
        image: "https://saudewala.in/cdn/shop/collections/Laptop.jpg?v=1732216115&width=1296",
        rating: 5,
        category: "electronics"
    },
    {
        id: 8,
        name: "Jeans",
        price: 39.99,
        image: "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Fuploads%2Fcategory%2Fmobilesite%2FInside-banner_720x400-msiteJEANS-1742377813.jpg&w=3840&q=75",
        rating: 4,
        category: "fashion"
    },
    {
        id: 9,
        name: "Coffee Maker",
        price: 89.99,
        image: "https://m.media-amazon.com/images/I/818gyfjYmZL.jpg",
        rating: 4,
        category: "home"
    },
    {
        id: 10,
        name: "Lipstick Set",
        price: 29.99,
        image: "https://milabeaute.com/cdn/shop/files/minispoutparty2.jpg?v=1743589468&width=4160",
        rating: 5,
        category: "beauty"
    },
    {
        id: 11,
        name: "Bluetooth Speaker",
        price: 59.99,
        image: "https://images-cdn.ubuy.co.in/65342d64f63ad41e8e287a07-jauyxian-d16-portable-bluetooth.jpg",
        rating: 4,
        category: "electronics"
    },
    {
        id: 12,
        name: "Sneakers",
        price: 69.99,
        image: "https://baccabucci.com/cdn/shop/files/MG_9335.jpg?v=1721638085",
        rating: 4,
        category: "fashion"
    },
    {
        id: 13,
        name: "Desk Lamp",
        price: 34.99,
        image: "https://www.ikea.com/in/en/images/products/roedflik-desk-lamp-light-beige__1327054_pe944348_s5.jpg",
        rating: 3,
        category: "home"
    },
    {
        id: 14,
        name: "Face Cream",
        price: 19.99,
        image: "https://m.media-amazon.com/images/I/61hxoIDqrzL.jpg",
        rating: 5,
        category: "beauty"
    },
    {
        id: 15,
        name: "Tablet",
        price: 299.99,
        image: "https://cdn.mos.cms.futurecdn.net/Fx8DinujXdfCqpFYNUH9y6-1200-80.jpg",
        rating: 5,
        category: "electronics"
    },
    {
        id: 16,
        name: "Backpack",
        price: 44.99,
        image: "https://icon.in/cdn/shop/files/6_f2400ad1-7ef5-4f23-aa1b-a5e7114da4b5.jpg?v=1735286497&width=1946",
        rating: 4,
        category: "fashion"
    },
    {
        id: 17,
        name: "Toaster",
        price: 24.99,
        image: "https://glenindia.com/cdn/shop/collections/Toasters-_3014_1350x469.jpg?v=1743070827",
        rating: 4,
        category: "home"
    },
    {
        id: 18,
        name: "Makeup Brush Set",
        price: 22.99,
        image: "https://m.media-amazon.com/images/I/51ED-mvq-JL._AC_.jpg",
        rating: 5,
        category: "beauty"
    },
    {
        id: 19,
        name: "Smartphone",
        price: 699.99,
        image: "https://images.samsung.com/is/image/samsung/assets/in/explore/brand/5-best-android-mobile-phones-2022-in-india/banner-mobile-720x761-080422.jpg?$720_N_JPG$",
        rating: 5,
        category: "electronics"
    },
    {
        id: 20,
        name: "Sunglasses",
        price: 29.99,
        image: "https://assets.ajio.com/medias/sys_master/root/20240713/b8F5/66923a066f60443f310809be/-473Wx593H-465012582-black-MODEL6.jpg",
        rating: 4,
        category: "fashion"
    },
    {
        id: 21,
        name: "Vacuum Cleaner",
        price: 129.99,
        image: "https://www.jiomart.com/images/product/original/rvlhjwh85q/prestige-cleanhome-typhoon-11-bagless-vacuum-cleaner-1600-watts-product-images-orvlhjwh85q-p602451948-1-202406061623.jpg?im=Resize=(1000,1000)",
        rating: 4,
        category: "home"
    },
    {
        id: 22,
        name: "Shampoo & Conditioner",
        price: 19.99,
        image: "https://theskinstory.in/cdn/shop/files/1_101b2734-5b84-4ccd-97c3-ea15e483f1f0.jpg?v=1704451340",
        rating: 4,
        category: "beauty"
    },
    {
        id: 23,
        name: "Gaming Console",
        price: 499.99,
        image: "https://m.media-amazon.com/images/I/51c+jDFrMQL._AC_UF894,1000_QL80_.jpg",
        rating: 5,
        category: "electronics"
    },
    {
        id: 24,
        name: "Leather Wallet",
        price: 34.99,
        image: "https://5.imimg.com/data5/OF/GH/MY-7610375/handmade-men-s-short-leather-wallet.jpg",
        rating: 4,
        category: "fashion"
    },
    {
        id: 25,
        name: "Air Fryer",
        price: 79.99,
        image: "https://assets.aboutamazon.com/dims4/default/f151004/2147483647/strip/true/crop/1599x900+1+0/resize/1240x698!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2Fd0%2Ffb%2F57df9cc5463d8d12cb810c57ea4e%2F0-top-pic.jpg",
        rating: 5,
        category: "home"
    },
    {
        id: 26,
        name: "Nail Polish Set",
        price: 15.99,
        image: "https://m.media-amazon.com/images/I/81UXG6QcITL.jpg",
        rating: 4,
        category: "beauty"
    },
    {
        id: 27,
        name: "Camera",
        price: 599.99,
        image: "https://images.pexels.com/photos/212372/pexels-photo-212372.jpeg?cs=srgb&dl=pexels-asphotograpy-212372.jpg&fm=jpg",
        rating: 5,
        category: "electronics"
    },
    {
        id: 28,
        name: "Jacket",
        price: 59.99,
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/846683/98/mod01/fnd/IND/fmt/png/PUMA-Men's-Padded-Jacket",
        rating: 4,
        category: "fashion"
    }
];

// Shopping cart
let cart = [];

// DOM Elements
const productGrid = document.querySelector('.product-grid');
const cartIcon = document.querySelector('.cart-icon');
const cartModal = document.querySelector('.cart-modal');
const closeCart = document.querySelector('.close-cart');
const cartItemsContainer = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const cartCount = document.querySelector('.cart-count');

// Display products
function displayProducts() {
    productGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        // Create star rating
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= product.rating) {
                stars += '<i class="fas fa-star"></i>';
            } else {
                stars += '<i class="far fa-star"></i>';
            }
        }
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-rating">${stars}</div>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;
        
        productGrid.appendChild(productCard);
    });
    
    // Add event listeners to "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Add to cart function
function addToCart(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    const product = products.find(p => p.id === productId);
    
    // Check if product is already in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCart();
    
    // Show a quick notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = `${product.name} added to cart!`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 2000);
}

// Update cart display
function updateCart() {
    cartItemsContainer.innerHTML = '';
    
    let total = 0;
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.name}</h4>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn minus" data-id="${item.id}">-</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.id}">
                    <button class="quantity-btn plus" data-id="${item.id}">+</button>
                </div>
                <div class="remove-item" data-id="${item.id}">Remove</div>
            </div>
        `;
        
        cartItemsContainer.appendChild(cartItem);
        total += item.price * item.quantity;
    });
    
    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    // Add event listeners to quantity buttons
    document.querySelectorAll('.quantity-btn').forEach(button => {
        button.addEventListener('click', updateQuantity);
    });
    
    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', updateQuantity);
    });
    
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', removeItem);
    });
}

// Update quantity function
function updateQuantity(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    const item = cart.find(item => item.id === productId);
    
    if (e.target.classList.contains('minus')) {
        if (item.quantity > 1) {
            item.quantity -= 1;
        }
    } else if (e.target.classList.contains('plus')) {
        item.quantity += 1;
    } else if (e.target.classList.contains('quantity-input')) {
        const newQuantity = parseInt(e.target.value);
        if (newQuantity >= 1) {
            item.quantity = newQuantity;
        } else {
            item.quantity = 1;
            e.target.value = 1;
        }
    }
    
    updateCart();
}

// Remove item function
function removeItem(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Event Listeners
cartIcon.addEventListener('click', () => {
    cartModal.style.display = 'block';
});

closeCart.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

// Close cart when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.style.display = 'none';
    }
});

// Initialize the page
displayProducts();

// Notification style (added dynamically)
const style = document.createElement('style');
style.textContent = `
    .notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #4CAF50;
        color: white;
        padding: 15px;
        border-radius: 5px;
        animation: slideIn 0.5s, fadeOut 0.5s 1.5s;
    }
    
    @keyframes slideIn {
        from { transform: translateX(100%); }
        to { transform: translateX(0); }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(style);
// Checkout Variables
const checkoutBtn = document.querySelector('.checkout-btn');
const checkoutModal = document.querySelector('.checkout-modal');
const closeCheckout = document.querySelector('.close-checkout');
const checkoutSteps = document.querySelectorAll('.checkout-step');
const stepButtons = document.querySelectorAll('.step');
const btnNext = document.querySelectorAll('.btn-next');
const btnPrev = document.querySelectorAll('.btn-prev');
const paymentMethods = document.querySelectorAll('.payment-method');
const checkoutForm = document.querySelector('.checkout-form');
const orderConfirmation = document.querySelector('.order-confirmation');
const btnContinue = document.querySelector('.btn-continue');

// Open Checkout Modal
checkoutBtn.addEventListener('click', () => {
    checkoutModal.style.display = 'block';
    updateOrderSummary();
});

// Close Checkout Modal
closeCheckout.addEventListener('click', () => {
    checkoutModal.style.display = 'none';
});

// Close when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === checkoutModal) {
        checkoutModal.style.display = 'none';
    }
});

// Step Navigation
function goToStep(stepNumber) {
    checkoutSteps.forEach(step => {
        step.classList.remove('active');
        if (step.classList.contains(`step-${stepNumber}`)) {
            step.classList.add('active');
        }
    });
    
    stepButtons.forEach(step => {
        step.classList.remove('active');
        if (parseInt(step.getAttribute('data-step')) <= stepNumber) {
            step.classList.add('active');
        }
    });
}

btnNext.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const nextStep = button.getAttribute('data-next');
        if (validateStep(parseInt(nextStep) - 1)) {
            goToStep(parseInt(nextStep));
            
            // Update review sections when going to step 3
            if (nextStep === '3') {
                updateReviewSections();
            }
        }
    });
});

btnPrev.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const prevStep = button.getAttribute('data-prev');
        goToStep(parseInt(prevStep));
    });
});

// Payment Method Selection
paymentMethods.forEach(method => {
    method.addEventListener('click', () => {
        paymentMethods.forEach(m => m.classList.remove('active'));
        method.classList.add('active');
        method.querySelector('input').checked = true;
    });
});

// Form Validation
function validateStep(stepNumber) {
    let isValid = true;
    const currentStep = document.querySelector(`.step-${stepNumber}`);
    
    if (stepNumber === 1) {
        const requiredFields = currentStep.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            if (!field.value) {
                field.style.borderColor = 'red';
                isValid = false;
            } else {
                field.style.borderColor = '#ddd';
            }
        });
    }
    
    if (stepNumber === 2) {
        const selectedMethod = document.querySelector('input[name="payment-method"]:checked');
        if (!selectedMethod) {
            alert('Please select a payment method');
            isValid = false;
        } else if (selectedMethod.id === 'credit-card') {
            const cardFields = currentStep.querySelectorAll('.credit-details [required]');
            cardFields.forEach(field => {
                if (!field.value) {
                    field.style.borderColor = 'red';
                    isValid = false;
                } else {
                    field.style.borderColor = '#ddd';
                }
            });
        }
    }
    
    return isValid;
}

// Update Order Summary
function updateOrderSummary() {
    const summaryItems = document.querySelector('.summary-items');
    const subtotalElement = document.querySelector('.order-summary .subtotal');
    const taxElement = document.querySelector('.order-summary .tax');
    const shippingElement = document.querySelector('.order-summary .shipping');
    const orderTotalElement = document.querySelector('.order-summary .order-total');
    
    summaryItems.innerHTML = '';
    
    let subtotal = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        const itemElement = document.createElement('div');
        itemElement.className = 'summary-item';
        itemElement.innerHTML = `
            <span class="summary-item-name">${item.name} (x${item.quantity})</span>
            <span class="summary-item-price">$${itemTotal.toFixed(2)}</span>
        `;
        summaryItems.appendChild(itemElement);
    });
    
    const shipping = 5.99; // Flat rate shipping
    const tax = subtotal * 0.1; // 10% tax for example
    const total = subtotal + shipping + tax;
    
    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    taxElement.textContent = `$${tax.toFixed(2)}`;
    shippingElement.textContent = `$${shipping.toFixed(2)}`;
    orderTotalElement.textContent = `$${total.toFixed(2)}`;
}

// Update Review Sections
function updateReviewSections() {
    // Shipping Info
    const shippingInfo = document.querySelector('.shipping-info');
    shippingInfo.innerHTML = `
        <p>${document.getElementById('fullname').value}</p>
        <p>${document.getElementById('address').value}</p>
        <p>${document.getElementById('city').value}, ${document.getElementById('state').value} ${document.getElementById('zip').value}</p>
        <p>${document.getElementById('country').value}</p>
        <p>Phone: ${document.getElementById('phone').value}</p>
        <p>Email: ${document.getElementById('email').value}</p>
    `;
    
    // Payment Info
    const paymentInfo = document.querySelector('.payment-info');
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked').id;
    
    if (paymentMethod === 'credit-card') {
        paymentInfo.innerHTML = `
            <p>Credit/Debit Card</p>
            <p>Card ending in ${document.getElementById('card-number').value.slice(-4)}</p>
            <p>Expires ${document.getElementById('card-expiry').value}</p>
        `;
    } else if (paymentMethod === 'paypal') {
        paymentInfo.innerHTML = `<p>PayPal</p>`;
    } else {
        paymentInfo.innerHTML = `<p>Bank Transfer</p>`;
    }
    
    // Order Items
    const reviewItems = document.querySelector('.review-items');
    const reviewSubtotal = document.querySelector('.review-totals .subtotal');
    const reviewShipping = document.querySelector('.review-totals .shipping');
    const reviewTax = document.querySelector('.review-totals .tax');
    const reviewOrderTotal = document.querySelector('.review-totals .order-total');
    
    reviewItems.innerHTML = '';
    
    let subtotal = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        const itemElement = document.createElement('div');
        itemElement.className = 'review-item';
        itemElement.innerHTML = `
            <div class="review-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="review-item-details">
                <h4 class="review-item-title">${item.name}</h4>
                <div class="review-item-price">$${item.price.toFixed(2)}</div>
                <div class="review-item-quantity">Quantity: ${item.quantity}</div>
            </div>
        `;
        reviewItems.appendChild(itemElement);
    });
    
    const shipping = 5.99;
    const tax = subtotal * 0.1;
    const total = subtotal + shipping + tax;
    
    reviewSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    reviewShipping.textContent = `$${shipping.toFixed(2)}`;
    reviewTax.textContent = `$${tax.toFixed(2)}`;
    reviewOrderTotal.textContent = `$${total.toFixed(2)}`;
}

// Form Submission
checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // In a real app, you would process payment here
    // For demo purposes, we'll just show the confirmation
    
    // Generate random order number
    const orderNumber = Math.floor(10000 + Math.random() * 90000);
    
    // Update confirmation details
    document.querySelector('.order-number').textContent = `Your order #${orderNumber} has been placed successfully.`;
    document.querySelector('.confirm-email').textContent = document.getElementById('email').value;
    
    // Hide form and show confirmation
    checkoutForm.style.display = 'none';
    orderConfirmation.style.display = 'block';
    
    // In a real app, you would send this data to your server
    const orderData = {
        orderNumber: orderNumber,
        customer: {
            name: document.getElementById('fullname').value,
            email: document.getElementById('email').value,
            address: {
                street: document.getElementById('address').value,
                city: document.getElementById('city').value,
                state: document.getElementById('state').value,
                zip: document.getElementById('zip').value,
                country: document.getElementById('country').value
            },
            phone: document.getElementById('phone').value
        },
        payment: {
            method: document.querySelector('input[name="payment-method"]:checked').id,
            details: document.querySelector('input[name="payment-method"]:checked').id === 'credit-card' ? {
                cardNumber: document.getElementById('card-number').value,
                cardName: document.getElementById('card-name').value,
                expiry: document.getElementById('card-expiry').value,
                cvc: document.getElementById('card-cvc').value
            } : null
        },
        items: cart,
        subtotal: parseFloat(document.querySelector('.order-summary .subtotal').textContent.slice(1)),
        shipping: parseFloat(document.querySelector('.order-summary .shipping').textContent.slice(1)),
        tax: parseFloat(document.querySelector('.order-summary .tax').textContent.slice(1)),
        total: parseFloat(document.querySelector('.order-summary .order-total').textContent.slice(1)),
        date: new Date()
    };
    
    console.log('Order Data:', orderData); // For demo purposes
    
    // Clear cart after successful order
    cart = [];
    updateCart();
});

// Continue Shopping Button
btnContinue.addEventListener('click', () => {
    checkoutModal.style.display = 'none';
    checkoutForm.style.display = 'block';
    orderConfirmation.style.display = 'none';
    goToStep(1);
});
// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection
mongoose.connect('mongodb://localhost:27017/ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Product Model
const Product = mongoose.model('Product', {
    name: String,
    price: Number,
    description: String,
    image: String,
    category: String,
    rating: Number,
    stock: Number
});

// User Model
const User = mongoose.model('User', {
    username: String,
    email: String,
    password: String,
    orders: Array
});

// Order Model
const Order = mongoose.model('Order', {
    userId: String,
    products: Array,
    total: Number,
    status: String,
    date: Date
});

// Routes

// Get all products
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get single product
app.get('/api/products/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create product (admin only)
app.post('/api/products', async (req, res) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        image: req.body.image,
        category: req.body.category,
        rating: req.body.rating,
        stock: req.body.stock
    });

    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// User registration
app.post('/api/register', async (req, res) => {
    // In a real app, you would hash the password
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// User login
app.post('/api/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user || user.password !== req.body.password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        // In a real app, you would return a JWT token
        res.json({ message: 'Login successful', userId: user._id });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create order
app.post('/api/orders', async (req, res) => {
    const order = new Order({
        userId: req.body.userId,
        products: req.body.products,
        total: req.body.total,
        status: 'pending',
        date: new Date()
    });

    try {
        const newOrder = await order.save();
        
        // Update user's order history
        await User.findByIdAndUpdate(req.body.userId, {
            $push: { orders: newOrder._id }
        });
        
        res.status(201).json(newOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
// Add to your server.js (Node.js backend)

const stripe = require('stripe')('your_stripe_secret_key');

// Stripe Payment Intent
app.post('/api/create-payment-intent', async (req, res) => {
    const { amount, currency } = req.body;
    
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(amount * 100), // Amount in cents
            currency: currency || 'usd',
        });
        
        res.json({ clientSecret: paymentIntent.client_secret });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Then in your frontend JavaScript:
/*
async function processPayment() {
    const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            amount: parseFloat(document.querySelector('.order-total').textContent.slice(1)),
            currency: 'usd'
        })
    });
    
    const { clientSecret } = await response.json();
    
    // Initialize Stripe.js
    const stripe = Stripe('your_stripe_publishable_key');
    
    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: elements.getElement('card'),
            billing_details: {
                name: document.getElementById('card-name').value
            }
        }
    });
    
    if (error) {
        // Show error to customer
        console.error(error);
    } else if (paymentIntent.status === 'succeeded') {
        // Payment succeeded
        return true;
    }
}
*/
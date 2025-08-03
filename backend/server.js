const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const path = require('path');

// Routes
const cartRoutes = require('./routes/cartRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');

// Import the upload route (you will create this file next)
const uploadRoute = require('./upload');

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors()); // allow frontend to access backend
app.use(express.json()); // parse incoming JSON requests

// Make uploads folder publicly accessible for images
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// Health check route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// API routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/cart', cartRoutes);

// Upload route for image uploading
app.use('/api/upload', uploadRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({
    message: err.message || 'Internal Server Error'
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

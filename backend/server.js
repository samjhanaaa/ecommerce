const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const fs = require('fs');

const connectDB = require('./config/db');

// Routes
const cartRoutes = require('./routes/cartRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Make uploads folder publicly accessible for images
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// API routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/cart', cartRoutes);

// =====================
// Upload Route (inline here for simplicity)
// =====================
const uploadDir = path.join(__dirname, '/uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

app.post('/api/upload', upload.single('image'), (req, res) => {
  res.send({ imagePath: `/uploads/${req.file.filename}` });
});

// =====================
// Serve React frontend
// =====================
const __dirname1 = path.resolve(); // for ESM/CJS compatibility

// Serve static files from client/dist
app.use(express.static(path.join(__dirname1, '..', 'client', 'dist')));

// Any non-API route → serve React app
app.get(/^(?!\/api).*/, (req, res) => {
  res.sendFile(path.resolve(__dirname1, '..', 'client', 'dist', 'index.html'));
});

// =====================
// Error handling middleware
// =====================
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({
    message: err.message || 'Internal Server Error',
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

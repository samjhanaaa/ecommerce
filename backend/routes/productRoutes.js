const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// @desc    Get all products
// @route   GET /api/products
// @access  Public
router.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// @desc    Get a single product by ID
// @route   GET /api/products/:id
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error('Error fetching product:', error.message);
    res.status(500).json({ message: error.message });
  }
});

// @desc    Create a new product
// @route   POST /api/products
// @access  Public (for now)
router.post('/', async (req, res) => {
  try {
    const { name, description, price, countInStock, imageUrl, category, subcategory } = req.body;

    const product = new Product({
      name,
      description,
      price,
      countInStock,
      imageUrl,
      category,     
      subcategory,  
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    console.error('Error creating product:', error.message);
    res.status(500).json({ message: error.message });
  }
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Public (later: admin only)
router.put('/:id', async (req, res) => {
  try {
    const { name, description, price, countInStock, imageUrl, category, subcategory } = req.body;

    const product = await Product.findById(req.params.id);

    if (product) {
      product.name = name || product.name;
      product.description = description || product.description;
      product.price = price || product.price;
      product.countInStock = countInStock || product.countInStock;
      product.imageUrl = imageUrl || product.imageUrl;
      product.category = category || product.category;       
      product.subcategory = subcategory || product.subcategory; 

      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error('Error updating product:', error.message);
    res.status(500).json({ message: error.message });
  }
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Public (later: admin only)
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      await product.deleteOne();
      res.json({ message: 'Product removed' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error('Error deleting product:', error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

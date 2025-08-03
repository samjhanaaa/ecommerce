const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();

// Tell multer where and how to save files
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/'); // save in uploads folder
  },
  filename(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // unique filename
  },
});

const upload = multer({ storage });

// Define POST route to upload single image file with name 'image'
router.post('/', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send({ message: 'No file uploaded' });
  }
  // Send back the path where file is saved
  res.send({ url: `/uploads/${req.file.filename}` });
});

module.exports = router;

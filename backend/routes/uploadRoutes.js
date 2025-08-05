import express from 'express';
import multer from 'multer';
import path from 'path';

const router = express.Router();

// Multer setup for file storage
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Route to handle file upload
router.post('/', upload.single('image'), (req, res) => {
  res.send({ imagePath: `/uploads/${req.file.filename}` });
});

export default router;

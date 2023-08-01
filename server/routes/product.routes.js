import express from 'express';
import { getAllProducts, createProduct } from '../controllers/product.controller.js';

const router = express.Router();

router.get('/api/products', getAllProducts); //idk
router.post('/api/products', createProduct); //idk
router.route("/").get(getAllProducts);
router.route("/").post(createProduct);

// Add other routes as necessary

export default router;

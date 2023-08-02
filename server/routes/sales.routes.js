import express from 'express';
import { getAllSales } from '../controllers/sales.controller.js';

const router = express.Router();

router.get('/api/yearly-sales', getAllSales);
router.route("/").get(getAllSales);

export default router;

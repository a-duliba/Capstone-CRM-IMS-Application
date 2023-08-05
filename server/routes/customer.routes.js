import express from 'express';
import { getAllCustomers, createCustomer, updateCustomer } from '../controllers/customer.controller.js';

const router = express.Router();

router.get('/api/customers', getAllCustomers); //idk
router.post('/api/customers', createCustomer); //idk
//router for update
router.route("/").get(getAllCustomers);
router.route("/").post(createCustomer);


// Add other routes as necessary

export default router;

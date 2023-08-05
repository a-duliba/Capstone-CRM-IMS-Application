import express from 'express';
import { getAllCustomers, createCustomer, updateCustomer, deleteCustomer } from '../controllers/customer.controller.js';

const router = express.Router();

router.get('/', getAllCustomers); 
router.post('/', createCustomer); 
router.delete('/:id', deleteCustomer); 
router.put('/:id', updateCustomer);


//router for update
router.route("/").get(getAllCustomers);
router.route("/").post(createCustomer);


// Add other routes as necessary

export default router;

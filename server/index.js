import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import userRouter from './routes/user.routes.js';
import customerRoutes from './routes/customer.routes.js';
import productRoutes from './routes/product.routes.js';
import salesRoutes from './routes/sales.routes.js';

import Customer from './mongodb/models/customer.js';
import Product from './mongodb/models/product.js';
import Sales from './mongodb/models/sales.js';
import { dataCustomers } from './data/customer.js';
import { dataProducts } from './data/product.js'
import { dataYearlySales } from './data/yearly-sales.js';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/', (req, res) => {
  res.send({ message: 'Hello World!' });
});

app.use('/api/v1/users', userRouter);
app.use('/api/v1/customers', customerRoutes);
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/sales', salesRoutes);

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);

    app.listen(8080, () => console.log('Server started on port http://localhost:8080'));

    //Uncomment these and use only once to load data. After launching and saving this data. Please comment out again and verify data has been loaded to database. 
    //Customer.insertMany(dataCustomers); 
    //Product.insertMany(dataProducts); 
    //Sales.insertMany(dataYearlySales); 

  } catch (error) {
    console.log(error);
  }
};

startServer();

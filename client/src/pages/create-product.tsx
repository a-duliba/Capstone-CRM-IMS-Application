import React from 'react';
import { Product } from 'interfaces/products';
import { TextField, Button } from '@mui/material';
import { useForm } from '@pankod/refine-react-hook-form';
import { Link } from 'react-router-dom';

const CreateProduct = () => {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm();

  const handleSave = async (data: Product) => {
    // Implement the logic for creating a product
  };

//<form onSubmit={handleSubmit(handleSave)}> for fist form below implement logic first

  return (
    <div>
      <h1>Create Product</h1>
      <form> 
        <TextField label="Product ID" {...register("ProductID")} />
        <TextField label="Product Name" {...register("ProductName")} />
        <TextField label="Product Description" {...register("ProductDescription")} />
        <TextField label="Product Price" {...register("ProductPrice")} />
        <TextField label="Product Quantity" {...register("ProductQuantity")} />
        <Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>Save</Button>
        <Button variant="contained" component={Link} to="/products">Cancel</Button>
      </form>
    </div>
  );
};

export default CreateProduct;

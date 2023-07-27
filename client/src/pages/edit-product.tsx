import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Product } from 'interfaces/products';
import { TextField, Button } from '@mui/material';
import { useForm } from '@pankod/refine-react-hook-form';

const EditProduct = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const { register, handleSubmit, formState: { isSubmitting } } = useForm();

  useEffect(() => {
    // Fetch the product data using the ID from the URL
    fetch(`http://localhost:8080/api/v1/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data));
  }, [id]);

  const handleSave = async (data: any) => {
    // Implement the logic for saving the product
  };

  if (!product) {
    return <div>Loading...</div>;
  }

//<form onSubmit={handleSubmit(handleSave)}>

  return (
    <div>
      <h1>Edit Product</h1>
      <form >
        <TextField label="Product ID" {...register("ProductID")} defaultValue={product.ProductID} disabled />
        <TextField label="Product Name" {...register("ProductName")} defaultValue={product.ProductName} />
        <TextField label="Product Description" {...register("ProductDescription")} defaultValue={product.ProductDescription} />
        <TextField label="Product Price" {...register("ProductPrice")} defaultValue={product.ProductPrice} />
        <TextField label="Product Quantity" {...register("ProductQuantity")} defaultValue={product.ProductQuantity} />
        <Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>Save</Button>
        <Button variant="contained" component={Link} to="/products">Cancel</Button>
      </form>
    </div>
  );
};

export default EditProduct;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from 'interfaces/products';
import { Table, TableCell, TableHead, TableRow, TableBody, Button } from '@pankod/refine-mui';
import { Edit as EditIcon } from '@mui/icons-material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { Create as CreateIcon } from '@mui/icons-material';

const Products = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      ProductID: '1',
      ProductName: 'Product 1',
      ProductDescription: 'This is the first product',
      ProductPrice: '10.99',
      ProductQuantity: '10',
    },
    {
      ProductID: '2',
      ProductName: 'Product 2',
      ProductDescription: 'This is the second product',
      ProductPrice: '20.99',
      ProductQuantity: '59',
    },
  ]);

/* use this rather than test data when ready
  useEffect(() => {
    fetch('http://localhost:8080/api/v1/products') 
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []); */

  const deleteProduct = (id: string) => {
    // Implement the logic for deleting a product
  };

  const columns = [
    {
      id: 'id',
      label: 'id',
      format: (value: any, record: Product) => record.ProductID
    },
    {
      id: 'name',
      label: 'Name',
      format: (value: any, record: Product) => record.ProductName
    },
    {
      id: 'description',
      label: 'Description',
      format: (value: any, record: Product) => record.ProductDescription
    },
    {
      id: 'price',
      label: 'Price',
      format: (value: any, record: Product) => record.ProductPrice
    },
    {
      id: 'quantity',
      label: 'quantity',
      format: (value: any, record: Product) => record.ProductQuantity
    },
    {
      id: 'actions',
      label: 'Actions',
      format: (value: any, record: Product) => (
        <div>
          <Link to={`/edit-product/${record.ProductID}`}>
            <Button variant="outlined" startIcon={<EditIcon />}>
              Edit
            </Button>
          </Link>
          <Button variant="outlined" color="secondary" startIcon={<DeleteIcon />} onClick={() => deleteProduct(record.ProductID)}>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Products</h1>
        <Link to="/create-product">
          <Button variant="contained" color="primary" startIcon={<CreateIcon />}>
            Create Product
          </Button>
        </Link>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id}>{column.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.ProductID}>
              {columns.map((column) => (
                <TableCell key={column.id}>{column.format ? column.format(product[column.id], product) : product[column.id]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Products;

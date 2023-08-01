import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from 'interfaces/products';
import { Table, TableCell, TableHead, TableRow, TableBody, TableContainer, Paper, TablePagination } from '@mui/material';
import Button from '@mui/material/Button';
import { Edit as EditIcon } from '@mui/icons-material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { Add } from "@mui/icons-material";
import { useNavigate } from '@pankod/refine-react-router-v6'; 
import {CustomButton } from "components";
import EditButton from 'components/common/EditButton';
import DeleteButton from 'components/common/DeleteButton';

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

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const navigate = useNavigate(); 

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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
        <div style={{ display: 'flex', gap: '8px' }}>
          <EditButton
            title="Edit"
            handleClick={() => navigate("/customers/edit")}
            backgroundColor="#475be8"
            color="#fcfcfc"
            icon={<EditIcon />}
          />
          <DeleteButton
            title="Delete"
            handleClick={() => navigate("/customers/edit")} //navigates for now but need to make delete
            backgroundColor="#ff1744" 
            color="#fcfcfc"
            icon={<DeleteIcon />}
          />
        </div>
      ),
    },
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Products</h1>
          <CustomButton
            title="Add Product"
            handleClick={() => navigate("/products/create")}
            backgroundColor="#4caf50" 
            color="#fcfcfc"
            icon={<Add />}
          />
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id}>{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((product) => (
              <TableRow key={product.ProductID}>
                {columns.map((column) => (
                  <TableCell key={column.id}>{column.format ? column.format(product[column.id], product) : product[column.id]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={products.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
};

export default Products;
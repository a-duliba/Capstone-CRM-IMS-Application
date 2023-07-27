import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Customer } from 'interfaces/customers';
import { Table, TableCell, TableHead, TableRow, TableBody, Button } from '@pankod/refine-mui';
import { Edit as EditIcon } from '@mui/icons-material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { Create as CreateIcon } from '@mui/icons-material';

const Customers = () => {
  const [customers, setCustomers] = useState<Customer[]>([
    {
      CustomerID: "1",
      CustomerName: "John Doe",
      PhoneNumber: "123-4567-8999",
      Email: "test@email.com", 
      PurchaseHistory: "test", 
      AccountBalance: "10,000,000$", 
      ShippingInformation: "123 apple street",
      PreferredCommunicationMethod: "email",
    },
    {
      CustomerID: "2",
      CustomerName: "Kim Erikson",
      PhoneNumber: "123-4567-8999",
      Email: "test@email.com", 
      PurchaseHistory: "test", 
      AccountBalance: "10,000,000$", 
      ShippingInformation: "123 apple street",
      PreferredCommunicationMethod: "email",
    },
  ]);

/* use this rather than test data when ready
  useEffect(() => {
    fetch('http://localhost:8080/api/v1/customers') 
      .then(response => response.json())
      .then(data => setCustomers(data));
  }, []); */

  const deleteCustomer = (id: string) => {
    // Implement the logic for deleting a product
  };

  const columns = [
    {
      id: 'id',
      label: 'id',
      format: (value: any, record: Customer) => record.CustomerID
    },
    {
      id: 'name',
      label: 'Name',
      format: (value: any, record: Customer) => record.CustomerName
    },
    {
      id: 'phone number', //change?
      label: 'phone number',
      format: (value: any, record: Customer) => record.PhoneNumber
    },
    {
      id: 'email',
      label: 'email',
      format: (value: any, record: Customer) => record.Email
    },
    {
      id: 'purchase history', //change?
      label: 'purchase history',
      format: (value: any, record: Customer) => record.PurchaseHistory
    },
    {
      id: 'account balance',
      label: 'account balance',
      format: (value: any, record: Customer) => record.AccountBalance
    },
    {
      id: 'shipping information',
      label: 'shipping information',
      format: (value: any, record: Customer) => record.ShippingInformation
    },
    {
      id: 'preferred communication method',
      label: 'preferred communication method',
      format: (value: any, record: Customer) => record.PreferredCommunicationMethod
    },
    {
      id: 'actions',
      label: 'Actions',
      format: (value: any, record: Customer) => (
        <div>
          <Link to={`/edit-product/${record.CustomerID}`}>
            <Button variant="outlined" startIcon={<EditIcon />}>
              Edit
            </Button>
          </Link>
          <Button variant="outlined" color="secondary" startIcon={<DeleteIcon />} onClick={() => deleteCustomer(record.CustomerID)}>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Customers</h1>
        <Link to="/create-product">
          <Button variant="contained" color="primary" startIcon={<CreateIcon />}>
            Create Customer
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
          {customers.map((customer) => (
            <TableRow key={customer.CustomerID}>
              {columns.map((column) => (
                <TableCell key={column.id}>{column.format ? column.format(customer[column.id], customer) : customer[column.id]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Customers;

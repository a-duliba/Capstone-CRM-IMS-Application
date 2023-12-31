import React, { useEffect, useState } from 'react';
import { Customer } from 'interfaces/customers';
import { Table, TableCell, TableHead, TableRow, TableBody, TableContainer, Paper, TablePagination } from '@mui/material';
import { Edit as EditIcon } from '@mui/icons-material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { Add } from "@mui/icons-material";
import { useNavigate } from '@pankod/refine-react-router-v6'; 
import {CustomButton } from "components";
import EditButton from 'components/common/EditButton';
import DeleteButton from 'components/common/DeleteButton';

const Customers = () => {
  const [customers, setCustomers] = useState<Customer[]>([ ]);

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

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/customers') 
      .then(response => response.json())
      .then(data => setCustomers(data));
  }, []); 

  const deleteCustomer = (id: string) => {
    fetch(`http://localhost:8080/api/v1/customers/${id}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {
      // Update the customers state to remove the deleted customer
      setCustomers(customers.filter(customer => customer._id !== id));
    });
  };

  const columns = [
    {
      id: '_id',
      label: 'ID',
      format: (value: any, record: Customer) => record._id
    },
    {
      id: 'name',
      label: 'Name',
      format: (value: any, record: Customer) => record.CustomerName
    },
    {
      id: 'phone number', //change?
      label: 'Phone Number',
      format: (value: any, record: Customer) => record.PhoneNumber
    },
    {
      id: 'email',
      label: 'Email',
      format: (value: any, record: Customer) => record.Email
    },
    {
      id: 'purchase history', //change?
      label: 'Purchase History',
      format: (value: any, record: Customer) => record.PurchaseHistory
    },
    {
      id: 'account balance',
      label: 'Account Balance',
      format: (value: any, record: Customer) => record.AccountBalance
    },
    {
      id: 'shipping information',
      label: 'Shipping Information',
      format: (value: any, record: Customer) => record.ShippingInformation
    },
    {
      id: 'preferred communication method',
      label: 'Preferred Communication Method',
      format: (value: any, record: Customer) => record.PreferredCommunicationMethod
    },
    {
      id: 'actions',
      label: 'Actions', 
      format: (value: any, record: Customer) => (
        <div style={{ display: 'flex', gap: '8px' }}>
        <EditButton
          title="Edit"
          handleClick={() => navigate(`/customers/edit`, { state: { customer: record } })} 
          backgroundColor="#475be8"
          color="#fcfcfc"
          icon={<EditIcon />}
          data={record}
        />
        <DeleteButton
          title="Delete"
          handleClick={() => deleteCustomer(record._id)}
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
        <h1>Customers</h1>
          <CustomButton
            title="Add Customer"
            handleClick={() => navigate("/customers/create")}
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
            {customers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((customer) => (
              <TableRow key={customer._id}>
                {columns.map((column) => (
                  <TableCell key={column.id}>{column.format ? column.format(customer[column.id], customer) : customer[column.id]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={customers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
};

export default Customers;

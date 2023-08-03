import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Product } from 'interfaces/products';
import { Customer } from 'interfaces/customers';
import { TextField, Button } from '@mui/material';
import { useGetIdentity } from "@pankod/refine-core";
import { FieldValues, useForm } from "@pankod/refine-react-hook-form";
import { useNavigate } from "@pankod/refine-react-router-v6"; 

import CustomerForm from 'components/common/CustomerForm';

const EditCustomer = () => {
  
  const { CustomerID } = useParams<{ CustomerID: string }>();
  const [customer, setCustomer] = useState<Customer | null>(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/v1/customers/${CustomerID}`)
      .then(response => response.json())
      .then(data => setCustomer(data));
  }, [CustomerID]);

  const { data: user } = useGetIdentity();
  const {
      refineCore: { onFinish, formLoading },
      register,
      handleSubmit,
  } = useForm(); 
 

  const onFinishHandler = async (data: FieldValues) => {

    const response = await fetch(`/api/v1/customers/${CustomerID}`, { 
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  
    if (response.ok) {
      const responseData = await response.json();
      console.log(responseData);
    } else {
      console.error('Failed to send customer data');
    }
  };

  const handleSave = async (data: Product) => {
    // Implement the logic for creating a product
  };


  return (
    <CustomerForm
          type="Edit"
          register={register}
          onFinish={onFinish}
          formLoading={formLoading}
          handleSubmit={handleSubmit}
          onFinishHandler={onFinishHandler}
          // @ts-ignore
          customer={customer}
      />
  );
};

export default EditCustomer;

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

  const { id } = useParams();
  const [customer, setCustomer] = useState<Customer>();

  useEffect(() => {
    fetch(`http://localhost:8080/api/v1/customers/${id}`)
      .then(response => response.json())
      .then(data => setCustomer(data));
  }, [id]);
 
  const {
      refineCore: { onFinish, formLoading },
      register,
      handleSubmit,
  } = useForm(); 
 

  const onFinishHandler = async (data: FieldValues) => {
    await fetch(`http://localhost:8080/api/v1/customers/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    });
  };

  return (
    <CustomerForm
    type="Edit"
    register={register}
    onFinish={onFinish}
    formLoading={formLoading}
    handleSubmit={handleSubmit}
    onFinishHandler={onFinishHandler}
    defaultValues={customer}
      />
  );
};

export default EditCustomer;

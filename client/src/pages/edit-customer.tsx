import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom'; // Import useLocation
import { Customer } from 'interfaces/customers';
import { TextField, Button } from '@mui/material';
import { useGetIdentity } from "@pankod/refine-core";
import { FieldValues, useForm } from "@pankod/refine-react-hook-form";
import { useNavigate } from "@pankod/refine-react-router-v6"; 

import CustomerForm from 'components/common/CustomerForm';

const EditCustomer = () => {
  // Fetch the location state using useLocation and cast to the desired type
  const location = useLocation() as { state: { customer?: Customer } };
  const customerData: Customer | undefined = location.state?.customer;

  const {
    refineCore: { onFinish, formLoading },
    register,
    handleSubmit,
  } = useForm(); 

  const onFinishHandler = async (data: FieldValues) => {
    // Add your logic to handle form submission here
  };

  return (
    <CustomerForm
      type="Edit"
      register={register}
      onFinish={onFinish}
      formLoading={formLoading}
      handleSubmit={handleSubmit}
      onFinishHandler={onFinishHandler}
      initialData={customerData} // Pass the customerData to the CustomerForm component
    />
  );
};

export default EditCustomer;

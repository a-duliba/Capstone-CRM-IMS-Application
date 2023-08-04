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
 
  const {
      refineCore: { onFinish, formLoading },
      register,
      handleSubmit,
  } = useForm(); 
 

  const onFinishHandler = async (data: FieldValues) => {

  };

  return (
    <CustomerForm
    type="Edit"
    register={register}
    onFinish={onFinish}
    formLoading={formLoading}
    handleSubmit={handleSubmit}
    onFinishHandler={onFinishHandler}
      />
  );
};

export default EditCustomer;

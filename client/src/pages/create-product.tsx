import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Product } from 'interfaces/products';
import { TextField, Button } from '@mui/material';
import { useGetIdentity } from "@pankod/refine-core";
import { FieldValues, useForm } from "@pankod/refine-react-hook-form";
import { useNavigate } from "@pankod/refine-react-router-v6"; 
import Form from "components/common/Form";
import axios from 'axios';

const CreateProduct = () => {

  const navigate = useNavigate();

  const {
    refineCore: { onFinish, formLoading },
    register,
    handleSubmit,
} = useForm(); 

const onFinishHandler = async (data: FieldValues) => {
  try {
      const response = await axios.post('http://localhost:8080/api/v1/products', data);
      if (response.status >= 200 && response.status < 300) {
          navigate('/products');
      } else {
          console.log(response.data);
      }
  } catch (error: any) {
      if (error.response) {
          console.error('Error', error.response.status, error.response.data);
      } else if (error.request) {
          console.error('Error', error.request);
      } else {
          console.error('Error', error.message);
      }
  }
};

  return (
    <Form
    type="Create"
    register={register}
    onFinish={onFinish}
    formLoading={formLoading}
    handleSubmit={handleSubmit}
    onFinishHandler={onFinishHandler}
    />
  );
};

export default CreateProduct;

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Product } from 'interfaces/products';
import { TextField, Button } from '@mui/material';
import { useGetIdentity } from "@pankod/refine-core";
import { FieldValues, useForm } from "@pankod/refine-react-hook-form";
import { useNavigate } from "@pankod/refine-react-router-v6"; 

import Form from "components/common/Form";

const EditProduct = () => {
  
  /*
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const { register, handleSubmit, formState: { isSubmitting } } = useForm();

  useEffect(() => {
    fetch(`http://localhost:8080/api/v1/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data));
  }, [id]); 
  
  const navigate = useNavigate(); */

  const { data: user } = useGetIdentity();
  const {
      refineCore: { onFinish, formLoading },
      register,
      handleSubmit,
  } = useForm(); 
 

  const onFinishHandler = async (data: FieldValues) => {

    const response = await fetch('/api/v1/products', { //replace with actual
      method: 'POST',
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
    <Form
          type="Edit"
          register={register}
          onFinish={onFinish}
          formLoading={formLoading}
          handleSubmit={handleSubmit}
          onFinishHandler={onFinishHandler}
      />
  );
};

export default EditProduct;

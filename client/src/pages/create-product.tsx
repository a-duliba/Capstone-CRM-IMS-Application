/*
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Product } from 'interfaces/products';
import { TextField, Button } from '@mui/material';
import { useGetIdentity } from "@pankod/refine-core";
import { FieldValues, useForm } from "@pankod/refine-react-hook-form";
import { useNavigate } from "@pankod/refine-react-router-v6"; 
import Form from "components/common/Form";
import axios from 'axios';
*/

import React, { ChangeEvent, FormEvent, useState } from 'react'; // Add ChangeEvent and FormEvent here
import Form from 'components/common/Form';

const CreateProduct = () => {
  const [productData, setProductData] = useState({
    ProductID: '',
    ProductName: '',
    ProductDescription: '',
    ProductPrice: '',
    ProductQuantity: ''
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (data: FormEvent<HTMLFormElement>) => {
    const response = await fetch('/api/v1/products', {
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
      console.error('Failed to send product data');
    }
  };

  return (
    <Form
      type="Create"
      register={handleInputChange}
      handleSubmit={handleSubmit}
      formLoading={false}
      onFinishHandler={handleSubmit}
      onInputChange={handleInputChange} // Add this line
    />
  );
};

export default CreateProduct;

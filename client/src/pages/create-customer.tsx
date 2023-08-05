import { FieldValues, useForm } from "@pankod/refine-react-hook-form";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import CustomerForm from 'components/common/CustomerForm';

const CreateCustomer = () => {
  const navigate = useNavigate();

  const {
      refineCore: { onFinish, formLoading },
      register,
      handleSubmit,
  } = useForm(); 

  const onFinishHandler = async (data: FieldValues) => {
    try {
        const response = await axios.post('http://localhost:8080/api/v1/customers', data);
        if (response.status >= 200 && response.status < 300) {
            navigate('/customers');
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
    <CustomerForm
          type="Create"
          register={register}
          onFinish={onFinish}
          formLoading={formLoading}
          handleSubmit={handleSubmit}
          onFinishHandler={onFinishHandler}
      />
  );
};

export default CreateCustomer;
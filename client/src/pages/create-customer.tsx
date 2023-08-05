import { FieldValues, useForm } from "@pankod/refine-react-hook-form";

import CustomerForm from 'components/common/CustomerForm';

const CreateCustomer = () => {

  const {
      refineCore: { onFinish, formLoading },
      register,
      handleSubmit,
  } = useForm(); 

  const onFinishHandler = async (data: FieldValues) => {

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
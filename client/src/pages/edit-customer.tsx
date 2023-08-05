import { useLocation } from 'react-router-dom';
import { Customer, FormValues } from 'interfaces/customers';
import { FieldValues, useForm } from "@pankod/refine-react-hook-form";
import CustomerForm from 'components/common/CustomerForm';

const EditCustomer = () => {

  const location = useLocation() as { state: { customer?: Customer } };
  const customerData: Customer | undefined = location.state?.customer;

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
      initialData={customerData}
    />
  );
};

export default EditCustomer;

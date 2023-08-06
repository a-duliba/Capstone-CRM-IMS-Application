import { useLocation } from 'react-router-dom';
import { Customer } from 'interfaces/customers';
import { FieldValues, useForm } from "@pankod/refine-react-hook-form";
import CustomerForm from 'components/common/CustomerForm';
import { useNavigate } from 'react-router-dom';

const EditCustomer = () => {

  const location = useLocation() as { state: { customer?: Customer } };
  const customerData: Customer | undefined = location.state?.customer;
  const navigate = useNavigate();

  const {
    refineCore: { onFinish, formLoading },
    register,
    handleSubmit,
  } = useForm();


  const onFinishHandler = async (data: FieldValues) => {
    if (!customerData) {
      console.error('No customer data');
      return;
    }
  
    try {
      await fetch(`http://localhost:8080/api/v1/customers/${customerData._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      navigate('/customers');
    } catch (error) {
      console.error(error);
    }
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

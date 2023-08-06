import { FieldValues, useForm } from "@pankod/refine-react-hook-form";
import { useNavigate } from "@pankod/refine-react-router-v6"; 
import { useLocation } from 'react-router-dom';
import { Product } from 'interfaces/products';
import Form from "components/common/Form";

const EditProduct = () => {

  const location = useLocation() as { state: { product?: Product } };
  const productData: Product | undefined = location.state?.product;
  const navigate = useNavigate();

  const {
      refineCore: { onFinish, formLoading },
      register,
      handleSubmit,
  } = useForm(); 
 

  const onFinishHandler = async (data: FieldValues) => {
    if (!productData) {
      console.error('No product data');
      return;
    }

    try {
      await fetch(`http://localhost:8080/api/v1/products/${productData._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      navigate('/products');
    } catch (error) {
      console.error(error);
    }
};

  return (
    <Form
          type="Edit"
          register={register}
          onFinish={onFinish}
          formLoading={formLoading}
          handleSubmit={handleSubmit}
          onFinishHandler={onFinishHandler}
          initialData={productData}
      />
  );
};

export default EditProduct;

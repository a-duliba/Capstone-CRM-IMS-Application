/* eslint-disable no-plusplus */
import { FormValues } from 'interfaces/products';

export const validateForm = (formValues: FormValues) => {
  const errors: { message: string } = { message: '' };
  let hasError = false;

  Object.keys(formValues).forEach((key) => {
    switch (key) {
      case 'name':
        if (!formValues.name) {
          errors.message = 'Name is required';
          hasError = true;
        }
        break;

      case 'description':
        if (!formValues.description) {
          errors.message = 'Description is required';
          hasError = true;
        }
        break;

      case 'price':
        if (!formValues.price) {
          errors.message = 'Price type is required';
          hasError = true;
        }
        break;

      case 'quantity':
        if (!formValues.quantity) {
          errors.message = 'Quantity is required';
          hasError = true;
        }
        break;

      default:
        hasError = false;
    }
  });

  return { hasError, errors };
};

export const hasChanged = (initialValues: FormValues, currentValues: FormValues) => {
  const initialValuesArray = Object.values(initialValues);
  const currentValuesArray = Object.values(currentValues);
  for (let i = 0; i < initialValuesArray.length; i++) {
    if (initialValuesArray[i] !== currentValuesArray[i]) {
      return true;
    }
  }
  return false;
};
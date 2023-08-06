export interface Product {
    ProductName: string;
    ProductDescription: string;
    ProductPrice: Number;
    ProductQuantity: Number;
    ProductCategory: string;
    yearlyTotalSoldUnits: Number;
    yearlySalesTotal: Number;


    [key: string]: any; 
}

  export interface FormValues {
    name: string,
    description: string,
    price: string,
    quantity: string,

}

export interface FormProps {
  type: string,
  register: any,
  onFinish?: (values: FieldValues) => Promise<void | CreateResponse<BaseRecord> | UpdateResponse<BaseRecord>>,
  formLoading: boolean,
  handleSubmit: FormEventHandler<HTMLFormElement> | undefined,
  onFinishHandler: (data: FieldValues) => Promise<void> | void,
  initialData?: Product; 
}

export interface CustomButtonProps {
  type?: string,
  title: string,
  backgroundColor: string,
  color: string,
  fullWidth?: boolean,
  icon?: ReactNode,
  disabled?: boolean,
  handleClick?: (data?: any) => void
  data?: any
}

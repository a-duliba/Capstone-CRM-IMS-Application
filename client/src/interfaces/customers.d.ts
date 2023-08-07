export interface Customer {
    CustomerName: string,
    PhoneNumber: string,
    Email: string, 
    PurchaseHistory: string, 
    AccountBalance: string, 
    ShippingInformation: string,
    PreferredCommunicationMethod: string,

    [key: string]: any; 
  }

  export interface FormValues {
    CustomerName: string,
    PhoneNumber: string,
    Email: string, 
    PurchaseHistory: string, 
    AccountBalance: string, 
    ShippingInformation: string,
    PreferredCommunicationMethod: string,
}

export interface FormProps {
  type: string,
  register: any,
  onFinish?: (values: FieldValues) => Promise<void | CreateResponse<BaseRecord> | UpdateResponse<BaseRecord>>,
  formLoading: boolean,
  handleSubmit: FormEventHandler<HTMLFormElement> | undefined,
  onFinishHandler: (data: FieldValues) => Promise<void> | void,
  initialData?: Customer; 
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

  
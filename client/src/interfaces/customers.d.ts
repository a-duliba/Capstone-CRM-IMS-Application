export interface Customer {
    CustomerID: string,
    CustomerName: string,
    PhoneNumber: string,
    Email: string, 
    PurchaseHistory: string, 
    AccountBalance: string, 
    ShippingInformation: string,
    PreferredCommunicationMethod: string,

    [key: string]: any; //Index signature to allow any string as an index
  }

  export interface FormValues {
    CustomerID: string,
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
  onInputChange?: (event: ChangeEvent<HTMLInputElement>) => void, 
  customer?: Customer; //imports all the stuff from Customer above
}
  
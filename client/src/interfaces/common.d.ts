import { Product } from "./products"

export interface CustomButtonProps {
    type?: string,
    title: string,
    backgroundColor: string,
    color: string,
    fullWidth?: boolean,
    icon?: ReactNode,
    disabled?: boolean,
    handleClick?: () => void
}

export interface ProfileProps {
    type: string,
    name: string,
    avatar: string,
    email: string,
    properties: Array | undefined
}

export interface PropertyProps {
    _id: string,
    title: string,
    description: string,
    location: string,
    price: string,
    photo: string,
    creator: string
}

export interface FormProps {
    type: string,
    register: any,
    onFinish?: (values: FieldValues) => Promise<void | CreateResponse<BaseRecord> | UpdateResponse<BaseRecord>>,
    formLoading: boolean,
    handleSubmit: FormEventHandler<HTMLFormElement> | undefined,
    onFinishHandler: (data: FieldValues) => Promise<void> | void,
    defaultValues?: CustomerValues;
}

export interface CustomerValues {
    CustomerName?: string;
    PhoneNumber?: string;
    Email?: string;
    PurchaseHistory?: string;
    AccountBalance?: string;
    ShippingInformation?: string;
    PreferredCommunicationMethod?: string;
  }

export interface SalesData {
    totalRevenue: number;
    predictedSales: number;
    // Include other properties if needed
  }
  

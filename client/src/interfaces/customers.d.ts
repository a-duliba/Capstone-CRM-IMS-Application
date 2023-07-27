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
  
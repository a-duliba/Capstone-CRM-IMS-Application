export interface Product {
    ProductID: string;
    ProductName: string;
    ProductDescription: string;
    ProductPrice: string;
    ProductQuantity: string;

    [key: string]: any; //Index signature to allow any string as an index
  }

  export interface ProductCardProps {
    ProductID?: BaseKey | undefined,
    ProductName: string;
    ProductDescription: string;
    ProductPrice: string;
    ProductQuantity: string;
  }
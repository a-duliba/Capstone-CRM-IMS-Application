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

  export interface FormValues {
    name: string,
    description: string,
    price: string,
    quantity: string,
    //price: number | undefined,
}

/*
  import { BaseKey } from '@pankod/refine-core';

export interface FormFieldProp {
  title: string,
  labelName: string
}

export interface FormValues {
    title: string,
    description: string,
    propertyType: string,
    location: string,
    price: number | undefined,
}

export interface PropertyCardProps {
  id?: BaseKey | undefined,
  title: string,
  location: string,
  price: string,
  photo: string,
}

export interface ProductCardProps {
  ProductID?: BaseKey | undefined,
  ProductName: string;
  ProductDescription: string;
  ProductPrice: string;
  ProductQuantity: string;
  */
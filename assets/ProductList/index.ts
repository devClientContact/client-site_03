export interface ProductList {
  productName: string;
  description: string;
  imageURL: string | string[];
  price: number;
}
export const products: ProductList[] = [
  {
    productName: "",
    description: "test01",
    imageURL: "",
    price: 0.00,
  },
  {
    productName: "",
    description: "test02",
    imageURL: "",
    price: 0.00,
  },
];

import { Product } from './product.interface';

export interface AllProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

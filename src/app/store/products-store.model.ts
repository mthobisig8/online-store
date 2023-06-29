import { Product } from '../models/product.interface';

export class ProductsModel {
  allProducts!: Product[];
  selectedProduct: Product | undefined;
}

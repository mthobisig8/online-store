import { Product } from '../models/product.interface';

export class LoadAllProductsAction {
  static readonly type = '[AllProducts] Load';
}

export class SetSelectedProductAction {
  static readonly type = '[SelectedProduct] Set';
  constructor(public product: Product) {}
}

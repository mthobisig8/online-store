import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Product } from '../models/product.interface';
import { Observable } from 'rxjs';
import { ProductsState } from './products-store.state';
import {
  LoadAllProductsAction,
  SetSelectedProductAction,
} from './products-store.actions';

@Injectable({
  providedIn: 'root',
})
export class ProductsStoreService {
  constructor(private store: Store) {}

  // Selectors
  getProducts(): Observable<Product[]> {
    return this.store.select(ProductsState.selectAllProducts);
  }

  getProduct(): Observable<Product | undefined> {
    return this.store.select(ProductsState.selectProduct);
  }

  // Dispatch
  loadProducts(): void {
    this.store.dispatch(new LoadAllProductsAction());
  }

  setProduct(product: Product): void {
    this.store.dispatch(new SetSelectedProductAction(product));
  }
}

import { Injectable } from '@angular/core';
import { ProductsModel } from './products-store.model';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { HttpClientService } from '../services/http-client.service';
import {
  LoadAllProductsAction,
  SetSelectedProductAction,
} from './products-store.actions';
import { AllProductsResponse } from '../models/all-products-response.interface';

@State<ProductsModel>({
  name: 'productsState',
  defaults: {
    allProducts: [],
    selectedProduct: undefined,
  },
})
@Injectable({
  providedIn: 'root',
})
export class ProductsState {
  constructor(private _httpService: HttpClientService) {}

  // SELECTORS
  @Selector()
  static selectAllProducts(state: ProductsModel) {
    return state.allProducts;
  }

  @Selector()
  static selectProduct(state: ProductsModel) {
    return state.selectedProduct;
  }

  //Actions
  @Action(LoadAllProductsAction)
  fetchProducts(ctx: StateContext<ProductsModel>) {
    const state = ctx.getState();
    return this._httpService
      .getProducts()
      .subscribe((response: AllProductsResponse) => {
        ctx.setState({
          ...state,
          allProducts: response.products,
        });
      });
  }

  //Action
  @Action(SetSelectedProductAction)
  setProduct(
    ctx: StateContext<ProductsModel>,
    action: SetSelectedProductAction
  ) {
    const state = ctx.getState();
    return ctx.setState({
      ...state,
      selectedProduct: action.product,
    });
  }
}

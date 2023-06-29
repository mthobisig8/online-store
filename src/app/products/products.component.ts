import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.interface';
import { ProductsStoreService } from '../store/products-store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  constructor(private _storeService: ProductsStoreService) {}
  ngOnInit(): void {
    this._storeService.loadProducts(); //dispatch an action
    this._storeService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  onBuyClick(product: Product) {
    this._storeService.setProduct(product);
    console.log(product.id);
  }
}

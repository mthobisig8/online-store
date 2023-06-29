import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.interface';
import { ProductsStoreService } from '../store/products-store.service';

@Component({
  selector: 'app-singe-item',
  templateUrl: './singe-item.component.html',
  styleUrls: ['./singe-item.component.scss'],
})
export class SingeItemComponent implements OnInit {
  singleProduct?: Product;
  constructor(private _storeProduct: ProductsStoreService) {}
  ngOnInit(): void {
    this._storeProduct.getProduct().subscribe((res) => {
      this.singleProduct = res;
    });
  }
}

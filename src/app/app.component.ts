import { Component, OnInit } from '@angular/core';
import { HttpClientService } from './services/http-client.service';
import { Product } from './models/product.interface';
import { ProductsStoreService } from './store/products-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}

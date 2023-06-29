import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllProductsResponse } from '../models/all-products-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  private readonly baseUrl: string = 'https://dummyjson.com';
  constructor(private _http: HttpClient) {}

  getProducts(): Observable<AllProductsResponse> {
    return this._http.get<AllProductsResponse>(`${this.baseUrl}/products`);
  }
}

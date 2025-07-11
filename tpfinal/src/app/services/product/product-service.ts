import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface iProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  url: string = 'https://fakestoreapi.com/products';

  getProductos(): Observable<iProduct[]> {
    return this.http.get<iProduct[]>(this.url);
  }

  getProducto(id: string): Observable<iProduct> {
    return this.http.get<iProduct>(`${this.url}/${id}`);
  }
}

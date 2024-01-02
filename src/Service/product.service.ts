import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Models/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Product[]>{

    return this.httpClient.get<Product[]> ("http://localhost:3000/products")
  }
  getById(id:number):Observable<Product>{
         return this.httpClient.get<Product>(`http://localhost:3000/products/${id}`)

  }
}

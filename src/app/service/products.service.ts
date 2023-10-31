import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../models/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private bddUrl ='http://localhost:3000/api/produit'

  constructor(private Http : HttpClient) { }
  getProducts(): Observable<Products[]> {
    return  this.Http.get<Products[]>("http://localhost:3000/api/produit");
  }

  addProduct(product: Products){
    return this.Http.post<Products>(this.bddUrl, product)
  }
  updateProduct(product: Products){
    return this.Http.patch<Products>(this.bddUrl, product)
  }
}


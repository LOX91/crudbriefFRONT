import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../models/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private bddUrl = 'http://localhost:3000/api/produit';

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('access_token');
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', 'Bearer ' + token);
    }
    return headers;
  }

  constructor(private Http: HttpClient) {}

  getProducts(): Observable<Products[]> {
    return this.Http.get<Products[]>('http://localhost:3000/api/produit');
  }

  getProductById(id: number): Observable<Products> {
    return this.Http.get<Products>(`${this.bddUrl}/${id}`);
  }

  addProduct(product: Products):Observable<Products>{
    const headers = new HttpHeaders({
      Authorisation: 'Bearer ' + localStorage.getItem('access_token'),
    });
    return this.Http.post<Products>(
    'http://localhost:3000/api/produit', product,{ headers: headers },
    );

    }
  updateProduct(id: number, product: Products):Observable<Products> {


    return this.Http.patch<Products>(`http://localhost:3000/api/produit/${id}`, product,{ headers: this.getHeaders() }
    );
  }
  removeProduct(id: number) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('access_token'),
    });
    return this.Http.delete(`http://localhost:3000/api/produit/${id}`,{
      headers:headers,
    });
  }
}
function newHttpHeaders(arg0: {}) {
  throw new Error('Function not implemented.');
}

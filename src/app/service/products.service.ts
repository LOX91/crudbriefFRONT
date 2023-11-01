import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../models/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private bddUrl = 'http://localhost:3000/api/produit';

  constructor(private Http: HttpClient) {}
  setHeader(){

    const jwtToken=localStorage.getItem('token');
    const headers=new HttpHeaders({


    })
  }




  getProducts(): Observable<Products[]> {
    return this.Http.get<Products[]>('http://localhost:3000/api/produit');
  }

  getProductById(id: number):Observable<Products> {
    return this.Http.get<Products>(`${this.bddUrl}/${id}`);
  }

  addProduct(product: Products) {
    return this.Http.post<Products>(this.bddUrl, product,);
  }
  updateProduct(id:number,product: Products)
   {console.log("remy est gentil",id,product);
    return this.Http.patch<Products>(`${this.bddUrl}/${id}`, product);
  }
  removeProduct(id: number) {
    return this.Http.delete(`${this.bddUrl}/${id}`);
  }
}
function newHttpHeaders(arg0: {}) {
  throw new Error('Function not implemented.');
}


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private bddUrl ='http://localhost:3000/api/categorie'

  constructor(private Http : HttpClient) { }
  getCategories(): Observable<Category[]> {
    return  this.Http.get<Category[]>(this.bddUrl);
  }


}

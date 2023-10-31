import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private bddURL = 'http://localhost:3000/api';



  constructor(private http: HttpClient) { }
  login(utilisateur:Login):Observable<Token>{

  return this.http.post<Token>(`${this.bddURL}/auth/login`,utilisateur);
  };
}


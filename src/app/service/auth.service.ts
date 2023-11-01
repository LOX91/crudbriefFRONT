import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // rajout le 1 11 a 12 03
  estConnecte: boolean = false;
  connecterUtilisateur(){
    this.estConnecte = true;
    // deconnecterUtilisateur() {
    //   // Logique de déconnexion
    //   this.estConnecte = false;
  }

  private bddUrl = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  login(email:string, mot_de_passe: string){
    return this.http.post<{accessToken:string}>(this.bddUrl+ '/auth/login', {email, mot_de_passe})
  }
}

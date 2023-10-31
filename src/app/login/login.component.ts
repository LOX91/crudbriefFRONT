import { Component } from '@angular/core';
import { UtilisateurService } from '../service/utilisateur.service';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email!: string;
  password!: string;
  constructor (private authService  : AuthService,
    private router: Router ) { }


OnConnect() {
  console.log('Tentative de connexion');
  console.log('Email:', this.email);
  console.log('MDP : ', this.password);

    this.authService.login(this.email, this.password).subscribe({

      next: (response: any) => {
        console.log('Réponse complète du serveur :', response)
        console.log('Contenu de data', response.data);

        if (response && response.access_token && response.access_token.token) {
          const token = response.access_token.token
          // Stocker le token dans le localStorage
          localStorage.setItem('access_token', token);

          if (response.email) {
            localStorage.setItem('user_email', response.data.email);
          }
          console.log('Connexion réussie et token stocké!');
          console.log(response);
          alert('Vous êtes maintenant connecté !')
          this.router.navigate(['/admin'])
        } else {
          console.error('Token non reçu dans la réponse.');
        }
      },
      error: (error: any) => {
        console.error('Erreur lors de la connexion:', error);

      }
    });

}
}

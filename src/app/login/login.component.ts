import { Component } from '@angular/core';
import { UtilisateurService } from '../service/utilisateur.service';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // loginForm: FormGroup

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
        console.log('Contenu de data', response.accessToken);

        if (response.accessToken) {
          const token = response.accessToken
          // Stocker le token dans le localStorage
          localStorage.setItem('token', token);
          localStorage.setItem('user_email', this.email);

          console.log('Connexion réussie et token stocké!');
          console.log(response)
          this.router.navigate(['/home']);
           alert('Vous êtes maintenant connecté !')
          return
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

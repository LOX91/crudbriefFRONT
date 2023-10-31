import { Component } from '@angular/core';
import { Products } from 'src/app/models/products';
import { Utilisateur } from 'src/app/models/utilisateurs';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  utilisateur!: Utilisateur;
productsToDisplay: Products[]= [];
token : boolean = false

constructor(private productsService:ProductsService){}

ngOnInit():void {

  this.productsService.getProducts().subscribe((products) => {

    this.productsToDisplay = products;
    console.log(this.productsToDisplay);
  });
  if (localStorage.getItem("token")) {
    this.token = true
    return;

  }
}
}

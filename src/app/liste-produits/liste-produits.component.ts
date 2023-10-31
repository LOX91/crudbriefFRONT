import { Component } from '@angular/core';
import { Utilisateur } from '../models/utilisateurs';
import { ProductsService } from '../service/products.service';
import { Products } from '../models/products';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent {
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


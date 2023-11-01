import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../service/products.service';
import { Products } from '../models/products';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent {
  produit!: Products;
  constructor(
    private route: ActivatedRoute,
    private produitService: ProductsService,
    private router: Router
  ) {}

  ngOnInit() {
    const idProduitFromRoute = Number(this.route.snapshot.paramMap.get('id'));
    console.log(idProduitFromRoute);
    this.produitService
      .getProductById(idProduitFromRoute)
      .subscribe((produit) => {
        this.produit = produit;
        console.log(this.produit);
      });
  }
  onDelete() {
    this.produitService.removeProduct(this.produit.id!).subscribe((reponse)=>{
this.router.navigate(["/home"])
    })
  }

}

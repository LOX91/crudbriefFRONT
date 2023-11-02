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
    this.produitService.removeProduct(this.produit.id!).subscribe({
      next:
      (data)=>{
      alert('produit supprimé avec succes')
      this.router.navigate(['/home'])
    },
    error: (error)=>{
      if (error.status === 401){
        alert("vous n'avez pas la permission de supprimer ce produit ! Merci de vous connecter !");
      }else {
        alert("une erreur s'est produite lors de la mise à jour");
      }
    },
  })
  }

}

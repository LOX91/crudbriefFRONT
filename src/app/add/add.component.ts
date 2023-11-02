import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../service/products.service';
import { CategorieService } from '../service/categorie.service';
import { Category } from '../models/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

productForm!: FormGroup;
categories: Category[]=[];

constructor(private productService: ProductsService, private categorieService: CategorieService, private router:Router){}

ngOnInit(){
  this.loadCategories()
  this.productForm = new FormGroup({
    nom: new FormControl('', Validators.required),
    prix: new FormControl(null, Validators.required),
    quantite: new FormControl(null, Validators.required),
    id_categorie: new FormControl(null, Validators.required)
  })
}

addProduct(){
  if(this.productForm.valid){
    this.productService.addProduct(this.productForm.value).subscribe({
      next:
      (data)=>{
      alert('produit ajouté avec succes')
      this.router.navigate(['/home'])
    },
    error: (error)=>{
      if (error.status === 401){
        alert("vous n'avez pas la permission de créer un produit ! Merci de vous connecter !");
      }else {
        alert("une erreur s'est produite lors de la mise à jour");
      }
    },
  })
  }
}

loadCategories(){
  this.categorieService.getCategories().subscribe(data=>{
    console.log(data)
    this.categories=data;
  })
}
}

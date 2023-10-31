import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../service/products.service';
import { CategorieService } from '../service/categorie.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

productForm!: FormGroup;
categories: Category[]=[];

constructor(private productService: ProductsService, private categorieService: CategorieService){}

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
    this.productService.addProduct(this.productForm.value).subscribe(data=>{
      alert('produit ajouter avec succes')
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

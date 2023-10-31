import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../models/category';
import { ProductsService } from '../service/products.service';
import { CategorieService } from '../service/categorie.service';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent {

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

  updateProduct(){
    if(this.productForm.valid){
      this.productService.updateProduct(this.productForm.value).subscribe(data=>{
        alert('produit modifié avec succes')
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


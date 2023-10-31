import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../models/category';
import { ProductsService } from '../service/products.service';
import { CategorieService } from '../service/categorie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent implements OnInit {

  productForm!: FormGroup;
  categories: Category[]=[];

  constructor(private productService: ProductsService, private categorieService: CategorieService,private route:ActivatedRoute,private router:Router)
  {this.productForm = new FormGroup({
    nom: new FormControl('', Validators.required),
    prix: new FormControl(null, Validators.required),
    quantite: new FormControl(null, Validators.required),
     id_categorie: new FormControl(null, Validators.required),

  });

  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');









  // ngOnInit(){
  //   // // this.loadCategories()
  //   // // this.productForm = new FormGroup({
  //   // //   nom: new FormControl('', Validators.required),
  //   // //   prix: new FormControl(null, Validators.required),
  //   // //   quantite: new FormControl(null, Validators.required),
  //   // //   id_categorie: new FormControl(null, Validators.required)
  //   // })


// this.updateForm = newFormGroup({
//   nom: new FormControl('', Validators.required),
//   prix: new FormControl(null, Validators.required),
//   quantite: new FormControl(null, Validators.required),
//    id_categorie: new FormControl(null, Validators.required),

const id = this.route.snapshot.queryParams['id'];
this.productService.getProductById(id).subscribe((product)=> {
  console.log(product);
  this.productForm.patchValue(product);

});
this.categorieService.getCategories().subscribe(
  (data) => {
    this.categories = data;

  },
  (error) => {
    console.error('erreur lors de la récupération des catégories:', error);
  }
);
}

updateProduct() {

const id = this.route.snapshot.queryParams['id'];

this.productService.updateProduct(id,this.productForm.value).subscribe(
  () => {

alert('Produit mis à jour avec succès');
this.router.navigate(['/home']);

  },
  (error) => {

    if (error.status === 401){
      alert("vous n'avez pas la permission de modifier ce produit !");

    }else {
      alert("une erreur s'est produite lors de la mise à jour");


    }
    this .router.navigate(['/home']);
  }
)


}



}


  // updateProduct(){
  //   if(this.productForm.valid){
  //     this.productService.updateProduct(this.productForm.value).subscribe(data=>{
  //       alert('produit modifié avec succes')
  //     })
  //   }
  // }

  // loadCategories(){
  //   this.categorieService.getCategories().subscribe(data=>{
  //     console.log(data)
  //     this.categories=data;
  //   })
  // }
  // }


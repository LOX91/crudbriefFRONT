import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './pages/home/home.component';
import { ChangeComponent } from './change/change.component';
import { DeleteComponent } from './delete/delete.component';
import { LoginComponent } from './login/login.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';

const routes: Routes = [{path:'', redirectTo:'home', pathMatch:"full"},

{path:'home', component: HomeComponent},
{path:'les produits', component: ListeProduitsComponent},
{path:'change', component: ChangeComponent},
{path:'add', component: AddComponent},
{path:'delete/:id', component: DeleteComponent},
{path:'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

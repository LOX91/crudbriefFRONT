import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { HomeComponent } from './pages/home/home.component';
import { DeleteComponent } from './delete/delete.component';
import { AddComponent } from './add/add.component';
import { ChangeComponent } from './change/change.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DeleteComponent,
    AddComponent,
    ChangeComponent,
    LoginComponent,
    NavbarComponent,
    ListeProduitsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

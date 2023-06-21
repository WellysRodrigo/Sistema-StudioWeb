import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { LoginComponent } from './login/login.component';
import { ListaclienteComponent } from './listacliente/listacliente.component';

const routes: Routes = [
  {path: 'home-component', component: HomeComponent},
  {path: 'cliente-component', component: ClienteComponent},
  {path: 'login-component', component: LoginComponent},
  {path: 'listacliente-component', component: ListaclienteComponent},
  {path: '', component: HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

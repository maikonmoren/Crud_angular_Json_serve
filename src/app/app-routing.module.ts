import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './components/products/update/update.component';
import { CreateComponent } from './components/products/create/create.component';

import {HomeComponent} from "./views/home/home.component";
import {ProductsComponent} from "./views/products/products.component";
import { DeleteComponent } from './components/products/delete/delete.component';

const routes: Routes = [{
  path:"",
  component: HomeComponent
},
{
  path:"products",
  component: ProductsComponent
},
{
 path:"products/create",
 component: CreateComponent
},
{
  path:"products/update/:id",
  component: UpdateComponent
 },
 {
  path:"products/delete/:id",
  component: DeleteComponent
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

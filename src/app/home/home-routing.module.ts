import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { GraciasComponent } from './pages/gracias/gracias.component';

const routes: Routes = [
  {path:'', children:[
    {path:'', component:ProductsComponent},
    {path:'gracias',component:GraciasComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

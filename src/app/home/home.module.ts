import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ProductsComponent } from './pages/products/products.component';
import { ImageComponent } from './components/image/image.component';
import { CompraComponent } from './components/compra/compra.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { RouterModule } from '@angular/router';
import { GraciasComponent } from './pages/gracias/gracias.component';



@NgModule({
  declarations: [
    ProductsComponent,
    ImageComponent,
    CompraComponent,
    DetallesComponent,
    GraciasComponent
  ],exports:[ProductsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule
  ]
})
export class HomeModule { }

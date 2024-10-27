import { Component } from '@angular/core';
import { MercadopagoService } from '../../services/mercadopago.service';
import { MercadoPago } from '../../interface/interface-mercadopago';




@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  mercado!:MercadoPago;
  url:string = '';
 constructor(private _mercadoService:MercadopagoService){}

ngOnInit(){
  this.producto();
}

 producto(){
  this._mercadoService.getCompra().subscribe( resp => {
    // this.mercado = resp;
    this.url = resp.sandboxInitPoint;
  })
 } 
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { MercadoPago } from '../interface/interface-mercadopago';

@Injectable({
  providedIn: 'root'
})
export class MercadopagoService {

  url:string='http://localhost:8080/api/mercado'
  url2:string='https://pokeapi.co/api/v2/pokemon/ditto'
  constructor(private Http:HttpClient) { }

  getCompra():Observable<MercadoPago>{
    return this.Http.get<MercadoPago>(this.url)
  }
}

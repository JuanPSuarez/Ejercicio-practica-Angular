import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {

  constructor( public productService:ProductosService ) {
    console.log(productService.productos)
  }

  mostrarLista = true;

  mostrarVista(){
    this.mostrarLista=!this.mostrarLista;
  }

}

import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html',
})
export class ProductoListaComponent {

  productos: Producto[];


  constructor(private productoServicio: ProductoService,
    private enrutador:Router
  ) {

  }

  ngOnInit() {
    //cargamos los productos
    this.obtenerProductos();
  }
   obtenerProductos() {
    //consumir los datos subsribirme
    this.productoServicio.obtenerProductosLista().subscribe(
      (datos => {
        this.productos = datos;
      })
    );
  }

 editarProducto(id:number){
    this.enrutador.navigate(['editarProducto',id]);
  }

  eliminarProducto(id: number) {
    this.productoServicio.eliminarProducto(id).subscribe(
      {
        next: (datos)=>this.obtenerProductos(),
        error: (errores)=>console.log(errores) 
      }
    );
  }

  

}

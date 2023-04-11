import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  heroes:string[] =['Spiderman', 'Ironman', 'Thor', 'Superman'];
  heroeBorrado:string = '';

 /* constructor() {
    //antes de la renderización del componente
    console.log('constructor');
   }

  ngOnInit(): void {
    //para inicializar cosas, como cuando hacemos petición a un servicio
    console.log('onInit');
  }*/

  borrarHeroe(){
    //borra el primer elemento del array
    this.heroeBorrado = this.heroes.shift() || '';
  }



}

import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  personajes: Personaje [] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 8500
    }
  ]
    nuevo: Personaje ={
      nombre: 'Maestro',
      poder: 1000
    }
  
    agregarNuevoPersonaje( argumento: Personaje){
      this.personajes.push(argumento);
    }

  cambiarNombre( event : any){
    console.log(event.target.value);
  }

  constructor( private dbzservice: DbzService ) {}

}

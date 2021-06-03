import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  guerreros: string [] = ['Goku', 'Gohan', 'Vegueta', 'Trunks'];
  borrado: string ='';
  borrarGuerrero(){
   this.borrado = this.guerreros.shift() || '';
    
  }
}

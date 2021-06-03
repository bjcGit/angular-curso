import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponet{
    nombre: string = 'Goku';
    edad: number = 512;

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase()
    }

    obtenerNombre(): string{
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): void{
        this.nombre = 'Gogueta'
    }

    cambiarEdad(): void{
        this.edad = 987
    }
}
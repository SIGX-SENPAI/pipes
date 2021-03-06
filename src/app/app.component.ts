import { Component } from '@angular/core';
// import { resolve } from 'url';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Capitan America';
  nombre2: string = 'dEUS eX mAchiNa';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5;
  idioma: string = 'es';

  traducir(idm: string) {
    this.idioma = idm;
  }
  heroe = {
    nombre: 'logan',
    clave: 'wolverine',
    edad: 500,
    direccion: {
      calle: 'Primer',
      casa: 20
    }
  };

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('llego la data');
    }, 4500);
  });
  fecha: Date = new Date();
  videourl: string = 'https://www.youtube.com/embed/ltNimjU-qMU';


  activar: boolean = true;

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  education : Array<any> = [];

  ngOnInit(): void {
    let work1 = {
      fecha: "2019-2022",
      ubicacion: "Cordoba Ver.",
      puesto: "Estudiante",
      empresa: "CBTIS 47",
      logros : [
        { descripcion : "Estudiante de la carrera de Programacion" }
      ]
    };
    let work2 = {
      fecha: "2022-actualidad",
      ubicacion: "Cordoba Ver.",
      puesto: "Estudiante",
      empresa: "Universidad Veracruzana",
      logros : [
        { descripcion : "Estudiante de la carrera de Ingenieria de Software" }
      ]
    };

    this.education.push(work1);
    this.education.push(work2);
    console.log(this.education);
  }

  
}

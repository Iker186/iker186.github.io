import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  workExperience : Array<any> = [];

  ngOnInit(): void {
    let work1 = {
      fecha: "2021",
      ubicacion: "Cordoba Ver.",
      puesto: "Estudiante",
      empresa: "GameStore",
      logros : [
        { descripcion : "Construccion de sitio web" },
        { descripcion : "Conexion a base de datos" }
      ]
    };

    this.workExperience.push(work1);
    console.log(this.workExperience);
  }

  
}

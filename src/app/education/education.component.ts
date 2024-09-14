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
      fecha: "2018-2022",
      ubicacion: "Ixtac Ver.",
      puesto: "CEO",
      empresa: "Waves Lab",
      logros : [
        { descripcion : "Construccion de un ERP en la nube de google" },
        { descripcion : "Creacion de un cluster en hadoop y spark" }
      ]
    };
    let work2 = {
      fecha: "2014-2018",
      ubicacion: "Orizaba Ver.",
      puesto: "CEO",
      empresa: "Kubeet",
      logros : [
        { descripcion : "Construccion de un invernadero hidroponico" },
        { descripcion : "Creacion de un dron autonomo" }
      ]
    };

    this.education.push(work1);
    this.education.push(work2);
    console.log(this.education);
  }

  
}

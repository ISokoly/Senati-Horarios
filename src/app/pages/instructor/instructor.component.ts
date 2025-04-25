import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';

export interface Carreras {
  id: number;
  name: string;
  semestres: number | null; // <--- permite null
  opciones: string[];
}
export const ELEMENT_DATA2: Carreras[] = [
  { id: 1, name: 'Técnico en Electrónica', semestres: null, opciones: ['Editar', 'Deshabilitar'] },
  { id: 2, name: 'Técnico en Mecánica Automotriz', semestres: null, opciones: ['Editar', 'Deshabilitar'] },
  { id: 3, name: 'Técnico en Computación', semestres: null, opciones: ['Editar', 'Deshabilitar'] },
  { id: 4, name: 'Técnico en Electromecánica', semestres: null, opciones: ['Editar', 'Deshabilitar'] },
  { id: 5, name: 'Técnico en Telecomunicaciones', semestres: null, opciones: ['Editar', 'Deshabilitar'] },
  { id: 6, name: 'Técnico en Construcción Civil', semestres: null, opciones: ['Editar', 'Deshabilitar'] },
  { id: 7, name: 'Técnico en Gastronomía', semestres: null, opciones: ['Editar', 'Deshabilitar'] },
  { id: 8, name: 'Técnico en Energías Renovables', semestres: null, opciones: ['Editar', 'Deshabilitar'] },
  { id: 9, name: 'Técnico en Diseño Gráfico', semestres: null, opciones: ['Editar', 'Deshabilitar'] },
  { id: 10, name: 'Técnico en Software', semestres: null, opciones: ['Editar', 'Deshabilitar'] }
];
export interface Instructor {
  id: number;
  name: string;
  dni: number;
  opciones: string[];
}

const ELEMENT_DATA: Instructor[] = [
  { id: 1, name: 'Miguel Alonzo Peralta', dni: 99874267, opciones: ['Editar', 'Deshabilitar'] },
  { id: 2, name: 'Alvaro Canchari', dni: 97865456, opciones: ['Editar', 'Deshabilitar'] },
  { id: 3, name: 'Jesús Montenegro', dni: 93210213, opciones: ['Editar', 'Deshabilitar'] },
  { id: 4, name: 'Ignacio Hache', dni: 91654321, opciones: ['Editar', 'Deshabilitar'] },
  { id: 5, name: 'Luis Pacheco ', dni: 97832654, opciones: ['Editar', 'Deshabilitar'] },
  { id: 6, name: 'Técnico en Construcción Civil', dni: 94653214, opciones: ['Editar', 'Deshabilitar'] }
];

@Component({
  selector: 'app-instructor',
  imports: [MatDividerModule, MatTableModule, MatButtonModule, CommonModule],
  templateUrl: './instructor.component.html',
  styleUrl: './instructor.component.scss'
})
export class InstructorComponent {
  headers:string[]=['id','dni', 'name','opciones']
  dataSource = ELEMENT_DATA;
  dataSource2 = ELEMENT_DATA2;
  intructor: string = '';
  modal:boolean=false
  
  dialogs() {
    this.modal=!this.modal
  }

  submitCareer() {
    if (this.intructor) {
      const modal = document.getElementById('modal-overlay');
      if (modal) modal.style.display = 'none'; // Close the modal
      alert(`Carrera agregada: ${this.intructor}`);
    }
  }
}
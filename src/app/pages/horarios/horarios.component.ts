import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';

export interface Horarios {
  id: number;
  curso: string;
  aula: string;
  grupo: string;
  instructor: string;
  fechaInicio: string;
  fechaFin: string;
  opciones: string[];
}

const ELEMENT_DATA: Horarios[] = [
  {
    id: 1,
    curso: 'Matemáticas',
    aula: 'A-101',
    grupo: 'S1-01',
    instructor: 'Ing. María González',
    fechaInicio: '2025-03-04',
    fechaFin: '2025-07-15',
    opciones: ['Ver Horario', 'Editar', 'Deshabilitar']
  },
  {
    id: 2,
    curso: 'Programación Básica',
    aula: 'B-202',
    grupo: 'S1-02',
    instructor: 'Lic. Pedro Ramos',
    fechaInicio: '2025-03-04',
    fechaFin: '2025-07-15',
    opciones: ['Ver Horario', 'Editar', 'Deshabilitar']
  },
  {
    id: 3,
    curso: 'Fundamentos de Redes',
    aula: 'C-305',
    grupo: 'S2-01',
    instructor: 'Mtra. Carla Ruiz',
    fechaInicio: '2025-03-04',
    fechaFin: '2025-07-15',
    opciones: ['Ver Horario', 'Editar', 'Deshabilitar']
  },
  {
    id: 4,
    curso: 'Diseño de Interfaces',
    aula: 'T-110',
    grupo: 'S3-01',
    instructor: 'Ing. Roberto Salinas',
    fechaInicio: '2025-03-04',
    fechaFin: '2025-07-15',
    opciones: ['Ver Horario', 'Editar', 'Deshabilitar']
  },
  {
    id: 5,
    curso: 'Bases de Datos I',
    aula: 'L-201',
    grupo: 'S2-02',
    instructor: 'Ing. Daniela Torres',
    fechaInicio: '2025-03-04',
    fechaFin: '2025-07-15',
    opciones: ['Ver Horario', 'Editar', 'Deshabilitar']
  }
];


@Component({
  selector: 'app-horarios',
  imports: [MatDividerModule, MatTableModule, MatButtonModule, CommonModule, FormsModule],
  templateUrl: './horarios.component.html',
  styleUrl: './horarios.component.scss'
})
export class HorariosComponent {
  headers:string[]=Object.keys(ELEMENT_DATA[0])
  dataSource = ELEMENT_DATA;
  grupo: string = '';
  modal:boolean=false

  constructor(private router: Router) {}

  careers = ['Técnico en Electrónica', 'Técnico en Mecánica Automotriz', 'Técnico en Computación', 'Técnico en Software', 'Técnico en Diseño Gráfico'];
  
  readonly semestresRomanos = ['I', 'II', 'III', 'IV', 'V', 'VI'];

  selectedCareer: string = '0';
  selectedSemester: number = 0;

  getSemestreRomano(index: number): string {
    return this.semestresRomanos[index - 1] || '';
  }

  curso: string = '';
  aula: string = '';
  instructorSeleccionado: string | null = null;
  cursoSeleccionado: string = '';
  aulaSeleccionado: string = '';
  grupoSeleccionado: string | null = null;
  fechaInicio: string = '';
  fechaFin: string = '';

  instructores: string[] = [
    'Mtra. Laura Pérez',
    'Ing. Carlos Ramírez',
    'Lic. Ana Torres',
    'Diseñadora Patricia Gómez',
    'Dr. Javier Hernández'
  ];

  cursos: string[] = ['Matemáticas', 'Programación Básica', 'Fundamentos de Redes', 'Diseño de Interfaces', 'Bases de Datos I'];
  grupos: string[] = ['2025-10-ING-SOFT-S1-01', '2025-10-ING-SOFT-S1-02', '2025-10-DIS-GRA-S2-02', '2025-10-DIS-GRA-S2-02', '2025-10-MEC-AUT-S2-01'];
  aulas: string[] = ['A-101', 'B-202', 'C-303', 'D-105', 'E-206'];

  submitHorario() {
    if (this.grupo) {
      const modal = document.getElementById('modal-overlay');
      if (modal) modal.style.display = 'none';
      alert(
        `Horario agregado:\nCurso: ${this.curso}, Aula: ${this.aula}, Grupo: ${this.grupo}, Instructor: ${this.instructorSeleccionado}, Fecha Inicio: ${this.fechaInicio}, Fecha Fin: ${this.fechaFin}`
      );
    }
  }
  
  dialogs() {
    this.modal=!this.modal
  }

  viewHorario(semestre: number , carrera: string, curso: string, aula:string) {

    if (semestre !== null && carrera !== null) {
  
      localStorage.setItem('semestre', semestre.toString());
      localStorage.setItem('carrera', carrera.toString());
      
      localStorage.setItem('curso', curso.toString());
      localStorage.setItem('aula', aula.toString());

      this.router.navigate([`view/horarios/detalle_horario`]);
    }
  }
}

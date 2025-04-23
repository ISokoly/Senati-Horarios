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
    curso: 'Algoritmos y Estructuras de Datos',
    aula: 'A-101',
    grupo: 'S1-01',
    instructor: 'Ing. María González',
    fechaInicio: '2025-03-04',
    fechaFin: '2025-07-15',
    opciones: ['Ver Horario', 'Editar', 'Deshabilitar']
  },
  {
    id: 2,
    curso: 'Fundamentos de Programación',
    aula: 'B-202',
    grupo: 'S1-02',
    instructor: 'Lic. Pedro Ramos',
    fechaInicio: '2025-03-04',
    fechaFin: '2025-07-15',
    opciones: ['Ver Horario', 'Editar', 'Deshabilitar']
  },
  {
    id: 3,
    curso: 'Diseño Gráfico Digital',
    aula: 'C-305',
    grupo: 'S2-01',
    instructor: 'Mtra. Carla Ruiz',
    fechaInicio: '2025-03-04',
    fechaFin: '2025-07-15',
    opciones: ['Ver Horario', 'Editar', 'Deshabilitar']
  },
  {
    id: 4,
    curso: 'Mecánica de Motores',
    aula: 'T-110',
    grupo: 'S3-01',
    instructor: 'Ing. Roberto Salinas',
    fechaInicio: '2025-03-04',
    fechaFin: '2025-07-15',
    opciones: ['Ver Horario', 'Editar', 'Deshabilitar']
  },
  {
    id: 5,
    curso: 'Energías Renovables I',
    aula: 'L-201',
    grupo: 'S2-02',
    instructor: 'Ing. Daniela Torres',
    fechaInicio: '2025-03-04',
    fechaFin: '2025-07-15',
    opciones: ['Ver Horario', 'Editar', 'Deshabilitar']
  },
  {
    id: 6,
    curso: 'Cocina Internacional',
    aula: 'G-008',
    grupo: 'S1-03',
    instructor: 'Chef Ricardo Palma',
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

  readonly semestresRomanos = ['I', 'II', 'III', 'IV', 'V', 'VI'];

  getSemestreRomano(index: number): string {
    return this.semestresRomanos[index - 1] || '';
  }

  dialogs() {
    this.modal=!this.modal
  }

  submitCareer() {
  }

  viewHorario() {
      this.router.navigate([`view/horarios/detalle_horario`]);
      
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';

export interface Grupos {
  id: number;
  name: string;
  carreras: string;
  año: number;
  periodo: number;
  semestre: string;
  opciones: string[];
}

const ELEMENT_DATA: Grupos[] = [
  { id: 1, name: '2025-10-ING-SOFT-S1-01', año: 2025, periodo: 10, carreras:'Ing. de Software con IA', semestre:'I',opciones: ['Cursos'] },
  { id: 2, name: '2025-10-ING-SOFT-S1-02', año: 2025, periodo: 10, carreras:'Ing. de Software con IA', semestre:'I',opciones: ['Cursos'] },
  { id: 3, name: '2025-10-DIS-GRA-S2-02', año: 2025, periodo: 10, carreras:'Diseño Grafico', semestre:'II',opciones: ['Cursos'] },
  { id: 4, name: '2025-10-DIS-GRA-S2-02', año: 2025, periodo: 10, carreras:'Diseño Grafico', semestre:'II',opciones: ['Cursos'] },
  { id: 5, name: '2025-10-MEC-AUT-S2-01', año: 2025, periodo: 10, carreras:'Mecánica Automotriz', semestre:'III',opciones: ['Cursos'] },
  { id: 4, name: '2025-10-DIS-GRA-S2-02', año: 2025, periodo: 10, carreras:'Mecánica Automotriz', semestre:'III',opciones: ['Cursos'] }
];

@Component({
  selector: 'app-grupos',
  imports: [MatDividerModule, MatTableModule, MatButtonModule, CommonModule, FormsModule],
  templateUrl: './grupos.component.html',
  styleUrl: './grupos.component.scss'
})
export class GruposComponent {
  headers:string[]=['id','name', 'año', 'periodo', 'carreras', 'semestre','opciones']
  dataSource = ELEMENT_DATA;
  grupo: string = '';

  years = [2023, 2024, 2025];
  periods = ['Primero', 'Segundo'];
  careers = ['Técnico en Electrónica', 'Técnico en Mecánica Automotriz', 'Técnico en Computación'];
  semestresRomanos = ['I', 'II', 'III', 'IV', 'V', 'VI'];

  selectedYear: number = 2024;
  selectedPeriod: string = 'Primero';
  selectedCareer: string = 'Técnico en Electrónica';
  selectedSemester: number = 1;

  modal:boolean=false

  dialogs() {
    this.modal=!this.modal
  }

  submitCareer() {
    if (this.grupo) {
      const modal = document.getElementById('modal-overlay');
      if (modal) modal.style.display = 'none';
      alert(`Grupo agregado: Año: ${this.selectedYear}, Periodo: ${this.selectedPeriod}, Carrera: ${this.selectedCareer}, Semestre: ${this.selectedSemester}`);
    }
  }
}

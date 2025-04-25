import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

export interface Carreras {
  id: number;
  name: string;
  semestres: number | null; // <--- permite null
  opciones: string[];
}
export interface semestre {
  id:number;
  label:string;
}

export const ELEMENT_DATA: Carreras[] = [
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


@Component({
  selector: 'app-carreras',
  imports: [MatDividerModule, MatTableModule, MatButtonModule, CommonModule, FormsModule],
  templateUrl: './carreras.component.html',
  styleUrl: './carreras.component.scss'
})
export class CarrerasComponent {
  headers: string[] = ['id', 'name', 'semestres', 'opciones']
  dataSource = ELEMENT_DATA;
  careerName: string = '';
  modal:boolean=false
  constructor(private router: Router) {}

  readonly semestresRomanos = ['I', 'II', 'III', 'IV', 'V', 'VI'];

  getSemestreRomano(index: number): string {
    return this.semestresRomanos[index - 1] || '';
  }

  dialogs() {
    this.modal=!this.modal
  }

  // MODAL DE CURSO
  modalCurso:boolean=false
  
  semestresRomanosForCurso:semestre[] = [
    { id: 1, label: 'I' },
    { id: 2, label: 'II' },
    { id: 3, label: 'III' },
    { id: 4, label: 'IV' },
    { id: 5, label: 'V' },
    { id: 6, label: 'VI' }
  ];
  
  cursoValue?:string
  selectedSemestre: number | null = null;

  selectedCarrera:number|null=null

  dialogsCurso() {
    this.modalCurso=!this.modalCurso
  }
  submitCurso(){
    if(this.cursoValue && this.selectedSemestre && this.selectedCarrera){
      this.dialogsCurso()
      
      alert("Curso Agregado.")
    }
  }
  hola(){}
  // MODAL DE CURSO



  submitCareer() {
    if (this.careerName) {
      const modal = document.getElementById('modal-overlay');
      if (modal) modal.style.display = 'none';
      alert(`Carrera agregada: ${this.careerName}`);
    }
  }


  viewCursos(element: any, semestre: number) {
    if (semestre !== null) {
      const elementSlug = element.name.replace(/\s+/g, '-').toLowerCase();
  
      localStorage.setItem('elementData', JSON.stringify(element));
      localStorage.setItem('semestre', semestre.toString());
      
      this.router.navigate([`view/carreras/${elementSlug}/semestre-${this.getSemestreRomano(semestre)}/cursos`]);
      
    }
  }

}

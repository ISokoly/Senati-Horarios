import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';

export interface Cursos {
  id: number;
  name: string;
  opciones: string[];
}

const ELEMENT_DATA: Cursos[] = [
  { id: 1, name: 'Matematica', opciones: ['Editar', 'Deshabilitar'] },
  { id: 2, name: 'Fiscica y Quimica', opciones: ['Editar', 'Deshabilitar'] },
  { id: 3, name: 'Introducción a las TI', opciones: ['Editar', 'Deshabilitar'] },
  { id: 4, name: 'Ingles I', opciones: ['Editar', 'Deshabilitar'] },
  { id: 5, name: 'Competencias  digitales para la Ind', opciones: ['Editar', 'Deshabilitar'] }
];

@Component({
  selector: 'app-cursos',
  imports: [MatDividerModule, MatTableModule, MatButtonModule, CommonModule, FormsModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent {
  headers: string[] = ['id', 'name', 'opciones']
  dataSource = ELEMENT_DATA;
  constructor(private router: Router) {}
  data: any;
  semestre: number | any;
  modal:boolean=false
  cursoName: string = '';

  ngOnInit(): void {
    const elementData = localStorage.getItem('elementData');
    const semestre = localStorage.getItem('semestre');
  
    if (elementData && semestre) {
      this.data = JSON.parse(elementData);
      this.semestre = parseInt(semestre, 10);
      console.log(this.data, this.semestre);
      
    }
  }

  dialogs() {
    this.modal=!this.modal
  }

  submitCareer() {
    if (this.cursoName) {
      const modal = document.getElementById('modal-overlay');
      if (modal) modal.style.display = 'none';
      alert(`Carrera agregada: ${this.cursoName}`);
    }
  }
  
  readonly semestresRomanos = ['I', 'II', 'III', 'IV', 'V', 'VI'];

  getSemestreRomano(index: number): string {
    return this.semestresRomanos[index - 1] || '';
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';

export interface Aulas {
  id: number;
  name: string;
  opciones: string[];
}

const ELEMENT_DATA: Aulas[] = [
  { id: 1, name: '101', opciones: ['Editar', 'Deshabilitar'] },
  { id: 2, name: '102', opciones: ['Editar', 'Deshabilitar'] },
  { id: 3, name: '201', opciones: ['Editar', 'Deshabilitar'] },
  { id: 4, name: '202', opciones: ['Editar', 'Deshabilitar'] },
  { id: 5, name: 'Entorno Virtual', opciones: ['Editar', 'Deshabilitar']}
];


@Component({
  selector: 'app-aulas',
  imports: [MatDividerModule, MatTableModule, MatButtonModule, CommonModule, FormsModule],
  templateUrl: './aulas.component.html',
  styleUrl: './aulas.component.scss'
})
export class AulasComponent {
  headers:string[]=['id','name','opciones']
  dataSource = ELEMENT_DATA;
  aulasName: string = '';
  modal:boolean=false

  dialogs() {
    // const modal = document.getElementById('modal-overlay');
    // if (modal) modal.style.display = 'none'; // Close the modal
    this.modal=!this.modal
  }

  submitCareer() {
    if (this.aulasName) {
      const modal = document.getElementById('modal-overlay');
      if (modal) modal.style.display = 'none'; // Close the modal
      alert(`Carrera agregada: ${this.aulasName}`);
    }
  }
}

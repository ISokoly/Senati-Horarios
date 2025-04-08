import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

export interface Horarios {
  time?: string;
  monday?: string[];
  tuesday?: string[];
  wednesday?: string[];
  thursday?: string[];
  friday?: string[];
  saturday?: string[];
  sunday?: string[];
}

const initialScheduleData: Horarios[] = [
  { time: '7:00 AM - 8:00 AM' },
  { time: '8:00 AM - 9:00 AM' },
  { time: '9:00 AM - 10:00 AM' },
  { time: '10:00 AM - 11:00 AM' },
  { time: '11:00 AM - 12:00 PM' },
  { time: '12:00 PM - 1:00 PM' },
  { time: '1:00 PM - 2:00 PM' },
  { time: '2:00 PM - 3:00 PM' },
  { time: '3:00 PM - 4:00 PM' },
  { time: '4:00 PM - 5:00 PM' },
  { time: '5:00 PM - 6:00 PM' },
  { time: '6:00 PM - 7:00 PM' },
  { time: '7:00 PM - 8:00 PM' },
  { time: '8:00 PM - 9:00 PM' },
  { time: '9:00 PM - 10:00 PM' },
];

const existingScheduleData: Horarios[] = [
  {
    time: '7:40 AM - 10:00 AM',
    monday: ['Matematica\nDocente Asignado\n202'],
  },
  {
    time: '10:00 AM - 11:00 AM',
    monday: ['Fisica y Quimica'],
  },
  {
    time: '9:00 AM - 10:00 AM',
    wednesday: ['Ingles I'],
  },
  {
    time: '10:00 AM - 11:00 AM',
    wednesday: ['Introduccion a las TI'],
  },
  {
    time: '11:00 AM - 12:00 PM',
    friday: ['Fisica y Quimica'],
  },
  {
    time: '12:00 PM - 1:00 PM',
    friday: ['Matematica'],
  },
  {
    time: '9:00 AM - 10:00 AM',
    sunday: ['Ingles I'],
  },
  {
    time: '10:00 AM - 11:00 AM',
    sunday: ['Introduccion a las TI'],
  },
];

@Component({
  selector: 'app-horarios',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDividerModule,
    MatSelectModule,
    FormsModule,
  ],
  templateUrl: './horarios.component.html',
  styleUrl: './horarios.component.scss'
})
export class HorariosComponent implements OnInit {
  headers: string[] = ['time', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  dataSource: Horarios[] = [];
  mostrarModalAgregar = false;
  selectedFechaAgregar: Date | null = null;
  selectedCursoAgregar: string = '';
  horaInicioAgregar: string = '';
  horaFinAgregar: string = '';
  selectedAulaAgregar: string = '';
  cursos: string[] = ['Matematica', 'Fisica y Quimica', 'Ingles I', 'Introduccion a las TI', 'Programacion I'];
  aulas: string[] = ['201', '202', 'Laboratorio A', 'Entorno Virtual'];
  horas: string[] = initialScheduleData.map(item => item.time!);

  ngOnInit(): void {
    this.dataSource = this.mergeScheduleData(initialScheduleData, existingScheduleData);
  }

  mergeScheduleData(initial: Horarios[], existing: Horarios[]): Horarios[] {
    const mergedData: Horarios[] = initial.map(initialItem => {
      const existingItem = existing.find(ex => ex.time === initialItem.time);
      return {
        time: initialItem.time,
        monday: existingItem?.monday,
        tuesday: existingItem?.tuesday,
        wednesday: existingItem?.wednesday,
        thursday: existingItem?.thursday,
        friday: existingItem?.friday,
        saturday: existingItem?.saturday,
        sunday: existingItem?.sunday,
      };
    });
    return mergedData;
  }

  abrirModalAgregar(): void {
    this.mostrarModalAgregar = true;
  }

  cerrarModalAgregar(): void {
    this.mostrarModalAgregar = false;
    this.limpiarFormularioAgregar();
  }

  agregarHorarioFake(): void {
    if (this.selectedFechaAgregar && this.selectedCursoAgregar && this.horaInicioAgregar && this.horaFinAgregar && this.selectedAulaAgregar) {
      console.log('Simulando agregar horario:', {
        fecha: this.selectedFechaAgregar,
        curso: this.selectedCursoAgregar,
        horaInicio: this.horaInicioAgregar,
        horaFin: this.horaFinAgregar,
        aula: this.selectedAulaAgregar,
      });
      this.cerrarModalAgregar();
      // Aquí podrías simular la actualización del dataSource si fuera una app real
    } else {
      console.log('Por favor, complete todos los campos en el modal.');
    }
  }

  limpiarFormularioAgregar(): void {
    this.selectedFechaAgregar = null;
    this.selectedCursoAgregar = '';
    this.horaInicioAgregar = '';
    this.horaFinAgregar = '';
    this.selectedAulaAgregar = '';
  }
}
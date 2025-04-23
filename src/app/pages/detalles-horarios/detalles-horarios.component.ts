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
import { MatCardModule } from '@angular/material/card';


export interface Horarios {
  dia:string
  time: string;
  curso: string;
  docente: string;
  aula:string;
}


const datos: Horarios[] = [
  {
    dia: '21-04-25',
    time: '08:00 AM - 09:30 AM',
    curso: 'Matemáticas I',
    docente: 'Mtra. Laura Pérez',
    aula: 'A-101'
  },
  {
    dia: '22-04-25',
    time: '09:40 AM - 11:10 AM',
    curso: 'Programación Básica',
    docente: 'Ing. Carlos Ramírez',
    aula: 'B-202'
  },
  {
    dia: '23-04-25',
    time: '11:20 AM - 12:50 PM',
    curso: 'Fundamentos de Redes',
    docente: 'Lic. Ana Torres',
    aula: 'C-303'
  },
  {
    dia: '24-04-25',
    time: '01:00 PM - 02:30 PM',
    curso: 'Diseño de Interfaces',
    docente: 'Diseñadora Patricia Gómez',
    aula: 'D-105'
  },
  {
    dia: '25-04-25',
    time: '02:40 PM - 04:10 PM',
    curso: 'Bases de Datos I',
    docente: 'Dr. Javier Hernández',
    aula: 'E-206'
  }
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
    MatCardModule,
  ],
  templateUrl: './detalles-horarios.component.html',
  styleUrl: './detalles-horarios.component.scss'
})
export class DetallesHorariosComponent implements OnInit {
  ngOnInit(): void {
    
  }

  cursos: string[] = ['Matemáticas', 'Programación Básica', 'Fundamentos de Redes', 'Diseño de Interfaces', 'Bases de Datos I'];
  aulas: string[] = ['A-101', 'B-202', 'C-303', 'D-105', 'E-206'];
  horas: string[] = ['08:00 AM', '09:40 AM', '11:20 AM', '01:00 PM', '02:40 PM'];
  
  headers: string[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  datos=datos

  mostrarModalAgregar: boolean = false;

  // Objeto para almacenar la información del formulario
  nuevoHorario = {
    selectedFechaAgregar: '',
    selectedCursoAgregar: '',
    horaInicioAgregar: '',
    horaFinAgregar: '',
    selectedAulaAgregar: ''
  };

  abrirModalAgregar(): void {
    this.mostrarModalAgregar = true;
  }

  cerrarModalAgregar(): void {
    this.mostrarModalAgregar = false;
    this.limpiarFormularioAgregar();
  }

  agregarHorarioFake(): void {
    const { selectedFechaAgregar, selectedCursoAgregar, horaInicioAgregar, horaFinAgregar, selectedAulaAgregar } = this.nuevoHorario;

    // Validación
    if (selectedFechaAgregar && selectedCursoAgregar && horaInicioAgregar && horaFinAgregar && selectedAulaAgregar) {
      console.log('Simulando agregar horario:', {
        fecha: selectedFechaAgregar,
        curso: selectedCursoAgregar,
        horaInicio: horaInicioAgregar,
        horaFin: horaFinAgregar,
        aula: selectedAulaAgregar,
      });

      // Agregar el nuevo horario al array de datos
      const nuevoDia: Horarios = {
        dia: selectedFechaAgregar,
        time: `${horaInicioAgregar} - ${horaFinAgregar}`,
        curso: selectedCursoAgregar,
        docente: 'Docente no asignado', // Aquí podrías añadir un campo para docente si lo deseas
        aula: selectedAulaAgregar
      };

      // Actualizar el array de datos
      this.datos.push(nuevoDia);

      // Cerrar el modal
      this.cerrarModalAgregar();
    } else {
      console.log('Por favor, complete todos los campos en el modal.');
    }
  }

  limpiarFormularioAgregar(): void {
    this.nuevoHorario = {
      selectedFechaAgregar: '',
      selectedCursoAgregar: '',
      horaInicioAgregar: '',
      horaFinAgregar: '',
      selectedAulaAgregar: ''
    };
  }
}

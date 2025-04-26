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
  dia: string;
  horaInicio: string;
  horaFin: string;
  curso: string;
  docente: string;
  aula: string;
}

const datos: Horarios[] = [
  {
    dia: '24-04-25',
    horaInicio: '08:00 AM',
    horaFin: '09:30 AM',
    curso: 'Matemáticas I',
    docente: 'Mtra. Laura Pérez',
    aula: 'A-101'
  },
  {
    dia: '25-04-25',
    horaInicio: '09:40 AM',
    horaFin: '11:10 AM',
    curso: 'Programación Básica',
    docente: 'Ing. Carlos Ramírez',
    aula: 'B-202'
  },
  {
    dia: '26-04-25',
    horaInicio: '11:20 AM',
    horaFin: '12:50 PM',
    curso: 'Fundamentos de Redes',
    docente: 'Lic. Ana Torres',
    aula: 'C-303'
  },
  {
    dia: '27-04-25',
    horaInicio: '01:00 PM',
    horaFin: '14:30 PM',
    curso: 'Diseño de Interfaces',
    docente: 'Diseñadora Patricia Gómez',
    aula: 'D-105'
  },
  {
    dia: '28-04-25',
    horaInicio: '14:40 PM',
    horaFin: '16:10',
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

  semestre: number | any;
  carrera: string | any;
  curso: string | any;
  aula: string | any;

  ngOnInit(): void {
    const semestre = localStorage.getItem('semestre');
    const carrera = localStorage.getItem('carrera');
    const curso = localStorage.getItem('curso');
    const aula = localStorage.getItem('aula');

    if (semestre) {
      this.semestre = parseInt(semestre, 10);
    }
    if (carrera) {
      this.carrera = carrera;
    }
    if (curso) {
      this.curso = curso;
    }
    if (aula) {
      this.aula = aula;
    }
  }

  cursos: string[] = ['Matemáticas', 'Programación Básica', 'Fundamentos de Redes', 'Diseño de Interfaces', 'Bases de Datos I'];
  aulas: string[] = ['A-101', 'B-202', 'C-303', 'D-105', 'E-206'];
  diasSemana: string[] = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  headers: string[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  datos = datos; // Tu array principal

  mostrarModalAgregar: boolean = false;

  // Objeto del formulario de agregar horario
  nuevoHorario = {
    selectedFechaAgregar: '',
    diaSemana: '',
    selectedCursoAgregar: '',
    horaInicioAgregar: '',
    horaFinAgregar: '',
    selectedAulaAgregar: ''
  };

  abrirModalAgregar(): void {
    this.mostrarModalAgregar = true;
    this.nuevoHorario.selectedCursoAgregar = this.curso;
    this.nuevoHorario.selectedAulaAgregar = this.aula;
  }

  cerrarModalAgregar(): void {
    this.mostrarModalAgregar = false;
    this.limpiarFormularioAgregar();
  }
  readonly semestresRomanos = ['I', 'II', 'III', 'IV', 'V', 'VI'];

  getSemestreRomano(index: number): string {
    return this.semestresRomanos[index - 1] || '';
  }


  agregarHorarioFake(): void {
    const { selectedFechaAgregar, selectedCursoAgregar, horaInicioAgregar, horaFinAgregar, selectedAulaAgregar } = this.nuevoHorario;
  
    this.actualizarDiaSemana(); // <-- Aquí es donde la llamas
  
    if (selectedFechaAgregar && selectedCursoAgregar && horaInicioAgregar && horaFinAgregar && selectedAulaAgregar) {
      const nuevoInicio = this.convertirAHoras24(horaInicioAgregar);
      const nuevoFin = this.convertirAHoras24(horaFinAgregar);
  
      if (nuevoInicio >= nuevoFin) {
        alert('La hora de inicio debe ser menor que la hora de fin.');
        return;
      }
  
      const conflicto = this.datos.some(h => {
        if (h.dia !== this.nuevoHorario.diaSemana || h.aula !== selectedAulaAgregar) return false;
  
        const inicio = this.convertirAHoras24(horaInicioAgregar);
        const fin = this.convertirAHoras24(horaFinAgregar);
        return (nuevoInicio < fin && nuevoFin > inicio);
      });
  
      if (conflicto) {
        alert('Ya existe un horario establecido en ese rango de tiempo.');
        return;
      }
  
      const nuevoDia: Horarios = {
        dia: this.nuevoHorario.diaSemana, // Aquí usas diaSemana actualizado
        horaInicio: horaInicioAgregar,
        horaFin: horaFinAgregar,
        curso: selectedCursoAgregar,
        docente: 'Docente no asignado',
        aula: selectedAulaAgregar
      };
  
      this.datos.push(nuevoDia);
      this.cerrarModalAgregar();
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }  

  limpiarFormularioAgregar(): void {
    this.nuevoHorario = {
      selectedFechaAgregar: '',
      diaSemana: '',
      selectedCursoAgregar: '',
      horaInicioAgregar: '',
      horaFinAgregar: '',
      selectedAulaAgregar: ''
    };
  }

  actualizarDiaSemana() {
    if (this.nuevoHorario.selectedFechaAgregar) {
      // Asegurarse de que la fecha se interprete correctamente con Date
      const fecha = new Date(this.nuevoHorario.selectedFechaAgregar);
      
      // Validar que la fecha no sea inválida
      if (isNaN(fecha.getTime())) {
        alert('La fecha seleccionada no es válida. Asegúrate de seguir el formato MM/DD/YYYY.');
        return;
      }
      
      // Usar toLocaleDateString para formatear la fecha si es necesario
      const fechaFormateada = fecha.toLocaleDateString('en-US');  // Si deseas 'MM/DD/YYYY'
  
      // Obtener el índice del día de la semana (0 = Domingo, 1 = Lunes, etc.)
      const diaIndex = fecha.getDay();
      
      // Asignar el nombre del día correspondiente
      this.nuevoHorario.diaSemana = this.diasSemana[diaIndex];
    }
  }
  
  
  convertirAHoras24(horaStr: string): number {
    const [h, m] = horaStr.split(':').map(Number);
    return h + m / 60;
  }

  formatoHora12(hora24: string): string {
    const [h, m] = hora24.split(':').map(Number);
    const period = h >= 12 ? 'PM' : 'AM';
    const hour12 = h % 12 || 12;
    return `${hour12}:${m.toString().padStart(2, '0')} ${period}`;
  }

  formatoHora24(hora12: string): string {
    const [time, period] = hora12.split(' ');
    let [h, m] = time.split(':').map(Number);
    if (period === 'PM' && h !== 12) h += 12;
    if (period === 'AM' && h === 12) h = 0;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
  }

  convertirHoraAMinutos(hora: string): number {
    const [time, meridiano] = hora.trim().split(' ');
    let [h, m] = time.split(':').map(Number);
    if (meridiano === 'PM' && h < 12) h += 12;
    if (meridiano === 'AM' && h === 12) h = 0;
    return h * 60 + m;
  }

  horarioChoca(nuevoDia: string, nuevoInicio: string, nuevoFin: string, nuevaAula: string): boolean {
    const inicioNuevo = this.convertirHoraAMinutos(nuevoInicio);
    const finNuevo = this.convertirHoraAMinutos(nuevoFin);

    for (const horario of this.datos) {
      if (horario.dia !== nuevoDia) continue;

      const inicioExistente = this.convertirHoraAMinutos(horario.horaInicio);
      const finExistente = this.convertirHoraAMinutos(horario.horaFin);

      const mismaAula = horario.aula === nuevaAula;
      const choca = !(finNuevo <= inicioExistente || inicioNuevo >= finExistente);

      if (choca && mismaAula) return true;
    }

    return false;
  }
}

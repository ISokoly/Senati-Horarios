import { Routes } from '@angular/router';
import { DahboardComponent } from './pages/dahboard/dahboard.component';
import { LoginComponent } from './components/login/login.component';
import { ViewComponent } from './view/view.component';
import { InstructorComponent } from './pages/instructor/instructor.component';
import { GruposComponent } from './pages/grupos/grupos.component';
import { AulasComponent } from './pages/aulas/aulas.component';
import { CarrerasComponent } from './pages/carreras/carreras.component';
import { HorariosComponent } from './pages/horarios/horarios.component';

export const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'login'
  },
  {
    path:'dashboard',
    component:DahboardComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'view',
    component:ViewComponent,
    children:[
      { path: '', redirectTo: 'carreras', pathMatch: 'full' },
      {
        path:'carreras',
        component:CarrerasComponent
      },
      {
        path:'aulas',
        component:AulasComponent
      },
      {
        path:'grupos',
        component:GruposComponent
      },
      {
        path:'instructores',
        component:InstructorComponent
      },
      {
        path:'horarios',
        component:HorariosComponent
      }
    ]
  }
];

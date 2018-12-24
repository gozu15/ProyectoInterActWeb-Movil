import { RegistroMateriasComponent } from './registro-materias/registro-materias.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyPageComponent } from './body-page/body-page.component';
import { RegistroAulasComponent } from './registro-aulas/registro-aulas.component';
import { RegistroDocenteComponent } from './registro-docente/registro-docente.component';
import { RegistroEstudiantesComponent } from './registro-estudiantes/registro-estudiantes.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'}, 
  {path: 'home', component: BodyPageComponent},
  {path: 'registro-aulas', component: RegistroAulasComponent},
  {path: 'registro-docente', component: RegistroDocenteComponent},
  {path: 'registro-estudiante', component: RegistroEstudiantesComponent},
  {path: 'registro-materia', component: RegistroMateriasComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { RegistroMateriasComponent } from './registro-materias/registro-materias.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyPageComponent } from './body-page/body-page.component';
import { RegistroAulasComponent } from './registro-aulas/registro-aulas.component';
import { RegistroDocenteComponent } from './registro-docente/registro-docente.component';
import { RegistroEstudiantesComponent } from './registro-estudiantes/registro-estudiantes.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginRegistroComponent } from './login-registro/login-registro.component';
import { ContenedorPageComponent } from './layout/contenedor-page/contenedor-page.component';

export const routes: Routes = [
  /*{path: '', redirectTo: '/home', pathMatch: 'full'}, 
  {path: 'home', component: BodyPageComponent},
  {path: 'registro-aulas', component: RegistroAulasComponent},
  {path: 'registro-docente', component: RegistroDocenteComponent},
  {path: 'registro-estudiante', component: RegistroEstudiantesComponent},
  {path: 'registro-materia', component: RegistroMateriasComponent},
  {path: 'registro-login', component: LoginPageComponent},
  {path: 'registrologin', component: LoginRegistroComponent} */


  {path: '', redirectTo: '/inicio', pathMatch: 'full'}, 
  {path: 'inicio', component: ContenedorPageComponent,
  children:[
    {
      path:'',
      loadChildren:'./layout/contenedor-page/contenedor-page.module#ContenedorPageModule'
    }
  ]},
  {path: 'login', component: LoginPageComponent},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

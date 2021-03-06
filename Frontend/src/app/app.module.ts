import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { BodyPageComponent } from './body-page/body-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { RegistroEstudiantesComponent } from './registro-estudiantes/registro-estudiantes.component';
import { RegistroMateriasComponent } from './registro-materias/registro-materias.component';
import { RegistroDocenteComponent } from './registro-docente/registro-docente.component';
import { RegistroAulasComponent } from './registro-aulas/registro-aulas.component';
import { RegistroNotasComponent } from './registro-notas/registro-notas.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { LoginRegistroComponent } from './login-registro/login-registro.component';
import { ContenedorPageComponent } from './layout/contenedor-page/contenedor-page.component';


@NgModule({
  declarations: [
    AppComponent,   
    LoginPageComponent,
    LoginRegistroComponent,
    ContenedorPageComponent,
   
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFgM81Qz-SwfTzUsr4F51AgDj0HdN88CQ'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { MateriaService } from './../service/materia.service';
import { Materia } from './../models/materia';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Tree } from '@angular/router/src/utils/tree';

@Component({
  selector: 'app-registro-materias-page',
  templateUrl: './registro-materias-page.component.html',
  styleUrls: ['./registro-materias-page.component.css']
})
export class RegistroMateriasPageComponent implements OnInit {

  materia:Materia;
  isRequired: boolean = false;
  isError: boolean = false;
  isExito:boolean=false;
  recordar: boolean = false;
  constructor(private datePipe: DatePipe,private materriaserv:MateriaService) { 
    this.materia=new Materia;
  }

  ngOnInit() {
  }
registrarMateria(){
 
  this.isError = false;
    this.isRequired = false;
    this.isExito=false;
  var date = new Date();
  this.materia.creacion={fecha:this.datePipe.transform(date,"yyyy-MM-dd HH:mm:ss"),usuario:"5c34b3a83619a9178c5902f1"};
  this.materia.modificacion={fecha:this.datePipe.transform(date,"yyyy-MM-dd HH:mm:ss"),usuario:"5c34b3a83619a9178c5902f1"};

 if(this.materia.nombre){
  this.materriaserv.CrearMateria(this.materia).subscribe((materia: any) => {
  
    if (materia) {
     
    this.isExito=true;
    this.materia.nombre="";
    this.materia.descripcion="";
    } else {
      alert('error desconocido');
    }
  }, (error: any) => {
    this.isError = true;
  });
 }
 else{
this.isRequired=true;
 }
}
}

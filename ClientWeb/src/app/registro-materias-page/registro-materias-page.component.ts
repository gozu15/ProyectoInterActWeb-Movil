import { MateriaService } from './../service/materia.service';
import { Materia } from './../models/materia';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Tree } from '@angular/router/src/utils/tree';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-registro-materias-page',
  templateUrl: './registro-materias-page.component.html',
  styleUrls: ['./registro-materias-page.component.css'],
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})
export class RegistroMateriasPageComponent implements OnInit {




  ListMaterias=[];

  materia:Materia;
  isRequired: boolean = false;
  isError: boolean = false;
  isExito:boolean=false;
  recordar: boolean = false;

  headElements=["Nro","Nombre de la Materia","Descripcion"];

  closeResult: string;

  constructor(private modalService: NgbModal,private datePipe: DatePipe,private materriaserv:MateriaService) { 
    this.materia=new Materia;

  }

  ngOnInit() {
    this.listarMaterias();
  }
/**
 * CODIFICACION DEL MODAL
 */
openBackDropCustomClass(content) {
  this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
}

openWindowCustomClass(content) {
  this.modalService.open(content, { windowClass: 'dark-modal' });
}

openSm(content) {
  this.modalService.open(content, { size: 'sm' });
}

openLg(content) {
  this.modalService.open(content, { size: 'lg' });
}

openVerticallyCentered(content) {
  this.modalService.open(content, { centered: true });
}


  /**
   * CODIFICACION DE FUNCIONES
   */
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
    this.ListMaterias.push(materia);
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


listarMaterias(){
  this.ListMaterias=[];
  this.materriaserv.getMaterias().subscribe((materias:Materia[])=>{

    this.ListMaterias=materias;
    console.log(this.ListMaterias);
  });
}
}
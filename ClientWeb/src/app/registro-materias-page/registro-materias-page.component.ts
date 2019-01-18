import { MateriaService } from './../service/materia.service';
import { Materia } from './../models/materia';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Tree } from '@angular/router/src/utils/tree';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioService } from '../service/usuario.service';
import { pipe } from 'rxjs';

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



  nombreinfo:string;
  descripcioninfo;
  fechacreacioninfo;
  flag=0;
  Razoneliminado;

  ListMaterias=[];

  colegio:any;
  UsuarioActual:any;

  materia:Materia;
  isRequired: boolean = false;
  isError: boolean = false;
  isExito:boolean=false;
  recordar: boolean = false;

  headElements=["Nro","Nombre de la Materia","Descripcion"];

  closeResult: string;

  constructor(private usuarioserv:UsuarioService,private modalService: NgbModal,private datePipe: DatePipe,private materriaserv:MateriaService) { 
    this.materia=new Materia;
    this.UsuarioActual=this.usuarioserv.UsuarioActual.datos._id;
    this.colegio=this.usuarioserv.UsuarioActual.datos.colegio;
    this.limpiarArray(this.materia);

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
  limpiarArray(materia:Materia){
    materia.nombre="";
    materia.descripcion="";
    materia._id=0;
  }

  openModalActualizar(change,content,materia:Materia){
    
    this.limpiarArray(this.materia);

    this.flag=change;
    this.materia=materia;

    let fecha= new Date().toUTCString();
    this.materia.modificacion.fecha=fecha
    
    console.log(fecha)
   
    console.log(this.materia);

    this.openLg(content);
  }

  

  openModalMostrarInfo(materia:Materia,modal){
 
    var fecha;
    fecha =  this.datePipe.transform( materia.creacion.fecha,"yyyy-MM-dd");
    //console.log(fecha);    
    console.log(materia);
    console.log(this.materia);
    this.materia=materia;
    // this.materia.nombre=materia.nombre;
    // this.materia.descripcion=materia.descripcion;
    // this.materia.modificacion.fecha=fecha;
    console.log(this.materia);
    this.openLg(modal);
  
  }
  openModalBorrar(change, content, materia:Materia){
    this.materia=materia
     let fecha= new Date().toUTCString();
    console.log(fecha)
    this.materia.modificacion.fecha=fecha;
    this.materia.modificacion.usuario=this.UsuarioActual;
    this.materia.eliminado.estado=true;
    this.materia.eliminado.razon=materia.eliminado.razon;
    this.flag=change;

   
    this.openLg(content);
  }

registrarMateria(){
 
  this.isError = false;
    this.isRequired = false;
    this.isExito=false;
    this.materia.colegio=this.colegio;
  var date = new Date();
  this.materia.creacion={fecha:this.datePipe.transform(date,"yyyy-MM-dd HH:mm:ss"),usuario:this.UsuarioActual};
  this.materia.modificacion={fecha:this.datePipe.transform(date,"yyyy-MM-dd HH:mm:ss"),usuario:this.UsuarioActual};

 if(this.materia.nombre){
  this.materriaserv.CrearMateria(this.materia).subscribe((materia: any) => {
  
    if (materia) {
     
    this.isExito=true;
    console.log(this.isExito);
    this.materia.nombre="";
    this.materia.descripcion="";
    this.listarMaterias();
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

actualizarMateria(materia:Materia){
  
  console.log(materia);
  var id=""+materia._id;
  console.log(id);
  this.materriaserv.ActualizarMateria(materia, id).subscribe((materia:Materia)=>{
    if(materia){
      this.isExito=true;
    this.materia.nombre="";
    this.materia.descripcion="";
    //this.materia.modificacion.fecha="";
    this.listarMaterias();
    //this.ListMaterias.push(materia);
    }
    else
    {
      alert("error desconocido");
    }
  },(error:any)=>{
    this.isError=true;
  });
}

borrarMateria(materia:Materia){
  console.log(materia);
  
  var id=""+materia._id;
  console.log(id);
  this.materriaserv.BorrarMateria(materia._id,materia.eliminado.razon,materia.modificacion.fecha).subscribe((materia:Materia)=>{
    if(materia){
      this.isExito=true;
    this.materia.nombre="";
    this.materia.descripcion=""
    this.materia.eliminado.razon="";
    //this.materia.modificacion.fecha="";
    this.listarMaterias();
    //this.ListMaterias.push(materia);
    }
    else
    {
      alert("error desconocido");
    }
  },(error:any)=>{
    this.isError=true;
  });

}


listarMaterias(){
  this.ListMaterias=[];
  this.isExito=false;
  this.materriaserv.getMaterias().subscribe((materias:Materia[])=>{

    this.ListMaterias=materias;
    console.log(this.ListMaterias);
  });
}
}
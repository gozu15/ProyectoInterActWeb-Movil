import { UsuarioService } from './../service/usuario.service';
import { DocenteService } from './../service/docente.service';
import { Component, OnInit, ɵConsole } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalConfig, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Docente } from '../models/docente';
import { getBase64, resizeBase64 } from 'base64js-es6';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-registro-docente-page',
  templateUrl: './registro-docente-page.component.html',
  styleUrls: ['./registro-docente-page.component.css']
})
export class RegistroDocentePageComponent implements OnInit {
  closeResult: string;
  docente: Docente;
  image: any;
  isRequired: boolean = false;
  isError: boolean = false;
  isExito: boolean = false;
  UsuarioActual:any;
  Razoneliminado:string;
  eliminado:string;
  recordar: boolean = false;
  colegio:string;
  docentesList: any = [];
  DatosActualizado:Docente;
  headElements = ['N°', 'Ci', 'Apellidos', 'Nombres', 'Genero'];
  indexEliminar:number;
  modalReference: NgbModalRef;
  modalReference2: NgbModalRef;
  constructor(private config: NgbModalConfig, private modalService: NgbModal, private datePipe: DatePipe, private usuarioserv: UsuarioService) {
    this.docente = new Docente;
    this.DatosActualizado=new Docente;
    config.backdrop = 'static';
    config.keyboard = false;
    this.UsuarioActual=this.usuarioserv.UsuarioActual.datos._id;
    this.colegio=this.usuarioserv.UsuarioActual.datos.colegio;

    
  }
  borrarDatos(){
    console.log("cdrrororror");
    this.DatosActualizado=new Docente;
  }
  //Funciones del Modal
  private getDismissReason(reason: any): string {
    console.log("cdrrororror");
    this.eliminado=undefined;
    this.indexEliminar=undefined;
    this.DatosActualizado=undefined;
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      console.log("entro modaldismiss");
      return 'by clicking on a backdrop';
    } else {
      console.log("entro a otro lado")
    
      return `with: ${reason}`;
    }
  }

  openModal(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openAdd(content) {
    console.log("dfhjk");
    this.modalReference2 = this.modalService.open(content);
this.modalReference2.result.then((result) => {
  this.closeResult = `Closed with: ${result}`;
}, (reason) => {
  this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
});
  }

  openModalView(content) {
    this.modalService.open(content);
  }

  openModalUpdate(content,id) {
 /*  this.usuarioserv.getUsuario(id).subscribe((docente:Docente)=>{
     this.DatosActualizado=docente;
     console.log(this.DatosActualizado);
   });*/

   this.DatosActualizado=this.docentesList.filter(docente => docente._id === id)[0];
   this.modalService.open(content);

  }

  openDelete(content,id) {
    this.eliminado=id;
    this.modalReference = this.modalService.open(content);
this.modalReference.result.then((result) => {
  this.closeResult = `Closed with: ${result}`;
}, (reason) => {
  this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
});
}
  

  ngOnInit() {
    this.getDocentes();
  }
borrar(){

 /* console.log(new Date().toISOString());

  let fecha2= new Date().toISOString();

  console.log(new Date(fecha2).toString());*/
  var date = new Date().toUTCString();
  let fecha= date;

 this.usuarioserv.BorrarUsuario(this.eliminado,this.Razoneliminado,fecha).subscribe((data)=>{
 
  this.docentesList.splice(this.indexEliminar,1);
  this.modalReference.close();
});
}
  // FUNCIONES PARA SOLICITAR SERVICIO AL SERVIDOR
  add(fechaNacimiento){
    // opciones para los mensajes
    this.isError = false;
    this.isRequired = false;
    this.isExito = false;
    // registro
    var date = new Date().toUTCString();
    this.docente.colegio=this.colegio;
    this.docente.rol="5c3de049236f591facfa2b60" as any;
    this.docente.creacion = { fecha: date, usuario: this.UsuarioActual };
    this.docente.modificacion = { fecha: date, usuario: this.UsuarioActual };
    this.docente.fechadenacimiento = fechaNacimiento;

   
    if (this.docente.nombre) {
     
      this.usuarioserv.RegistrarDocente(this.docente).subscribe((docente: any) => {
        if (docente) {
          this.isExito = true;
         
          this.docentesList.push(docente);
         // this.modalReference2.close();
          this.docente = new Docente;
        } else {
          alert('error desconocido');
        }
      }, (error: any) => {
        this.isError = true;
        
        console.log("entro a error")
      });
    }
    else {
      this.isRequired = true;
      
      console.log("requiere")
    }
  }

  getDocentes(){
    this.docentesList = [];
    let parametros = {sort: "docente", order: "desc"}
    this.usuarioserv.getDocentes(parametros).subscribe((docente: Docente[])=>{ 
      this.docentesList = docente;
      console.log(this.docentesList);
    });
  }

  update(){
    var date = new Date().toUTCString();
      this.DatosActualizado.modificacion = { fecha: date, usuario: this.UsuarioActual };
    this.usuarioserv.ActualizarUsuario(this.DatosActualizado._id,this.DatosActualizado).subscribe((docente:string)=>{
     this.docentesList.filter(docente => docente._id === docente._id)[0]=docente;
     
    });
console.log(this.DatosActualizado);
  }

  see(id){

  }

  delete(){
console.log(this.Razoneliminado);
  }

  ordenar(apellidos, asc){
    console.log(apellidos, asc)
    this.docentesList = [];
    let parametros = {sort: apellidos, order: asc}
    this.usuarioserv.getDocentes(parametros).subscribe((docente: Docente[])=>{ 
      this.docentesList = docente;
      console.log(this.docentesList);
    });
  }
  
  //funcion que se carga cuando el usuario clickkea en seleccionar foto
  changeListener($event): void {
    this.readThis($event.target);
  }

  //funcion que sirve para buscar la foto en la maquina y convertirlo a base64
  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    console.log(inputValue.files[0]);
    this.docente.perfil = { tipo: inputValue.files[0].type, foto: ""};
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
     // this.docente.perfil.foto = myReader.result.toString();
      resizeBase64(myReader.result, 150, 150).then((result) => {
        this.docente.perfil.foto = result
       
      });
    }
    myReader.readAsDataURL(file);
  }

   //funcion que se carga cuando el usuario clickkea en seleccionar foto en el modal actualizar
   changeListener2($event): void {
     console.log("llega aqui");
    this.readThis2($event.target);
  }

  //funcion que sirve para buscar la foto en la maquina y convertirlo a base64 en el modal actualizar
  readThis2(inputValue: any): void {
    var file: File = inputValue.files[0];
    console.log(inputValue.files[0]);
    this.docente.perfil = { tipo: inputValue.files[0].type, foto: ""};
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
     // this.docente.perfil.foto = myReader.result.toString();
      resizeBase64(myReader.result, 150, 150).then((result) => {
        this.DatosActualizado.perfil.foto=result  
      });
    }
    myReader.readAsDataURL(file);
  }
}

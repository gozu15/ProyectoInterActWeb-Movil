import { UsuarioService } from './../service/usuario.service';
import { DocenteService } from './../service/docente.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';


import { Docente } from '../models/docente';
import { getBase64, resizeBase64 } from 'base64js-es6';
import { DatePipe } from '@angular/common';
import { join } from 'path';

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
  recordar: boolean = false;

  docentesList: any = [];
  headElements = ['N°', 'Ci', 'Apellidos', 'Nombres', 'Genero'];

  constructor(private config: NgbModalConfig, private modalService: NgbModal, private datePipe: DatePipe, private usuarioserv: UsuarioService) {
    this.docente = new Docente;
    config.backdrop = 'static';
    config.keyboard = false;
  }

  //Funciones del Modal
  private getDismissReason(reason: any): string {
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
    this.modalService.open(content);
  }

  openModalView(content) {
    this.modalService.open(content);
  }

  openModalUpdate(content) {
    this.modalService.open(content);
  }

  openDelete(content) {
    this.modalService.open(content);
  }

  ngOnInit() {
    this.getDocentes();
  }

  // FUNCIONES PARA SOLICITAR SERVICIO AL SERVIDOR
  add(fechaNacimiento){
    // opciones para los mensajes
    this.isError = false;
    this.isRequired = false;
    this.isExito = false;
    // registro
    var date = new Date();
    this.docente.creacion = { fecha: this.datePipe.transform(date, "yyyy-MM-dd HH:mm:ss"), usuario: "5c34b3a83619a9178c5902f1" };
    this.docente.modificacion = { fecha: this.datePipe.transform(date, "yyyy-MM-dd HH:mm:ss"), usuario: "5c34b3a83619a9178c5902f1" };
    this.docente.fechadenacimiento = fechaNacimiento;

    console.log("listo para if")
    if (this.docente.nombre) {
      console.log("2 if")
      this.usuarioserv.RegistrarDocente(this.docente).subscribe((docente: any) => {
        if (docente) {
          this.isExito = true;
          console.log("entro")
          console.log(docente);
          this.docentesList.push(docente);
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

  }

  see(id){

  }

  delete(id){

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
  
  RegistrarDocente(nacimiento) {
    this.isError = false;
    this.isRequired = false;
    this.isExito = false;
    var date = new Date();
    this.docente.fechadenacimiento = nacimiento;
    this.docente.creacion = { fecha: this.datePipe.transform(date, "yyyy-MM-dd HH:mm:ss"), usuario: "5c34b3a83619a9178c5902f1" };
    this.docente.modificacion = { fecha: this.datePipe.transform(date, "yyyy-MM-dd HH:mm:ss"), usuario: "5c34b3a83619a9178c5902f1" };
    
    if (this.docente.nombre) {
      this.usuarioserv.RegistrarDocente(this.docente).subscribe((docente: any) => {
        if (docente) {
          this.isExito = true;
          console.log(docente);
          this.docente = new Docente;
        } else {
          alert('error desconocido');
        }
      }, (error: any) => {
        this.isError = true;
      });
    }
    else {
      this.isRequired = true;
    }
  }

  changeListener($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    console.log(inputValue.files[0]);
    this.docente.perfil = { tipo: inputValue.files[0].type, foto: "", miniatura: "" };
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.docente.perfil.foto = myReader.result.toString();
      resizeBase64(myReader.result, 200, 100).then((result) => {
        this.docente.perfil.miniatura = result;
      });
    }
    myReader.readAsDataURL(file);
  }
}

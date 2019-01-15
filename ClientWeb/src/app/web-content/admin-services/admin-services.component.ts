import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Usuario } from 'src/app/models/viewmodels/usuario';
import { Docente } from 'src/app/models/docente';

@Component({
  selector: 'app-admin-services',
  templateUrl: './admin-services.component.html',
  styleUrls: ['./admin-services.component.css']
})
export class AdminServicesComponent implements OnInit {
  closeResult: string;
  image: any;
  isRequired: boolean = false;
  isError: boolean = false;
  isExito: boolean = false;
  recordar: boolean = false;
  
  usuario: Usuario;
  docentesList: any = [];
  headElements = ['N°', 'Ci', 'Apellidos', 'Nombres', 'Genero'];

  constructor( private config: NgbModalConfig, private modalService: NgbModal,  private usuarioserv: UsuarioService) { 
    this.usuario = new Usuario;
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
    //this.getDocentes();
  }

  // FUNCIONES PARA SOLICITAR SERVICIO AL SERVIDOR
  add(fechaNacimiento){
    // opciones para los mensajes
   /* this.isError = false;
    this.isRequired = false;
    this.isExito = false;
    // registro
    var date = new Date();
    this.usuario.creacion = { fecha: this.datePipe.transform(date, "yyyy-MM-dd HH:mm:ss"), usuario: "5c34b3a83619a9178c5902f1" };
    this.usuario.modificacion = { fecha: this.datePipe.transform(date, "yyyy-MM-dd HH:mm:ss"), usuario: "5c34b3a83619a9178c5902f1" };
    this.usuario.fechadenacimiento = fechaNacimiento;

    console.log("listo para if")
    if (this.usuario.nombre) {
      console.log("2 if")
      this.usuarioserv.RegistrarDocente(this.usuario).subscribe((docente: any) => {
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
    }*/
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
}

import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-registro-aulas-page',
  templateUrl: './registro-aulas-page.component.html',
  styleUrls: ['./registro-aulas-page.component.css']
})
export class RegistroAulasPageComponent implements OnInit {
  closeResult: string;
  
  // Elementos de la tabla
  elements: any = [
    {id: 1, nombre: 'Castillo Rosas', cursoAsignado: "2° Sec", capacidad: "15", descripcion:"Esta ubicado en el 2 piso"},
    {id: 2, nombre: 'Rosas Rodriguez', cursoAsignado: "2° Sec", capacidad: "15", descripcion:"Esta ubicado en el 2 piso"},
    {id: 3, nombre: 'Luna Castillo', cursoAsignado: "2° Sec", capacidad: "15", descripcion:"Esta ubicado en el 2 piso"},
    {id: 4, nombre: 'Castillo Rosas', cursoAsignado: "2° Sec", capacidad: "15", descripcion:"Esta ubicado en el 2 piso"},
    {id: 5, nombre: 'Rosas Rodriguez', cursoAsignado: "2° Sec", capacidad: "15", descripcion:"Esta ubicado en el 2 piso"},
    {id: 6, nombre: 'Luna Castillo', cursoAsignado: "2° Sec", capacidad: "15", descripcion:"Esta ubicado en el 2 piso"},
    {id: 7, nombre: 'Castillo Rosas', cursoAsignado: "2° Sec", capacidad: "15", descripcion:"Esta ubicado en el 2 piso"},
    {id: 8, nombre: 'Rosas Rodriguez', cursoAsignado: "2° Sec", capacidad: "15", descripcion:"Esta ubicado en el 2 piso"},
    {id: 9, nombre: 'Luna Castillo', cursoAsignado: "2° Sec", capacidad: "15", descripcion:"Esta ubicado en el 2 piso"},
    {id: 10, nombre: 'Castillo Rosas', cursoAsignado: "2° Sec", capacidad: "15", descripcion:"Esta ubicado en el 2 piso"},
    {id: 11, nombre: 'Rosas Rodriguez', cursoAsignado: "2° Sec", capacidad: "15", descripcion:"Esta ubicado en el 2 piso"},
    {id: 12, nombre: 'Luna Castillo', cursoAsignado: "2° Sec", capacidad: "15", descripcion:"Esta ubicado en el 2 piso"},
  ];
  // Cabezeras de los elementos
  headElements = ['Id', 'Nombre', 'CursoAsignado', 'Capacidad', 'Descripcion'];

  constructor(config: NgbModalConfig, private modalService: NgbModal) { 
    // Declarancion de variables para modal alerts
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
  }

  //Funciones del Modal
  openModal(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
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


}

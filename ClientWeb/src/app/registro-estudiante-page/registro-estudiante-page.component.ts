import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-registro-estudiante-page',
  templateUrl: './registro-estudiante-page.component.html',
  styleUrls: ['./registro-estudiante-page.component.css']
})
export class RegistroEstudiantePageComponent implements OnInit {
  public isCollapsed = true;
  model;
  closeResult: string;

  // Elementos de la tabla
  elements: any = [
    {id: 1, apellidos: 'Castillo Rosas', nombres: 'Carla', ci: '96854885', genero:"otro" , contacto:"45685222", curso:"2° Sec"},
    {id: 2, apellidos: 'Rosas Rodriguez', nombres: 'Luna', ci: '96854885', genero:"otro" , contacto:"45685222", curso:"2° Sec"},
    {id: 3, apellidos: 'Luna Castillo', nombres: 'Aby', ci: '96854885', genero:"otro" , contacto:"45685222", curso:"2° Sec"},
    {id: 4, apellidos: 'Castillo Rosas', nombres: 'Carla', ci: '96854885', genero:"otro" , contacto:"45685222", curso:"2° Sec"},
    {id: 5, apellidos: 'Rosas Rodriguez', nombres: 'Luna', ci: '96854885', genero:"otro" , contacto:"45685222", curso:"2° Sec"},
    {id: 6, apellidos: 'Luna Castillo', nombres: 'Aby', ci: '96854885', genero:"otro" , contacto:"45685222", curso:"2° Sec"},
    {id: 7, apellidos: 'Castillo Rosas', nombres: 'Carla', ci: '96854885', genero:"otro" , contacto:"45685222", curso:"2° Sec"},
    {id: 8, apellidos: 'Rosas Rodriguez', nombres: 'Luna', ci: '96854885', genero:"otro" , contacto:"45685222", curso:"2° Sec"},
    {id: 9, apellidos: 'Luna Castillo', nombres: 'Aby', ci: '96854885', genero:"otro" , contacto:"45685222", curso:"2° Sec"},
    {id: 10, apellidos: 'Castillo Rosas', nombres: 'Carla', ci: '96854885', genero:"otro" , contacto:"45685222", curso:"2° Sec"},
    {id: 11, apellidos: 'Rosas Rodriguez', nombres: 'Luna', ci: '96854885', genero:"otro" , contacto:"45685222", curso:"2° Sec"},
    {id: 12, apellidos: 'Luna Castillo', nombres: 'Aby', ci: '96854885', genero:"otro" , contacto:"45685222", curso:"2° Sec"},
  ];
  // Cabezeras de los elementos
  headElements = ['Id', 'Apellidos', 'Nombres', 'CI', 'Genero', 'Contacto', 'Curso'];

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // Declarancion de variables para modal alerts
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
  }

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

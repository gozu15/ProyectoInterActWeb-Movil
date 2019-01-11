import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-registro-docente-page',
  templateUrl: './registro-docente-page.component.html',
  styleUrls: ['./registro-docente-page.component.css']
})
export class RegistroDocentePageComponent implements OnInit {
  closeResult: string;
  constructor(private modalService: NgbModal) { }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      console.log("entro al boton dismiss");
      //TODO poner codigo de obtencion de datos del formulario y envio al backend
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      console.log("entro modaldismiss");
      return 'by clicking on a backdrop';
    } else {
      console.log("entro a otro lado")
      return  `with: ${reason}`;
    }
  }
  ngOnInit() {
  }

}

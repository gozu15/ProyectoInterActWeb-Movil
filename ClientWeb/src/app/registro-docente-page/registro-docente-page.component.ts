import { UsuarioService } from './../service/usuario.service';
import { DocenteService } from './../service/docente.service';
import { Component, OnInit } from '@angular/core';
import { Docente } from '../models/docente';
import { getBase64, resizeBase64 } from 'base64js-es6';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-registro-docente-page',
  templateUrl: './registro-docente-page.component.html',
  styleUrls: ['./registro-docente-page.component.css']
})
export class RegistroDocentePageComponent implements OnInit {
docente:Docente;
image:any;
isRequired: boolean = false;
isError: boolean = false;
isExito:boolean=false;
recordar: boolean = false;
  constructor(private datePipe: DatePipe,private usuarioserv:UsuarioService) {
    this.docente=new Docente;
    
   }

  ngOnInit() {
  }

  RegistrarDocente(nacimiento){
    this.isError = false;
    this.isRequired = false;
    this.isExito=false;
  var date = new Date();
  this.docente.fechadenacimiento=nacimiento;
  this.docente.creacion={fecha:this.datePipe.transform(date,"yyyy-MM-dd HH:mm:ss"),usuario:"5c34b3a83619a9178c5902f1"};
  this.docente.modificacion={fecha:this.datePipe.transform(date,"yyyy-MM-dd HH:mm:ss"),usuario:"5c34b3a83619a9178c5902f1"};

  
 if(this.docente.nombre){
  
  this.usuarioserv.RegistrarDocente(this.docente).subscribe((docente: any) => {
  
    if (docente) {
     
    this.isExito=true;
    console.log(docente);
    this.docente=new Docente;
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

  changeListener($event) : void {
    this.readThis($event.target);
  }
  
  readThis(inputValue: any): void {
    var file:File = inputValue.files[0];
    console.log(inputValue.files[0]);
    this.docente.perfil={tipo:inputValue.files[0].type,foto:"",miniatura:""};
    var myReader:FileReader = new FileReader();
  
    myReader.onloadend = (e) => {
      this.docente.perfil.foto=myReader.result.toString();
      resizeBase64(myReader.result, 200, 100).then((result) => {
       this.docente.perfil.miniatura=result;

      });
    
    }
    myReader.readAsDataURL(file);
  }
}

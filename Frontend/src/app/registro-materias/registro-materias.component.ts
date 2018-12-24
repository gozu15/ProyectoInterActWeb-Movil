import { Usuario } from './../models/viewmodels/usuario';
import { UsuarioService } from './../service/usuario.service';
import { Materia } from './../models/materia';
import { MateriaService } from './../service/materia.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-materias',
  templateUrl: './registro-materias.component.html',
  styleUrls: ['./registro-materias.component.css']
})
export class RegistroMateriasComponent implements OnInit {
  materia:Materia;
  nombre:string;
  constructor(private materiaServ:MateriaService,private usua:UsuarioService) { 
    this.materia=new Materia;
  }

  ngOnInit() {
  }
  RegisterClick(){
  /*  this.materiaServ.getMaterias().subscribe((materia55:Materia[])=>{
      console.log(materia55);
     
    })*/
      let nmateria={nombre:this.materia.nombre_materia,descripcion:this.materia.descripcion,otros:this.materia.otros }
      this.materiaServ.CrearMateria(nmateria).subscribe((materia:Materia)=>{
     
      if(materia){
        alert("Alert Creado con exito");

      }
      else{
        alert("error desconocido")
      }
    },(error:any)=>{
      alert("error");

    });
  }
}

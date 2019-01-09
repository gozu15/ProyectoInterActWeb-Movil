import { Login } from './../models/login';
import { UsuarioService } from './../service/usuario.service';
import { Component, OnInit } from '@angular/core';
import { isError } from 'util';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  login:Login;
  isRequired:boolean=false;
  isError:boolean=false;
  recordar:boolean=false;
  constructor(private usuarioserv:UsuarioService) { 
    this.login=new Login;
  }

  ngOnInit() {
  }

  LoginAtion(){
  this.isError=false;
  this.isRequired=false;
  if(this.login.usuario.length>2 && this.login.password.length>2)
  {
    this.usuarioserv.Login(this.login).subscribe((usuario:any)=>{
    
        if(usuario){
       alert("inicio con exito");
       console.log(usuario);
        }
        else{
          alert("error desconocido")
        }
      },(error:any)=>{
      this.isError=true;
      });
  }
  else{
 this.isRequired=true;
  }
  }
}

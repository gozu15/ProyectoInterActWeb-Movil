import { Component, OnInit } from '@angular/core';
import { Login } from './../../models/login';
import { UsuarioService } from './../../service/usuario.service';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { Cripto } from '../../cryptopass';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login;
  isRequired: boolean = false;
  isError: boolean = false;
  recordar: boolean = false;
  constructor(private rout: Router,private usuarioserv: UsuarioService, private route: Router) {
    this.login = new Login;
  }

  ngOnInit() {
  }
  encryptData(data) {

    try {
      return CryptoJS.AES.encrypt(JSON.stringify(data), Cripto.pass).toString();
    } catch (e) {
      console.log(e);
    }
  }
  LoginAtion() {
    this.isError = false;
    this.isRequired = false;
   // this.route.navigate(['/administracion']);
    if (this.login.usuario.length > 2 && this.login.password.length > 2) {
      this.usuarioserv.Login(this.login).subscribe((usuario: any) => {
        if (usuario) {
         if(this.recordar=true){
            this.usuarioserv.UsuarioActual=usuario;
            localStorage.setItem("usuario", this.encryptData(usuario));
            this.rout.navigate(['/administracion']);
            
           }else{
            this.usuarioserv.UsuarioActual=usuario;
            //http://localhost:4200/lista-productos/page/1
            this.rout.navigate(['/administracion']);
             
           }
         
        } else {
          alert('error desconocido');
        }
      }, (error: any) => {
        this.isError = true;
      });
    } else {
      this.isRequired = true;
    }
  }
}

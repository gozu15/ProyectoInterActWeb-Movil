import { Component, OnInit } from '@angular/core';
import { Login } from './../../models/login';
import { UsuarioService } from './../../service/usuario.service';
import { Router } from '@angular/router';

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
  constructor(private usuarioserv: UsuarioService, private route: Router) {
    this.login = new Login;
  }

  ngOnInit() {
  }

  LoginAtion() {
    this.isError = false;
    this.isRequired = false;
    this.route.navigate(['/dashboard']);
    if (this.login.usuario.length > 2 && this.login.password.length > 2) {
      this.usuarioserv.Login(this.login).subscribe((usuario: any) => {
        if (usuario) {
          alert('inicio con exito');
          console.log(usuario);
          this.route.navigate(['/dashboard']);
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

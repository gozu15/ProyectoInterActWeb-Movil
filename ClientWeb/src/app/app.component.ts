import { Component} from '@angular/core';
import { UsuarioService } from './service/usuario.service';
import { Cripto } from './cryptopass';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(private usuarioServ:UsuarioService){
  let cache=localStorage.getItem("usuario");
  if(cache!=undefined){
  this.usuarioServ.UsuarioActual= this.decryptData(cache);
  }else{

  }
}
decryptData(data) {

  try {
    const bytes = CryptoJS.AES.decrypt(data, Cripto.pass);
    if (bytes.toString()) {
      return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }
    return data;
  } catch (e) {
    console.log(e);
  }
}
}

import { Rol } from './rol';
import { Login } from './login';
export class Tutor {
    public id: number;
    public nombre: string;
    public apellidos:string;
    public generos:string;
    public ci:string;
    public login:Login;
    public numero_contacto:string;
    public perfil:{foto:String,tipo:String};
    public rol:Rol;
    public eliminado:{estado:boolean,razon:string};
    public colegio: string;
}

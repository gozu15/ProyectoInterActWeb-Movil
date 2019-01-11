import { Rol } from './rol';
import { Login } from './login';
export class Docente {
    public id: number;
    public nombre: string;
    public apellidos:string;
    public generos:string;
    public ci:string;
    public login:Login;
    public fechadenacimiento:any;
    public numero_contacto:string;
    public perfil:{foto:String,tipo:String,miniatura:String};
    public rol:Rol;
    public eliminado:{estado:boolean,razon:string};
    public creacion:{fecha:any,usuario:string};
    public modificacion:{fecha:any,usuario:string};

}

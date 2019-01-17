import { Rol } from './rol';
import { Login } from './login';
export class Docente {
    public _id: number;
    public nombre: string;
    public apellidos:string;
    public genero:string;
    public ci:string;
    public login:Login;
    public fechadenacimiento:any;
    public numero_contacto:string;
    public perfil:{foto:String,tipo:String};
    public rol:Rol;
    public eliminado:{estado:boolean,razon:string};
    public creacion:{fecha:any,usuario:string};
    public modificacion:{fecha:any,usuario:string};
    public colegio: string;
}

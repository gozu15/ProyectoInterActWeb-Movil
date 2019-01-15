import { Tutor } from './tutor';
import { Rol } from './rol';
import { Login } from './login';
export class Estudiante {
    public id: number;
    public nombre: string;
    public apellidos:string;
    public generos:string;
    public fechadenacimiento:Date;
    public ci:string;
    public login:Login;
    public numero_contacto:string;
    public perfil:{foto:String,tipo:String,miniatura:String};
    public rol:Rol;
    public eliminado:{estado:boolean,razon:string};
    public tutores:[Tutor];
    public colegio: string;
}

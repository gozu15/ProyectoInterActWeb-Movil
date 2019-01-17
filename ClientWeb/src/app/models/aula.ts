import { Materia } from './materia';

export class Aula {
    public id: number;
    public nombre: string;
    public creacion:{fecha:Date,usuario:string};
    public modificacion:{fecha,usuarios:string};
    public foto:string;
    public eliminado:{estado:boolean,razon:string};
    public materias:[Materia];
    public colegio: string;
}

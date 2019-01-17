export class Materia {
    public _id: number;
    public nombre: string;
    public descripcion:string;
    public creacion:{fecha:any,usuario:string};
    public modificacion:{fecha:any,usuario:string};
    public eliminado:{estado:boolean,razon:string};
    public colegio: string;
}

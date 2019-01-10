export class Materia {
    public id: number;
    public nombre: string;
    public creacion:{fecha:Date,usuario:string};
    public modificacion:{fecha,usuarios:string};
    public eliminado:{estado:boolean,razon:string};
    public materias:[Materia];
}

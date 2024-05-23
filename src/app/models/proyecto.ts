import { Image } from "./image";

export class Proyecto {

    id: number;
    nombre: string;
    descripcion: string;
    foto: string;
    fechaInicio: string;
    fechaFin: string;
    estado: string;
    imagenes: Image[] = [];
    url: string;
    demo: string;

}

import { Tag } from "./tag";

export class Blog {
    id: number;
    titulo: string;
    contenido: string;
    fecha:string;
    imagen: string;
    autor: string;
    etiquetas:Tag[]= [];

}

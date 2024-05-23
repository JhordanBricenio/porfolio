import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GLOBAL } from './GLOBAL';
import { Usuario } from '../models/usuario';
import Swal from 'sweetalert2';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url:string;

  constructor(private http:HttpClient, private authService:AuthService) {
    this.url=GLOBAL.url;
   }

   getUsuario(id): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.url+'usuario'}/${id}`
    ,{headers:this.authService.agregarAuthorizationHeader()}).pipe(
      catchError((e) => {
        console.log(e.error.mensaje);
        Swal.fire(' Error al obtener', e.error.mensaje, 'error');
        return throwError(() => e);
      })
    );
  }

  subirFoto(file: File, id): Observable<HttpEvent<{}>> {
    let formData = new FormData();
    formData.append('file', file);
    formData.append('id', id);

    const req= new HttpRequest('POST',`${this.url}usuario`+'/upload', formData,{
      reportProgress:true
    });

    return this.http.request(req).pipe(
      catchError(e =>{
     // this.isNoAutorizado(e);
      return throwError(() => e);
      })
    );
    }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, map, catchError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Image } from '../models/image';
import { GLOBAL } from './GLOBAL';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

  public url;
  private httheaders = new HttpHeaders({'Content-Type': 'application/json' });

  constructor(private http: HttpClient, private Router: Router) {
    this.url = GLOBAL.url;
  }

  //subir la galeria para productos
  subirGaleria(file:File,galeria:Image):Observable<Image>{
    let formData = new FormData();
    formData.append('file', file);
    formData.append('galeria', JSON.stringify(galeria));
    return this.http.post(`${this.url}proyecto`+'/galeria', formData).pipe(
      map((response: any) => response.imagen as Image),
      catchError(e => {
        console.log(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })

    )    
  }
}

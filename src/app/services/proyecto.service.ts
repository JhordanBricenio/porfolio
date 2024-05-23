import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , throwError} from 'rxjs';
import { Proyecto } from '../models/proyecto';
import { GLOBAL } from './GLOBAL';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
   providedIn: 'root'
})
export class ProyectoService {

   public url: string = '';


   constructor(private _http: HttpClient, private authService: AuthService) {
      this.url = GLOBAL.url;
   }


   getProyectos(): Observable<Proyecto[]> {
      return this._http.get<Proyecto[]>(this.url + 'proyecto');
   }
   getProyectosAdmin(): Observable<Proyecto[]> {
      return this._http.get<Proyecto[]>(this.url + 'proyectos');
   }

   getPorId(id: number): Observable<Proyecto> {
      return this._http.get<Proyecto>(this.url + 'proyecto/' + id);
   }

   create(proyecto: Proyecto): Observable<any> {
      return this._http.post(this.url + 'proyecto', proyecto, { headers: this.authService.agregarAuthorizationHeader() });
   }
   update(proyecto: Proyecto): Observable<any> {
      return this._http.put(this.url + 'proyecto/' + proyecto.id, proyecto);
   }
   delete(id: number): Observable<any> {
      return this._http.delete(this.url + 'proyecto/' + id);
   }
   subirFoto(foto: File, id): Observable<HttpEvent<{}>> {
      let formData = new FormData();
      formData.append('file', foto);
      formData.append('id', id.toString());
      const req = new HttpRequest('POST', this.url + 'proyecto/upload', formData, {
         reportProgress: true,
      });
      return this._http.request(req).pipe(
         catchError(e => {
            return throwError(()=>e);
         })
      );

   }
   getProyectsBySearch(page?:Number, filtro?:string):Observable<any>{
      let url = this.url+'proyecto';
  
      if(filtro){
        url += '?filtro='+filtro;
      }else{
        url += '/page/'+page;
      }
      return this._http.get<any>(url);
      
    }
}

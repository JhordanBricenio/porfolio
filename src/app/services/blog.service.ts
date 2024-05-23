import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';
import { GLOBAL } from './GLOBAL';
import { catchError, Observable, throwError } from 'rxjs';
import { Tag } from '../models/tag';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public url: string = '';

  constructor(private _http: HttpClient, private authService: AuthService) {
     this.url = GLOBAL.url;
  }

  getPosts(): Observable<Blog[]> {
    return this._http.get<Blog[]>(this.url + 'blog', { headers: this.authService.agregarAuthorizationHeader() });
  }
  getPorId(id:number): Observable<Blog> {
    return this._http.get<Blog>(this.url + 'blog/'+id, { headers: this.authService.agregarAuthorizationHeader() });
  }
  getTags(): Observable<Tag[]> {
    return this._http.get<Tag[]>(this.url + 'blog/etiquetas', { headers: this.authService.agregarAuthorizationHeader() });
  }

  savePost(blog: Blog): Observable<Blog> {
    return this._http.post<Blog>(this.url + 'blog', blog, { headers: this.authService.agregarAuthorizationHeader() });
  }
  updatePost(blog: Blog): Observable<Blog> {
    return this._http.put<Blog>(this.url + 'blog/'+blog.id, blog, { headers: this.authService.agregarAuthorizationHeader() });
  }
  subirFoto(foto: File, id): Observable<HttpEvent<{}>> {
    let formData = new FormData();
    formData.append('file', foto);
    formData.append('id', id.toString());
    const req = new HttpRequest('POST', this.url + 'blog/upload', formData,{reportProgress: true});
    return this._http.request(req).pipe(
       catchError(e => {
          return throwError(()=>e);
       })
    );
  

 }
 getPostPage(page: number): Observable<any> {
    return this._http.get(this.url + 'blog/page/' + page, { headers: this.authService.agregarAuthorizationHeader() });
  }
  deletePost(id: number): Observable<any> {
    return this._http.delete(this.url + 'blog/' + id, { headers: this.authService.agregarAuthorizationHeader() });
  }


}

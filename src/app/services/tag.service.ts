import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from '../models/tag';
import { GLOBAL } from './GLOBAL';

@Injectable({
  providedIn: 'root'
})
export class TagService {


  public url: string = '';

  constructor(private _http:HttpClient) { 
    this.url = GLOBAL.url;
  }

  getTags():Observable<Tag[]>{
    return this._http.get<Tag[]>(this.url+'etiqueta');
  }
  createTag(tag:Tag):Observable<Tag>{
    return this._http.post<Tag>(this.url+'etiqueta',tag);
  }
   getId(id:number):Observable<Tag>{
    return this._http.get<Tag>(this.url+'etiqueta/'+id);
   }
  updateTag(tag:Tag):Observable<Tag>{
    return this._http.put<Tag>(this.url+'etiqueta/'+tag.id,tag);
  }
  deleteTag(id:number):Observable<any>{
    return this._http.delete(this.url+'etiqueta/'+id);
  }
}

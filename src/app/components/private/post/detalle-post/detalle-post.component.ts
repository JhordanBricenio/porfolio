import { HttpEventType } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';
import { ModalService } from 'src/app/services/modal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-post',
  templateUrl: './detalle-post.component.html',
  styleUrls: ['./detalle-post.component.css']
})
export class DetallePostComponent implements OnInit {

  @Input()post:Blog;
  public title:string = 'Detalle del post';
  public fotoSeleccionada:File;
  progreso:number = 0;

  constructor(public modalService:ModalService, private blogService:BlogService) { }

  ngOnInit(): void {
  }

  cerrarModal(){
    this.modalService.cerrarModal();
  }
  selecionarFoto(event){
    this.fotoSeleccionada = event.target.files[0];
    this.progreso = 0;
    console.log(this.fotoSeleccionada);
    if(this.fotoSeleccionada.type.indexOf('image') < 0){
      Swal.fire('Error', 'El archivo seleccionado no es una imagen', 'error');
      this.fotoSeleccionada = null;
    }

    }

  subirFoto(){
    if(!this.fotoSeleccionada){
      Swal.fire('Error', 'Debe seleccionar una foto', 'error');
    }else{
      this.blogService.subirFoto(this.fotoSeleccionada, this.post.id).subscribe(event => {
        if(event.type === HttpEventType.UploadProgress){
          this.progreso = Math.round((event.loaded/event.total)*100);
        }else if(event.type === HttpEventType.Response){
          let response:any = event.body;
          this.post = response.blog as Blog;
          this.modalService.notificarUpload.emit(this.post);
          Swal.fire('La foto se ha subido completamente!', response.mensaje, 'success');
        }
      });
    }
  }

}


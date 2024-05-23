import { HttpEventType } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-proyect',
  templateUrl: './detalle-proyect.component.html',
  styleUrls: ['./detalle-proyect.component.css']
})
export class DetalleProyectComponent implements OnInit {

  @Input()proyecto:Proyecto;
  public title:string = 'Detalle del proyecto';
  public fotoSeleccionada:File;
  progreso:number = 0;


  constructor(public modalService:ModalService, private proyectoService:ProyectoService) { }

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
      this.proyectoService.subirFoto(this.fotoSeleccionada, this.proyecto.id).subscribe(event => {
        if(event.type === HttpEventType.UploadProgress){
          this.progreso = Math.round((event.loaded/event.total)*100);
        }else if(event.type === HttpEventType.Response){
          let response:any = event.body;
          this.proyecto = response.proyecto as Proyecto;
          this.modalService.notificarUpload.emit(this.proyecto);
          Swal.fire('La foto se ha subido completamente!', response.mensaje, 'success');
        }
      });
    }
  }

}

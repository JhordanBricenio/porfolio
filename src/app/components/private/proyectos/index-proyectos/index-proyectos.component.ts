import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-index-proyectos',
  templateUrl: './index-proyectos.component.html',
  styleUrls: ['./index-proyectos.component.css']
})
export class IndexProyectosComponent implements OnInit {

  public proyectos:Proyecto[] = [];
  proyectoSeleccioando:Proyecto;

  constructor(private proyectoService:ProyectoService, private modalService:ModalService) { }

  ngOnInit(): void {
    this.proyectoService.getProyectosAdmin().subscribe(
      res => {
        this.proyectos = res;
      },
      err => console.log(err)
    )
  }

  delete(proyecto: Proyecto): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Está seguro?',
        text: `Seguro que desea eliminar el Proyecto! ${proyecto.nombre}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.proyectoService.delete(proyecto.id).subscribe((response) => {
            this.proyectos = this.proyectos.filter((cli) => cli !== proyecto);
            swalWithBootstrapButtons.fire(
              'Proyecto Eliminado!',
              `Proyecto ${proyecto.nombre} Eliminado con éxito.`,
              'success'
            );
          });
        }
      });
  }

  abrirModal(proyecto:Proyecto){
    this.proyectoSeleccioando = proyecto;
    this.modalService.abrirModal();

  }

}

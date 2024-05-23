import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto';
import { Image } from 'src/app/models/image';
import { ProyectoService } from 'src/app/services/proyecto.service';
import Swal from 'sweetalert2';
import { GaleriaService } from 'src/app/services/galeria.service';

@Component({
  selector: 'app-galeria-proyect',
  templateUrl: './galeria-proyect.component.html',
  styleUrls: ['./galeria-proyect.component.css']
})
export class GaleriaProyectComponent implements OnInit {

  proyecto: Proyecto;
  image: Image;
  fotoSeleccionada: File;

  constructor(private _proyectoService: ProyectoService, private _router: Router
    , private _route: ActivatedRoute, private galeriaService: GaleriaService) {
    this.proyecto = new Proyecto();
    this.image = new Image();
  }


  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._proyectoService.getPorId(id).subscribe(
        response => {
          this.proyecto = response;
        }
      );
    });
  }

  selecionarFoto(event) {
    this.fotoSeleccionada = event.target.files[0];
    if (this.fotoSeleccionada.type.indexOf('image') < 0) {
      Swal.fire(
        'Error selecionar Imagen ',
        'el archivo debe ser de tipo Imagen',
        'error'
      );
      this.fotoSeleccionada = null;
    }

  }

  subirFoto() {
    if (!this.fotoSeleccionada) {
      Swal.fire(
        'Error Upload ',
        'Debe selecionar una foto',
        'error'
      );

    } else {
      this.image.proyecto = this.proyecto;
      this.galeriaService.subirGaleria(this.fotoSeleccionada, this.image).subscribe((galeria) => {
        // this.producto.galeria.push(galeria);
        Swal.fire(
          'Foto subida ',
          'La foto se subio correctamente',
          'success'
        );
        this.fotoSeleccionada = null;
      });
    }
  }

}

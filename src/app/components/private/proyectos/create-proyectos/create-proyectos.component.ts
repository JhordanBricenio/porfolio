import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';
import Swal from 'sweetalert2';

interface Estado {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-proyectos',
  templateUrl: './create-proyectos.component.html',
  styleUrls: ['./create-proyectos.component.css']
})
export class CreateProyectosComponent implements OnInit {

  estado: Estado[] = [
    { value: 'Terminado', viewValue: 'Terminado' },
    { value: 'En Proceso', viewValue: 'En Proceso' },
  ];

  proyecto: Proyecto;

  constructor(private proyectoService: ProyectoService, private snack: MatSnackBar,
    private router: Router, private activatedRoute: ActivatedRoute) {
    this.proyecto = new Proyecto();
  }

  ngOnInit(): void {
    this.init_data();

    
  }
  init_data(){
    this.activatedRoute.params.subscribe(
      params => {
        let id = params['id'];
        if (id) {
          this.proyectoService.getPorId(id).subscribe(
            response => {
              this.proyecto = response;
            }
          );
        }
      }
    );

  }
  registro(registroForm: any) {
    if (registroForm.valid) {
      this.proyectoService.create(this.proyecto).subscribe(
        response => {
          console.log(response);
          Swal.fire({
            icon: 'success',
            title: `${response.mensaje}`,
          });
          this.router.navigate(['/admin/indexProyect']);

        }
      );
    }
    else {
      this.snack.open('Los datos del formulario no son válidos', 'Cerrar', {
        duration: 3000
      });
    }

  }
  actualizarProyecto(registroForm: any){
    if (registroForm.valid) {
      this.proyectoService.update(this.proyecto).subscribe(
        response => {
          console.log(response);
          Swal.fire({
            icon: 'success',
            title: `${response.mensaje}`,
          });
          this.router.navigate(['/admin/indexProyect']);

        }
      );
    }
    else {
      this.snack.open('Los datos del formulario no son validos', 'Cerrar', {
        duration: 3000
      });
    }

  }



}

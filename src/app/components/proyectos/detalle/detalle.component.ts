import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  id:any;
  nombre:any;
  public proyecto:Proyecto= new Proyecto();

  constructor(private route:ActivatedRoute, private proyectoService:ProyectoService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.id=params.get('id');
      this.nombre=params.get('nombre');
      this.proyectoService.getPorId(this.id).subscribe(
        response=>{          
          this.proyecto=response;
        });
    });

  }

}

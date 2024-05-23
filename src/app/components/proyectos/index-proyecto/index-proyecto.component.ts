import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-index-proyecto',
  templateUrl: './index-proyecto.component.html',
  styleUrls: ['./index-proyecto.component.css']
})
export class IndexProyectoComponent implements OnInit {

  public proyectos:Proyecto[]=[];
  inputVacio = true;

  stateCtrl = new FormControl('');
  public filtro:string='';
  public pagination: any;
  

  constructor(private proyectoService:ProyectoService, private activateRoute: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.initData();
  }
  initData(){
    this.activateRoute.paramMap.subscribe((params) => {
      let page: number =+params.get('page');
      if (!page) {
        page = 0;
      }      
      this.proyectoService.getProyectsBySearch(page).subscribe((response) => {
          this.proyectos = response.content as Proyecto[];
          this.pagination = response;                  
        });
    });

  }
  filtrar() {
    if (this.filtro != null) {      
      this.proyectoService.getProyectsBySearch(0,this.filtro).subscribe((response) => {
        this.proyectos = response.proyects as Proyecto[];        
      })
    } 
  }
  reset(){
    this.filtro = null;
    this.ngOnInit();
  }

}
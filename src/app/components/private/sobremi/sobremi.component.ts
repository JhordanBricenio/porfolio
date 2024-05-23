import { Component, OnInit } from '@angular/core';
import { CargarScritsService } from '../../../services/cargar-scrits.service';



@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {

  constructor(private _cargarScripts: CargarScritsService) {
    
    
 }
  ngOnInit(): void {
    if (window.innerWidth > 768) {
      this._cargarScripts.cargarScripts(['particles']);
      this._cargarScripts.cargarScripts(['app']);
    }

  }

}

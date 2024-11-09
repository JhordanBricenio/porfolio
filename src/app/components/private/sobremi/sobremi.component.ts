import { Component, OnInit } from '@angular/core';
import { CargarScritsService } from '../../../services/cargar-scrits.service';



@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent {

  constructor(private _cargarScripts: CargarScritsService) {
    
    
 }

  ngAfterViewInit(): void {
    if (window.innerWidth > 768) {
      this._cargarScripts.cargarScripts(['particles'])
        .then(() => {
          this.iniciarParticles();
        })
        .catch(error => console.error(error));
    }
  }

  iniciarParticles(): void {
    (window as any).particlesJS.load('particles-js', './assets/js/app.json', function() {
      console.log('Particles.js config loaded');
    });
  }
}

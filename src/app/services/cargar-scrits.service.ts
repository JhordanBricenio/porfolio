import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarScritsService {

  constructor() { }

  cargarScripts( archivos: string[] ){
    for (let archivo of archivos) {
      const script = document.createElement('script');
      script.src = `./assets/js/${archivo}.js`;
      let body = document.getElementsByTagName('body')[0];
      body.appendChild(script);
    }
  }
}

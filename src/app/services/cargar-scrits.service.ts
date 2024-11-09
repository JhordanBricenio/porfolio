import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarScritsService {

  constructor() { }

  cargarScripts(archivos: string[]): Promise<void[]> {
    const promises = archivos.map(archivo => {
      return new Promise<void>((resolve, reject) => {
        const script = document.createElement('script');
        script.src = `./assets/js/${archivo}.js`;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`No se pudo cargar el script ${archivo}`));
        document.body.appendChild(script);
      });
    });

    return Promise.all(promises);
  }
}

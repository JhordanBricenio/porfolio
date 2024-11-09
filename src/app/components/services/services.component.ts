import { AfterViewInit, Component, OnInit } from '@angular/core';
const Swapy = require('swapy');

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})



export class ServicesComponent implements  AfterViewInit {

  ngAfterViewInit(): void {
    // Selecciona el contenedor donde se encuentran los elementos a intercambiar
    const container = document.getElementById('swap-container');
    
    if (container) {
      // Inicializa Swapy en el contenedor
      new Swapy(container, {
        onSwap: (source, target) => {
          console.log(`Swapped ${source} with ${target}`);
        }
      });
    }
  }

}

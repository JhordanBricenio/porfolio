import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'paginator-app',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Input() pagination: any;
  paginas: number[];
  constructor() { }

  ngOnInit(): void {

    this.paginas = new Array(this.pagination.totalPages).fill(0).map((_valor, indice) => indice + 1);
    
  }

}

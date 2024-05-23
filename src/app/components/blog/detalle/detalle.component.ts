import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  blog:Blog= new Blog();
  id:any;
  Url:string="http://localhost:8080/api/upload/img/";

  constructor(private route:ActivatedRoute,private blogService:BlogService ) { }


  ngOnInit(): void {

    this.route.params.subscribe(params=>{
      this.id=params['id'];
      this.blogService.getPorId(this.id).subscribe(data=>{
        this.blog=data;
        console.log(this.blog);
      }
      )
    })

  }

}

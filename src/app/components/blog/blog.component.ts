import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts:Blog[]=[]
  public pagination:any;
  maxCaracteres:number;
  page:number;
  

  constructor(private blogService:BlogService, private activateRoute:ActivatedRoute) {
    this.maxCaracteres = 300;
   }


  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(params=>{
      let page:number = +params.get('page');
      if(!page){
        page=0;
      }
      this.blogService.getPostPage(page).subscribe(data=>{
        this.posts=data.content;
        this.pagination=data;
      })
    })
  
  }

}

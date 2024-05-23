import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Tag } from 'src/app/models/tag';
import { TagService } from 'src/app/services/tag.service';
import Swal from 'sweetalert2';

interface Tags {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-tags-create',
  templateUrl: './tags-create.component.html',
  styleUrls: ['./tags-create.component.css']
})
export class TagsCreateComponent implements OnInit {

  tag:Tag ;

  tags: Tags[] = [
    { value: 'blue', viewValue: 'green' },
    { value: 'indigo', viewValue: 'indigo' },
    { value: 'purple', viewValue: 'purple' },
    { value: 'danger', viewValue: 'danger' },
    { value: 'warning', viewValue: 'warning' },

  ];

  constructor(private tagService: TagService, private router: Router
    ,private snack: MatSnackBar,private route:ActivatedRoute) { 
    this.tag = new Tag();
  }

  ngOnInit(): void {
    this.init_data();
  }
  init_data(){
    this.route.params.subscribe(params => {
      let id = params['id'];
      if(id){
        this.tagService.getId(id).subscribe(
          response=>{
            console.log(response);
            
            this.tag = response;
          }
         
        );
      }
    });
  }
  registro(registroForm){

    if(registroForm.valid){
      this.tagService.createTag(this.tag).subscribe(
        response => {
          Swal.fire({
            icon: 'success',
            title:'Etiqueta creada',
          });
          this.router.navigate(['/admin/indexTags']);
        }
      );
    }
    else {
      this.snack.open('Los datos del formulario no son válidos', 'Cerrar', {
        duration: 3000
      });
    }
  }
  update(registroForm){
    if(registroForm.valid){
      this.tagService.updateTag(this.tag).subscribe(
        response => {console.log(response);
          Swal.fire({
            icon: 'success',
            title:'Etiqueta actualizada',
          });
          this.router.navigate(['/admin/indexTags']);
        }
      );
    }
    else {
      this.snack.open('Los datos del formulario no son válidos', 'Cerrar', {
        duration: 3000
      });
    }
  }
}

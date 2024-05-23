import { Blog } from 'src/app/models/blog';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BlogService } from 'src/app/services/blog.service';
import { Tag } from 'src/app/models/tag';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  
  public Editor = ClassicEditor;
  content= new FormControl('', Validators.required);
  getErrorMessage() {
    if (this.content.hasError('required')) {
      return 'You must enter a value';
    }
    return this.content.hasError('content') ? 'Not a valid content' : '';
  }

  public id;
  public blog: Blog = new Blog();
  toppings = new FormControl('');
  public toppingList: Tag[] = [];

  constructor(private blogService: BlogService,
    private snack: MatSnackBar, private router: Router,
    private authService: AuthService,
    private activatedRoute:ActivatedRoute) {

  }

  ngOnInit(): void {

   this.init_data();
  }
  init_data(){
    this.activatedRoute.params.subscribe(
      params => {
        let id = params['id'];
        if (id) {
          this.blogService.getPorId(id).subscribe(
            response => {
              console.log(response);
              this.blog = response;
            }
          );
        }
      }
    );

    this.blogService.getTags().subscribe(
      response => {
        this.toppingList = response;
      }
    );
  }

  registro(registroForm: any) {
    if (registroForm.valid) {
      let username = this.authService.usuario.nombres + ' ' + this.authService.usuario.apellidos;
      this.blog.autor = username;

      this.blogService.savePost(this.blog).subscribe(
        response => {
          console.log(response);
          Swal.fire({
            icon: 'success',
            title: 'Post creado con éxito'
          });
          this.router.navigate(['/admin/indexPost']);
        }
      );
    }
    else {
      this.snack.open('Los datos del formulario no son válidos', 'Cerrar', {
        duration: 3000
      });
    }

  }

  mostrarNombre(etiqueta?: Tag): string | undefined {
    return etiqueta ? etiqueta.nombre : undefined;


  }

}

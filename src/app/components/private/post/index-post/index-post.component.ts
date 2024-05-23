import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';
import { ModalService } from 'src/app/services/modal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-index-post',
  templateUrl: './index-post.component.html',
  styleUrls: ['./index-post.component.css']
})
export class IndexPostComponent implements OnInit {

  public posts:Blog[]= [];
  proyectoSeleccioando:Blog;

  constructor(private blogService:BlogService, private modalService:ModalService) { }

  ngOnInit(): void {
    this.blogService.getPosts().subscribe(
      response=>{
        this.posts = response;    
      }

    );
  }

  abrirModal(post:Blog){
    this.proyectoSeleccioando = post;
    this.modalService.abrirModal();

  }
  delete(post: Blog): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Está seguro?',
        text: `Seguro que desea eliminar el Post! ${post.titulo}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.blogService.deletePost(post.id).subscribe((response) => {
            this.posts = this.posts.filter((cli) => cli !== post);
            swalWithBootstrapButtons.fire(
              'Post Eliminado!',
              `Post ${post.titulo} Eliminado con éxito.`,
              'success'
            );
          });
        }
      });
  }


}

import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/models/tag';
import { TagService } from 'src/app/services/tag.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tags-index',
  templateUrl: './tags-index.component.html',
  styleUrls: ['./tags-index.component.css']
})
export class TagsIndexComponent implements OnInit {

  public tags:Tag[]= [];

  constructor(private tagService:TagService) { }

  ngOnInit(): void {
    this.tagService.getTags().subscribe(
      response => {
       this.tags = response;
       
      }
    )

  }
  delete(tag: Tag): void {
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
        text: `Seguro que desea eliminar el Tag! ${tag.nombre}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.tagService.deleteTag(tag.id).subscribe((response) => {
            this.tags = this.tags.filter((cli) => cli !== tag);
            swalWithBootstrapButtons.fire(
              'Tag Eliminado!',
              `Tag ${tag.nombre} Eliminado con éxito.`,
              'success'
            );
          });
        }
      });
  }



}

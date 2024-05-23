import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { ModalService } from 'src/app/services/modal.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public usuario:Usuario;
  usuarioSeleccionado:Usuario;

  constructor(public authService:AuthService, private modalService:ModalService,
    private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getUsuario(this.authService.usuario.id).subscribe(
      usuario => {        
        this.usuario = usuario;
        
      }
    )
  }
  abrirModal(usuario:Usuario){
    this.usuarioSeleccionado = usuario;
    this.modalService.abrirModal();

  }


}

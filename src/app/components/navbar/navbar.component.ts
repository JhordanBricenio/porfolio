import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
declare var $: any;


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(public  authService:AuthService, private router:Router) { 
  }

  ngOnInit(): void {
  }

  logout():void{
    let username = this.authService.usuario.nombres;
    this.authService.logout();
    Swal.fire('Adiós', `Amo ${username}, has cerrado sesión con éxito!`, 'success');
    this.router.navigate(['/']);
  }
  
}

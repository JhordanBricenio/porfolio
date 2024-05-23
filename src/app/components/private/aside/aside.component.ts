import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  constructor(private authService:AuthService, private route:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout();
    this.route.navigate(['/']);
    

  }

}

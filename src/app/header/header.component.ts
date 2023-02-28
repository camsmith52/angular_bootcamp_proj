import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Input() deviceXs:boolean
isLoggedIn: any = false

constructor(private router: Router, private authService: AuthService){}

ngOnInit(): void {
  this.authService.checkAuth$.subscribe(auth =>{
    console.log(auth)
    this.isLoggedIn = auth
  })
  }

  onLogout(){
    this.router.navigate(['signout'])

  }


}

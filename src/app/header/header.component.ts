import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Input() deviceXs:boolean

constructor(private router: Router){}

ngOnInit(): void {
  }

  onLogout(){
    localStorage.removeItem('accesstoken')
    this.router.navigate(['login'])
  }


}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  checkAuth$ = new BehaviorSubject<any>(false);
  isLoggedIn() {
    if(localStorage.getItem('accesstoken')){
      return this.checkAuth$.next(true);
    }
    return this.checkAuth$.next(false);
  }

  logout(){
    return this.checkAuth$.next(false);
  }
  constructor() { }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn(): boolean {
    if(localStorage.getItem('accesstoken')){
      return true
    }
    return false
  }
  constructor() { }
}

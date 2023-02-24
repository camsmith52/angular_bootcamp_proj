import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn(): boolean {
    if(localStorage.getItem('accesstoken')){
      console.log('all good')
      return true
    }
    console.log('no login provided')
    return false
  }
  constructor() { }
}

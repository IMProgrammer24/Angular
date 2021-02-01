import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor(private router: Router) { }

  authenticate(user, password){
    if(user==='sunny' && password==='dummy'){
      sessionStorage.setItem('authenticatedUser',user);
      return true;
    }else{
      return false;
    }
  }

  isUserLoggedIn(){
    let user=sessionStorage.getItem('authenticatedUser');
    return !(user===null);
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
    this.router.navigate(['signin']);
  }

}

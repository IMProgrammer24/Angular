import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http:HttpClient,private router: Router) { }

  executeBasicAuthenticationService(username, password){
    let basicAuthHeader= 'Basic ' + window.btoa(username + ':' + password);
    let header= new HttpHeaders({
      Authorization : basicAuthHeader
    })
    return this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`,{headers:header}).pipe(
      map(
        data =>{
          sessionStorage.setItem('authenticatedUser',username);
          sessionStorage.setItem('authtoken',basicAuthHeader);
          return data;
        }
      )
    )
  } 

  getAuthenticatedUser(){
    return sessionStorage.getItem('authenticatedUser');
  }
  getAuthenticatedToken(){
    if(this.getAuthenticatedUser){
      return sessionStorage.getItem('authtoken');
    }
  }
  isUserLoggedIn(){
    let user=sessionStorage.getItem('authenticatedUser');
    return !(user===null);
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
    sessionStorage.removeItem('authtoken');
    this.router.navigate(['signin']);
  }


}

export class AuthenticationBean{
  constructor(public message:string){}
}

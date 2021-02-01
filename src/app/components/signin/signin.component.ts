import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from 'src/app/service/basic-authentication.service';
import { HardcodedAuthenticationService } from 'src/app/service/hardcoded-authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  username = 'sunny';
  password = '';
  errorMessage = 'InValid Credential';
  invalidLogin = false;
  closeLoginForm=true;

  constructor(private router: Router,
    public hardcodedAuthentication: HardcodedAuthenticationService,
    private basicAuthenticationService : BasicAuthenticationService) { }

  ngOnInit() {
  }


  handleLogin() {
    // if(this.username==='sunny' && this.password==='dummy'){
    if (this.hardcodedAuthentication.authenticate(this.username, this.password)) {
      this.router.navigate(['home']);
      // this.router.navigate(['home',this.username]);
      this.invalidLogin = false;
    }
    else {
      this.invalidLogin = true;
    }
  }

  handleBasicAuthLogin(){
    this.basicAuthenticationService.executeBasicAuthenticationService(this.username,this.password)
      .subscribe(
        data=>{
          console.log("Basic Authentication data");
          console.log(data);
          this.router.navigate(['home']);
          this.invalidLogin = false;
        },
        error => {
          console.log("Error in Basic Authentication");
          console.log(error);
          this.invalidLogin = true;         
        }
      )
  }

  handleLoginFormClose(){
    if(this.closeLoginForm){
      this.closeLoginForm=false;
    }else{
      this.closeLoginForm=true;
    }
  }
}

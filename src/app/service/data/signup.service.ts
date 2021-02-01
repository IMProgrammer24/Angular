import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupName } from '@angular/forms';
import { map } from 'rxjs/operators';


export class signup{
  constructor(private username:string, private email:string,
    private password:string,private confirmpassword ){

    }
}


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  signupDataDetails:signup;

  constructor(private http:HttpClient) { }

  showsignupdata(result:any){
    // this.signupDataDetails=new signup(signupform.controls('username'), signupform.value.email,
    //   signupform.value.password, signupform.value.confirmpassword);
    // this.signupDataDetails=new signup(signupform.get('username'), signupform.value.email,
    //   signupform.value.password, signupform.value.confirmpassword);
  //  let signupdata:signup = new signup(signupform.get('username'));
    // this.signupDataDetails = Object.assign(this.signupDataDetails, signupform);
    // console.log("tyying -->> "+this.signupDataDetails);
    // console.log("The Signup Value is => "+signupform);


    // console.log("SignUp Service "+result.username);
    console.log("SignUp Service");
    console.log(result);
    // const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    const body = { result };

    this.http.post<any>('http://localhost:8080/register', result).subscribe(data => {
        console.log(data);
    });

    // this.http.post('http://localhost:8080/register', result).pipe(
    //   map(
    //     (response) =>{
    //       if(response){
    //         return response;
    //       }
    //     }
    //   )
    // );

  }
}

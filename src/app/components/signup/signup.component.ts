import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupService } from 'src/app/service/data/signup.service';


export class signupData{
  constructor(private username:string, private email:string,
    private password:string,private confirmpassword ){

    }
}


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupform: FormGroup;

  constructor(private formBuilder: FormBuilder, private signupservice:SignupService) { }

  ngOnInit() {
    this.signupform=this.formBuilder.group({
      username: ['',[Validators.required,Validators.minLength(5)]],
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required]],
      confirmpassword : ['',[Validators.required]]
    },{
      validator: this.confirmedValidator('password','confirmpassword')
    }
    );
  }

  onSubmit(signupform) {
    // console.log(this.signupform.value);
    let debug: any = this.signupform;
    console.log("This is SignupForm");
    console.log(debug);
    const result: signupData = Object.assign({}, this.signupform.value);
    console.log("The Result -> ");
    console.log(result);

    this.signupservice.showsignupdata(result);
  }

  confirmedValidator(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        } else {
            matchingControl.setErrors(null);
        }
      }
    }


  get username() {
    return this.signupform.get('username');
  } 
  get email() {
    return this.signupform.get('email');
  } 
  get password() {
    return this.signupform.get('password');
  } 
  get confirmpassword() {
    return this.signupform.get('confirmpassword');
  } 
  

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  welcomeMessageFromServer:string;
  welcomeMessageID_FromServer:string;
  errorWelcomeMessage:string;
  uname:string;

  constructor(private route:ActivatedRoute,public welcomeservice:WelcomeDataService) { }

  ngOnInit() {
    this.uname=this.route.snapshot.params['name'];
//    console.log(this.route.snapshot.params['name']);
  }

  getWelcomeMessage(){
    console.log(this.welcomeservice.executeHelloWordBeanService());
    this.welcomeservice.executeHelloWordBeanService().subscribe(
      response => this.handleSuccessfulMessage(response),
      err => this.handleErrorMessage(err)
    );
  }

  handleSuccessfulMessage(response){
    this.welcomeMessageID_FromServer=response.id;
    this.welcomeMessageFromServer=response.message;
    console.log(response);
    console.log("Person Id",response.id,"  Message ",response.message);
  }
  handleErrorMessage(err){
    // console.log(err);
    // console.log("This is error.error =>",err.error);
    // console.log("This is error.error.message =>",err.error.message);
    this.errorWelcomeMessage=err.error.message;
  }
  getWelcomeMessageWithPathVariable(){
    console.log(this.welcomeservice.executeHelloWorldWithPathvariable("mohit"));
    this.welcomeservice.executeHelloWorldWithPathvariable("mohit").subscribe(
      response => this.handleSuccessfulMessage(response),
      err => this.handleErrorMessage(err)
    );
  }
}

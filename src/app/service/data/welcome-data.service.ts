import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class HelloWorldBean{
  constructor(private id:string, private message:string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }

  executeHelloWordBeanService(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-bean');
//    console.log("Executed Hello World Bean Service");
  }

  executeHelloWorldWithPathvariable(name){
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-bean/path-variable/${name}`);
  }
}

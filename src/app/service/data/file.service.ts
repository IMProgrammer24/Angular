import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class Manufacturer{
  constructor(private id:Number,private title:string,private model:string,
    private description:string,private imageData:string){

  }
}

export class HelloWorldBean{
  constructor(private id:string, private message:string){}
}

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http:HttpClient) { }

  // getImages(manufactername :string) : Observable<any>{
  //   let httpParams=new HttpParams().set('ManufacturerName',manufactername);
  
  //   return this.http.get(`http://localhost:8080/getimages`,{params:httpParams});
  // }

  getImages(manufactername :string) : Observable<any>{
    let httpParams=new HttpParams().set('ManufacturerName',manufactername);   
    
    return this.http.get<Manufacturer[]>(`http://localhost:8080/getimagesdetails`,{params:httpParams});
  }

  fetchTestData(){
    return this.http.get(`https://jsonplaceholder.typicode.com/todos/1`);
  }

  fetchHelloWorld(){
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-bean`);
  }
}

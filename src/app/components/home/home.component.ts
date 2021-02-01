import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FileService, Manufacturer } from 'src/app/service/data/file.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showhome:boolean=false;
  public images:any=[];
  manufacturedetails:Manufacturer[];
  

  manufacturerList: any = ['Ducati', 'Honda', 'Triumph']

  constructor(public fb: FormBuilder, public fileService:FileService) { }

  manufacturerForm = this.fb.group({
    manufacturername: ['']
  })

  ngOnInit() {
  }
  onSubmit() {
    alert(JSON.stringify(this.manufacturerForm.value))
  }
  changeManufacturer(event){
    // console.log(event.target.value);
    var manufactureName=event.target.value;
    this.addportfolio(manufactureName);
    
  }

  addportfolio(manufacturerName:string){
    if(manufacturerName ==='--Select--'){
      this.showhome=false;
    }
    else{
      this.getImagesPath(manufacturerName);
      this.showhome=true;
    }
  }

  getImagesPath(manufacturerName:string){
//Added for testing Interceptors
    // this.fileService.fetchTestData().subscribe(data=>{
    //   console.log(data);
    // });

    // this.fileService.fetchHelloWorld().subscribe(data => {
    //   console.log("Hello Bean Response");
    //   console.log(data);
    // });

    this.fileService.getImages(manufacturerName).subscribe(response=>{
      console.log('Log --> '+response);
      this.manufacturedetails=response;
    }
    );
  }

  // getImagesPath(manufacturerName:string){
  //   this.fileService.getImages(manufacturerName).subscribe(response=>{
  //     console.log('Log --> '+response);
  //     this.images=response;
  //   }
  //   );
  // }

  // public imgpaths:any[]=[{id:'1',path:'assets/images/ducati/ducati-1.jpg'},
  // {id:'2',path:'assets/images/ducati/ducati-2.jpg'},
  // {id:'3',path:'assets/images/ducati/ducati-3.jpg'}
  // ];
  

}

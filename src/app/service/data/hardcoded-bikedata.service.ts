import { Injectable } from '@angular/core';

export class bikeData{
  constructor(manufacturer:string,title:string, subtitle:string, imgpath:string){}
}


@Injectable({
  providedIn: 'root'
})
export class HardcodedBikedataService {
  bikeDataobj:any=[new bikeData('Ducati','Ducati2020','Roar on Road','')];

  constructor() { }
}

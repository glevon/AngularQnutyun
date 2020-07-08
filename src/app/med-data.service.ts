import { Injectable } from '@angular/core';
import { strict } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class MedDataService {
  public medicine: Medicine[] = [
    new Medicine( "Aspirin", "1300", "18","Armenia","glxacavi"),
    new Medicine( "Levomicin", "150", "1","Russia","lucoxakan"),
    new Medicine( "Nimesil", "130", "10","Armenia","cavazrkox"),
    new Medicine( "Analgin", "170", "3","Pacistan","glxacavi"),
    new Medicine( "Dimitrol", "100", "20","USA","glxacavi"),
  ]

  constructor() { }
  addMed(x){
    this.medicine.push(x)
    console.log(this.medicine);
    
  }
  getMedicine(){
    console.log(this.medicine);
    
    return this.medicine
  }
  buy(i){
    this.medicine.forEach((item, index)  => {
      if (i.includes(index)){
        item.count=String(Number(item.count)-1)
      }
      if(Number(item.count)===0){
        this.medicine.splice(index, 1);
      }
    });

  }
}


export class Medicine {
  public name: string 
  public price: string 
  public count: string
  public origin:string
  public description:string
  constructor( b:string, c:string, d:string, e:string, f:string){
    this.name = b 
    this.price = c 
    this.count = d
    this.origin=e
    this.description=f
  }
}
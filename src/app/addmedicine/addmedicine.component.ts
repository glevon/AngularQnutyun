import { Component, OnInit } from '@angular/core';
import { MedDataService, Medicine } from '../med-data.service';

@Component({
  selector: 'app-addmedicine',
  templateUrl: './addmedicine.component.html',
  styleUrls: ['./addmedicine.component.css']
})
export class AddmedicineComponent implements OnInit {
  public medInp : Medicine= {name:"",price:"",count:"",origin:"", description:""}
  constructor(private medicine:MedDataService) { }

  ngOnInit(): void {
  }
  addMed():void{
    this.medicine.addMed(this.medInp)
    this.medInp={name:"",price:"",count:"",origin:"", description:""}
  }
}

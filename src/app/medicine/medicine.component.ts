import { Component, OnInit } from '@angular/core';
import { MedDataService, Medicine } from '../med-data.service';
import {ActivatedRoute}  from '@angular/router'

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {
  public med : Medicine
  constructor(private Route:ActivatedRoute,private medicine:MedDataService) { }

  ngOnInit(): void {
    let id =parseInt(this.Route.snapshot.paramMap.get("k"))
    this.med=this.medicine.getMedicine()[id]     

  }

}

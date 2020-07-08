import { Component, OnInit } from '@angular/core';
import { MedDataService ,Medicine} from '../med-data.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  public dexer: Medicine [] 
  public max:string=""
  public min:string=""
  public indexes: number[]=[]
  constructor(private medicine:MedDataService) { }

  ngOnInit(): void {
    this.dexer=this.medicine.getMedicine()
  }
  border(i){
    if(this.indexes.includes(i)){
      this.indexes.splice(this.indexes.indexOf(i), 1);
    }
    else{

      this.indexes.push(i)
    }
  }
  buy(){
    this.medicine.buy(this.indexes)
    this.indexes=[]
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import {Medicine} from './med-data.service'
@Pipe({
  name: 'filterByPrice'
})
export class FilterByPricePipe implements PipeTransform {

  transform(value: Medicine[], ...args: any[]): Medicine[] {
    if(args[0]=="" && args[1]==""){
      return value
    }
    return  value.filter(a=>Number(a.price)>=Number(args[0]) && Number(a.price)<=Number(args[1]))
    
  }

}

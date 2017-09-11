import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../item-list/item.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(myCats: Item[], variable: string): any {
    if (variable && variable.trim().length === 0) {
      return myCats;
    }
    return myCats.filter(cat => cat.name.trim().toLowerCase().indexOf(variable.trim().toLowerCase()) !== -1);
  }

}

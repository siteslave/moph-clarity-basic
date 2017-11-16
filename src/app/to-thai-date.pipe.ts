import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'toThaiDate'
})
export class ToThaiDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let thaiDate = moment(value).locale('th').format('DD MMMM') + ' ' + (moment(value).get('year') + 543);
    return thaiDate;
  }

}

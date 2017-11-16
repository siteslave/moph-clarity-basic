import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toSexName'
})
export class ToSexNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value === '1' ? 'ชาย' : 'หญิง';
  }

}

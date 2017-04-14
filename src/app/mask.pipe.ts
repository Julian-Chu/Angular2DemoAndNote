import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string, maxLength: number = 4): any {
    if (value.length > maxLength)
      return value.substr(0, 4) + '*******';
    else return value;
  }

}

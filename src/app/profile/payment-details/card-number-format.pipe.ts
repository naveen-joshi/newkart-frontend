import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardNumberFormat'
})
export class CardNumberFormatPipe implements PipeTransform {

  transform(value: String, ...args: unknown[]): String {
    return '************' + value.slice(12);
  }

}

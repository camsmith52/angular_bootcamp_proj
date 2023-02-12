import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard'
})
export class CreditCardPipe implements PipeTransform {

  transform(value: string | null | undefined): string {
     if (!value) {
      return ''
    }
    return value.replace(/\s+/g, '').replace(/(\d{4})/g, '$1 ').trim();
    // if (!value) {
    //   return ''
    // }
    // let result = '';
    // for (let i = 0; i < value.length; i++) {
    //   if (i % 4 === 0 && i !== 0) {
    //     result += ' ';
    //   }
    //   result += value[i];
    // }
    // return result;
  }
}

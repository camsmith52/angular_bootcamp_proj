import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mMYY'
})
export class MMYYPipe implements PipeTransform {

  transform(value: string | null | undefined): string {
    if (!value) {
      return ''
    }
    const date = new Date(value);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear().toString().slice(-2);
    return `${month}/${year}`;
  }

}

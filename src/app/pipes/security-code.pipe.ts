import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'securityCode'
})
export class SecurityCodePipe implements PipeTransform {

  transform(value: string | null | undefined): string {
    if (!value) {
      return ''
    }
    return value.length >= 3 ? value.slice(0, 2) : value;
}
}
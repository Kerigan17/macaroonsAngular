import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPhone'
})
export class CustomPhonePipe implements PipeTransform {

  transform(value: string): string {
    let cleaned: string = ('' + value).replace(/\D/g, '');
    let match: RegExpMatchArray | null = cleaned.match(/^(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})$/);

    if (match) {
      return '+' + match[1] + ' (' + match[2] + ') ' + match[3] + '-' + match[4] + '-'  + match[5];
    }
    return value;
  }
}

export class customPhone {
}

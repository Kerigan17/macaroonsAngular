import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortText'
})
export class ShortTextPipe implements PipeTransform {
  transform(value: string): string {
    const res: string = value.length <= 95 ? value : `${value.slice(0, 95)} ...`
    return res;
  }

}

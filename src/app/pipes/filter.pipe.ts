import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultElements = [];
    for (const element of value) {
      if (element.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultElements.push(element);
      }
    }
    return resultElements;
  }
}

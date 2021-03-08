import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginate',
})
export class PaginatePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}

//TODO: ver 5:32 para copiar el código del pipe...

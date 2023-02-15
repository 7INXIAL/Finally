import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'too',
})
export class TooPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    // args ['xx','ss']
    return value + 'oo';
  }
}

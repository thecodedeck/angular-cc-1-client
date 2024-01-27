import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
  standalone: true,
})
export class PricePipe implements PipeTransform {
  // Used to append a dollar sign to the price
  transform(value: unknown, ...args: unknown[]): unknown {
    return `${value}$`;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency',
  standalone: true,
})
export class CurrencyPipe implements PipeTransform {
  transform(value: number, currencySymbol: string = '€'): string {
    if (value === null || value === undefined) {
      return '';
    }
    return `${currencySymbol}${value.toFixed(2)}`;
  }
}

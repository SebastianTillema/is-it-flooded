import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'meterToCentimeter',
  standalone: true
})
export class MeterToCentimeter implements PipeTransform {
  transform(value: number): string {
    return (value * 100).toFixed(1);
  }
}

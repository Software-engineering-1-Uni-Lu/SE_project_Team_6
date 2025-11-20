import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderStatus',
  standalone: true,
})
export class OrderStatusPipe implements PipeTransform {
  transform(value: string): string {
    const statusMap: { [key: string]: string } = {
      pending: 'Pending',
      queued: 'In Queue',
      in_preparation: 'In Preparation',
      ready: 'Ready for Pickup',
      completed: 'Completed',
      cancelled: 'Cancelled',
    };
    return statusMap[value] || value;
  }
}

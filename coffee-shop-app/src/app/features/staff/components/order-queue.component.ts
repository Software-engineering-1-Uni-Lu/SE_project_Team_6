import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-queue',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="order-queue">
      <h2>Order Queue</h2>
      <!-- Order queue display -->
    </div>
  `,
  styles: [
    `
      .order-queue {
        padding: 2rem;
      }
    `,
  ],
})
export class OrderQueueComponent {}

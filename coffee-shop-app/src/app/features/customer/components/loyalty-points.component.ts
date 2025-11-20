import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loyalty-points',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="loyalty-container">
      <h2>Loyalty Points</h2>
      <!-- Loyalty points display and history -->
    </div>
  `,
  styles: [
    `
      .loyalty-container {
        padding: 2rem;
      }
    `,
  ],
})
export class LoyaltyPointsComponent {}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-item-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="item-detail-container">
      <h2>Item Detail</h2>
      <!-- Item details will be displayed here -->
    </div>
  `,
  styles: [
    `
      .item-detail-container {
        padding: 2rem;
      }
    `,
  ],
})
export class MenuItemDetailComponent {}

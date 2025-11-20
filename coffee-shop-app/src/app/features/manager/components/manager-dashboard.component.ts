import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manager-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="manager-dashboard">
      <h2>Manager Dashboard</h2>
      <!-- Dashboard content -->
    </div>
  `,
  styles: [
    `
      .manager-dashboard {
        padding: 2rem;
      }
    `,
  ],
})
export class ManagerDashboardComponent {}

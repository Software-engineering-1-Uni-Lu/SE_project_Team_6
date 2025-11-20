import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <!-- System administration interface -->
    </div>
  `,
  styles: [
    `
      .admin-dashboard {
        padding: 2rem;
      }
    `,
  ],
})
export class AdminDashboardComponent {}

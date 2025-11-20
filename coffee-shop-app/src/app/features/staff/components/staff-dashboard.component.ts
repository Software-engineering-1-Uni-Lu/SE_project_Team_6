import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-staff-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="staff-dashboard">
      <h2>Staff Dashboard</h2>
      <!-- Dashboard content -->
    </div>
  `,
  styles: [
    `
      .staff-dashboard {
        padding: 2rem;
      }
    `,
  ],
})
export class StaffDashboardComponent {}

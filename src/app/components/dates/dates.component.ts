import { Component, OnInit, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AdminDataService } from '../../services/admin-data.service';

@Component({
  selector: 'app-dates',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule, MatIconModule],
  templateUrl: './dates.component.html',
  styleUrl: './dates.component.css',
})
export class DatesComponent implements OnInit {
  public readonly adminService = inject(AdminDataService);

  displayedColumns: string[] = ['date', 'gamesCount'];

  // Transform object { "date": count } into array [{ date: "date", count: count }]
  formattedDates = computed(() => {
    const data = this.adminService.dates();
    if (!data) return [];
    return Object.entries(data).map(([date, count]) => ({
      date,
      count,
    }));
  });

  ngOnInit() {
    this.adminService.fetchDates();
  }
}

import { Component, OnInit, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { AdminDataService } from '../../services/admin-data.service';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatDividerModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css',
})
export class StatsComponent implements OnInit {
  private readonly adminService = inject(AdminDataService);

  // Using computed signals for easy data access
  totalGames = computed(() => this.adminService.aggregate()?.[0]?.aantal_spellen || 0);
  totalPlayers = computed(() => this.adminService.aggregate()?.[1]?.aantal_spelers || 0);
  apiStats = computed(() => this.adminService.aggregate()?.[2] || []);

  ngOnInit() {
    this.adminService.fetchAggregate();
  }
}

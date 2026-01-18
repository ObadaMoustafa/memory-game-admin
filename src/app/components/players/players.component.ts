import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AdminDataService } from '../../services/admin-data.service';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule, MatIconModule],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css',
})
export class PlayersComponent implements OnInit {
  public readonly adminService = inject(AdminDataService);

  displayedColumns: string[] = ['username', 'email'];

  ngOnInit() {
    this.adminService.fetchPlayers();
  }
}

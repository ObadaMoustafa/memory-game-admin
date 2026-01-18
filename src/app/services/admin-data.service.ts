import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { API_BASE_URL } from '../app.constants';

@Injectable({
  providedIn: 'root',
})
export class AdminDataService {
  private readonly http = inject(HttpClient);

  // Signals to hold the data
  aggregate = signal<any>(null);
  players = signal<any[]>([]);
  dates = signal<any[]>([]);
  loading = signal<boolean>(false);

  async fetchAggregate() {
    this.loading.set(true);
    try {
      const data = await firstValueFrom(this.http.get(`${API_BASE_URL}/admin/aggregate`));
      this.aggregate.set(data);
    } catch (error) {
      console.error('Error fetching aggregate:', error);
    } finally {
      this.loading.set(false);
    }
  }

  async fetchPlayers() {
    this.loading.set(true);
    try {
      const data = await firstValueFrom(this.http.get<any[]>(`${API_BASE_URL}/admin/players`));
      this.players.set(data);
    } catch (error) {
      console.error('Error fetching players:', error);
    } finally {
      this.loading.set(false);
    }
  }

  async fetchDates() {
    this.loading.set(true);
    try {
      const data = await firstValueFrom(this.http.get<any[]>(`${API_BASE_URL}/admin/dates`));
      this.dates.set(data);
    } catch (error) {
      console.error('Error fetching dates:', error);
    } finally {
      this.loading.set(false);
    }
  }
}

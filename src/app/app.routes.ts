import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StatsComponent } from './components/stats/stats.component';
import { PlayersComponent } from './components/players/players.component';
import { LoginComponent } from './components/login/login.component';
import { DatesComponent } from './components/dates/dates.component';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      { path: 'stats', component: StatsComponent },
      { path: 'players', component: PlayersComponent },
      { path: 'dates', component: DatesComponent },
      { path: '', redirectTo: 'stats', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: 'login' },
];

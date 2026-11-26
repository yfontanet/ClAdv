
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadComponent: () =>
      import('./pages/welcome/welcome').then(m => m.Welcome)
  },
  {
    path: 'calendario',
    loadComponent: () =>
      import('./pages/calendar/calendar').then(m => m.Calendar)
  },
  {
    path: 'regalo/:day',
    loadComponent: () =>
      import('./pages/gift/gift').then(m => m.Gift)
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }
];

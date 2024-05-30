import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./pages/register/register.component').then(
        m => m.RegisterComponent
      ),
  },
  {
    path: 'resetpassword',
    loadComponent: () =>
      import('./pages/recovery-link/recovery-link.component').then(
        m => m.RecoveryLinkComponent
      ),
  },
];

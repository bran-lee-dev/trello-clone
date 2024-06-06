import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    title: 'Log in to continue - Log in with Atlassian account',
    loadComponent: () =>
      import('./pages/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'signup',
    title: 'Sign up - Log in with Atlassian account',
    loadComponent: () =>
      import('./pages/register/register.component').then(
        m => m.RegisterComponent
      ),
  },
  {
    path: 'resetpassword',
    title: `Can't log in? - Log in with Atlassian account`,
    loadComponent: () =>
      import('./pages/recovery-link/recovery-link.component').then(
        m => m.RecoveryLinkComponent
      ),
  },
];

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-auth-error-icon',
  standalone: true,
  templateUrl: './auth-error-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthErrorIconComponent {}

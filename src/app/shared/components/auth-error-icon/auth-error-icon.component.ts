import { NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-auth-error-icon',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './auth-error-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthErrorIconComponent {
  public fillColor = input.required<string>();
}

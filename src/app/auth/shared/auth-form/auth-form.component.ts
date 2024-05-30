import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [],
  templateUrl: './auth-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthFormComponent {
  public formInputValue = input.required<string>();
}

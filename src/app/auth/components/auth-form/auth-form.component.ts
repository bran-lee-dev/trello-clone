import { NgStyle } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  signal,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorMessages } from '../../models';
import { AuthErrorIconComponent } from '../../../shared/components/auth-error-icon/auth-error-icon.component';

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgStyle, AuthErrorIconComponent],
  templateUrl: './auth-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthFormComponent {
  private fb = inject(FormBuilder);

  public formInputValue = input.required<string>();
  public errorMessages = input<ErrorMessages>({
    required: 'Please enter an email address',
    email: 'Please enter a valid email address',
  });
  public isSent = signal<boolean>(false);

  public loginForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
  });

  public getErrorField() {
    if (this.isRequired()) return this.errorMessages().required;

    if (this.isValidEmail()) return this.errorMessages().email;

    return '';
  }

  private isRequired() {
    return this.loginForm.controls.email.getError('required');
  }

  private isValidEmail() {
    return this.loginForm.controls.email.getError('email');
  }

  public onSubmit() {
    if (this.loginForm.invalid) {
      this.getErrorField();
    }

    this.isSent.set(true);

    console.log(this.loginForm.value);
  }
}

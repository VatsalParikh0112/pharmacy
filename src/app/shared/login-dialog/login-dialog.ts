import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login';
import { NgClass } from '@angular/common';
import { Button } from '../button/button';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-login-dialog',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, Button],
  templateUrl: './login-dialog.html',
})
export class LoginDialog {
  public role: 'pharmacy' | 'patient' = 'patient';
  private fb = inject(FormBuilder);
  private dialogRef = inject<DialogRef<LoginDialog>>(DialogRef);
  private router = inject(Router);
  private sanitizer = inject(DomSanitizer);
  private auth = inject(LoginService);

  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  showPassword = false;

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched(); // highlight validation errors
      return;
    }

    const { email, password } = this.form.value;

    this.auth.login(email, password).subscribe({
      next: (res) => {
        if (res.success && res.role === this.role) {
          this.dialogRef.close();
          if (this.role === 'pharmacy') {
            this.router.navigate(['/pharmacy']);
          } else {
            this.router.navigate(['/patient']);
          }
        } else {
          alert(res.message || 'Invalid credentials');
        }
      },
      error: () => {
        alert('Login failed. Please check your network or credentials.');
      },
    });
  }

  // Closes the dialog
  close(): void {
    this.dialogRef.close();
  }

  mailSvg: SafeHtml = this.sanitizer
    .bypassSecurityTrustHtml(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5H19C19.5304 5 20.0391 5.21071 20.4142 5.58579C20.7893 5.96086 21 6.46957 21 7M3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7M3 7L12 13L21 7" stroke="black" stroke-opacity="0.5" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);

  passSvg: SafeHtml = this.sanitizer
    .bypassSecurityTrustHtml(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 18C11.4696 18 10.9609 17.7893 10.5858 17.4142C10.2107 17.0391 10 16.5304 10 16C10 14.89 10.89 14 12 14C12.5304 14 13.0391 14.2107 13.4142 14.5858C13.7893 14.9609 14 15.4696 14 16C14 16.5304 13.7893 17.0391 13.4142 17.4142C13.0391 17.7893 12.5304 18 12 18ZM18 21V11H6V21H18ZM18 9C18.5304 9 19.0391 9.21071 19.4142 9.58579C19.7893 9.96086 20 10.4696 20 11V21C20 21.5304 19.7893 22.0391 19.4142 22.4142C19.0391 22.7893 18.5304 23 18 23H6C5.46957 23 4.96086 22.7893 4.58579 22.4142C4.21071 22.0391 4 21.5304 4 21V11C4 9.89 4.89 9 6 9H7V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C12.6566 2 13.3068 2.12933 13.9134 2.3806C14.52 2.63188 15.0712 3.00017 15.5355 3.46447C15.9998 3.92876 16.3681 4.47995 16.6194 5.08658C16.8707 5.69321 17 6.34339 17 7V9H18ZM12 4C11.2044 4 10.4413 4.31607 9.87868 4.87868C9.31607 5.44129 9 6.20435 9 7V9H15V7C15 6.20435 14.6839 5.44129 14.1213 4.87868C13.5587 4.31607 12.7956 4 12 4Z" fill="black" fill-opacity="0.5"/>
</svg>
`);
}

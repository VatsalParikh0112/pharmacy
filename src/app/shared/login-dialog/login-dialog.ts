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
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-login-dialog',
  standalone: true,
  imports: [ReactiveFormsModule],
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
    email: ['', [Validators.required]],
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

  googleSvg: SafeHtml = this.sanitizer
    .bypassSecurityTrustHtml(`<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.2569 12.5519H26.25V12.5H15V17.5H22.0644C21.0338 20.4106 18.2644 22.5 15 22.5C10.8581 22.5 7.5 19.1419 7.5 15C7.5 10.8581 10.8581 7.5 15 7.5C16.9119 7.5 18.6513 8.22125 19.9756 9.39938L23.5113 5.86375C21.2788 3.78313 18.2925 2.5 15 2.5C8.09688 2.5 2.5 8.09688 2.5 15C2.5 21.9031 8.09688 27.5 15 27.5C21.9031 27.5 27.5 21.9031 27.5 15C27.5 14.1619 27.4138 13.3438 27.2569 12.5519Z" fill="#FFC107"/>
<path d="M3.94141 9.18187L8.04828 12.1937C9.15953 9.4425 11.8508 7.5 15.0002 7.5C16.912 7.5 18.6514 8.22125 19.9758 9.39937L23.5114 5.86375C21.2789 3.78312 18.2927 2.5 15.0002 2.5C10.1989 2.5 6.03516 5.21062 3.94141 9.18187Z" fill="#FF3D00"/>
<path d="M14.9992 27.4975C18.228 27.4975 21.1617 26.2619 23.3798 24.2525L19.5111 20.9787C18.2142 21.9657 16.629 22.4993 14.9992 22.4975C11.748 22.4975 8.98734 20.4244 7.94734 17.5312L3.87109 20.6719C5.93984 24.72 10.1411 27.4975 14.9992 27.4975Z" fill="#4CAF50"/>
<path d="M27.2569 12.5519H26.25V12.5H15V17.5H22.0644C21.5714 18.8853 20.6833 20.0957 19.51 20.9819L19.5119 20.9806L23.3806 24.2544C23.1069 24.5031 27.5 21.25 27.5 15C27.5 14.1619 27.4138 13.3438 27.2569 12.5519Z" fill="#1976D2"/>
</svg>`);

  fbSvg: SafeHtml = this.sanitizer
    .bypassSecurityTrustHtml(`<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2219_6255)">
<path d="M30 15C30 6.71578 23.2842 0 15 0C6.71578 0 0 6.71578 0 15C0 22.4869 5.48531 28.6925 12.6562 29.8178V19.3359H8.84766V15H12.6562V11.6953C12.6562 7.93594 14.8957 5.85937 18.322 5.85937C19.9631 5.85937 21.6797 6.15234 21.6797 6.15234V9.84375H19.7883C17.9249 9.84375 17.3438 11 17.3438 12.1863V15H21.5039L20.8389 19.3359H17.3438V29.8178C24.5147 28.6925 30 22.487 30 15Z" fill="#1877F2"/>
<path d="M20.8389 19.3359L21.5039 15H17.3438V12.1863C17.3438 10.9999 17.9249 9.84375 19.7883 9.84375H21.6797V6.15234C21.6797 6.15234 19.9631 5.85938 18.3219 5.85938C14.8957 5.85938 12.6562 7.93594 12.6562 11.6953V15H8.84766V19.3359H12.6562V29.8178C13.4316 29.9393 14.2152 30.0002 15 30C15.7848 30.0002 16.5684 29.9393 17.3438 29.8178V19.3359H20.8389Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_2219_6255">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
</svg>
`);

  appleSvg: SafeHtml = this.sanitizer
    .bypassSecurityTrustHtml(`<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.3788 19.5C18.5488 20.74 17.6688 21.95 16.3288 21.97C14.9888 22 14.5588 21.18 13.0388 21.18C11.5088 21.18 11.0388 21.95 9.76879 22C8.45879 22.05 7.46879 20.68 6.62879 19.47C4.91879 17 3.60879 12.45 5.36879 9.39C6.23879 7.87 7.79879 6.91 9.48879 6.88C10.7688 6.86 11.9888 7.75 12.7788 7.75C13.5588 7.75 15.0388 6.68 16.5888 6.84C17.2388 6.87 19.0588 7.1 20.2288 8.82C20.1388 8.88 18.0588 10.1 18.0788 12.63C18.1088 15.65 20.7288 16.66 20.7588 16.67C20.7288 16.74 20.3388 18.11 19.3788 19.5ZM13.6688 3.5C14.3988 2.67 15.6088 2.04 16.6088 2C16.7388 3.17 16.2688 4.35 15.5688 5.19C14.8788 6.04 13.7388 6.7 12.6188 6.61C12.4688 5.46 13.0288 4.26 13.6688 3.5Z" fill="black"/>
</svg>
`);
}

import { Component, inject, input } from '@angular/core';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { Router } from '@angular/router';
import { Button } from '../../shared/button/button';
import { LogoButton } from '../../shared/logo-button/logo-button';
import { HamburgerButton } from '../../shared/hamburger-button/hamburger-button';
import { ToggleService } from '../../services/toggle-service';
import { Navigation } from '../../shared/navigation/navigation';
import { LoginDialog } from '../../shared/login-dialog/login-dialog';

@Component({
  selector: 'app-public-header',
  standalone: true,
  imports: [Button, LogoButton, HamburgerButton, DialogModule, Navigation],
  templateUrl: './public-header.html',
  styleUrls: ['./public-header.css'],
})
export class PublicHeader {
  // Static SVG content
  svgIconContent = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.8 23.3V20.9C4.8 19.63 5.31 18.41 6.21 17.51C7.11 16.61 8.33 16.1 9.6 16.1H14.4C15.67 16.1 16.89 16.61 17.79 17.51C18.69 18.41 19.2 19.63 19.2 20.9V23.3M7.2 6.5C7.2 7.78 7.71 9 8.61 9.9C9.51 10.8 10.73 11.3 12 11.3C13.27 11.3 14.49 10.8 15.39 9.9C16.29 9 16.8 7.78 16.8 6.5C16.8 5.23 16.29 4.01 15.39 3.11C14.49 2.21 13.27 1.7 12 1.7C10.73 1.7 9.51 2.21 8.61 3.11C7.71 4.01 7.2 5.23 7.2 6.5Z" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  `;

  private router = inject(Router);
  private dialog = inject(Dialog);
  private toggleService = inject(ToggleService);
  path = input<string>('');

  navigate(path: string) {
    this.router.navigate([path]);
  }

  onMenuToggle() {
    this.toggleService.toggleSidebar();
  }

  openLogin(role: 'pharmacy' | 'patient') {
    const dialogRef = this.dialog.open(LoginDialog, {
      width: '100%', // default small screens
      hasBackdrop: true,
      backdropClass: 'login-backdrop',
      autoFocus: true,
      panelClass: 'login-dialog-panel',
    });

    // ✅ Only assign role if componentInstance exists
    if (dialogRef.componentInstance) {
      dialogRef.componentInstance.role = role;
    }

    dialogRef.closed.subscribe(() => {
      console.log('Login dialog closed');
    });
  }
}

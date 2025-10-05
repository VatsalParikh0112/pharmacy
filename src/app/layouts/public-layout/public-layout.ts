import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PublicHeader } from '../public-header/public-header';
import { PublicFooter } from '../public-footer/public-footer';
import { NgClass } from '@angular/common';
import { ToggleService } from '../../services/toggle-service';
import { NavigateButton } from '../../shared/navigate-button/navigate-button';
import { LoginDialog } from '../../shared/login-dialog/login-dialog';
import { ComponentPortal } from '@angular/cdk/portal';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [RouterModule, PublicHeader, PublicFooter, NgClass, NavigateButton],
  templateUrl: './public-layout.html',
  styleUrls: ['./public-layout.css'],
})
export class PublicLayout {
  private toggleService = inject(ToggleService);
  isSidebarOpen = this.toggleService.isSidebarOpen;
  dialog = inject(Dialog);

  closeSidebar() {
    this.toggleService.closeSidebar();
  }

  openForm() {
    const dialogRef = this.dialog.open(LoginDialog, {
      data: { title: 'Please Fill the Form' },
    });
  }

  hideHeader = signal(false);

  ngOnInit(): void {
    this.addScrollListener();
  }

  addScrollListener() {
    window.addEventListener('scroll', () => {
      this.hideHeader.set(window.scrollY > window.innerHeight);
    });
  }

  openLogin(role: 'pharmacy' | 'patient') {
    this.closeSidebar();

    const dialogRef = this.dialog.open(LoginDialog, {
      width: '100%', // default small screens
      hasBackdrop: true,
      backdropClass: 'login-backdrop',
      autoFocus: true,
      panelClass: 'login-dialog-panel',
    });

    if (dialogRef.componentInstance) {
      dialogRef.componentInstance.role = role;
    }

    dialogRef.closed.subscribe(() => {
      console.log('Login dialog closed');
    });
  }
}

import { Component, input, output, signal, inject } from '@angular/core';
import { NavigateButton } from '../navigate-button/navigate-button';
import { Overlay } from '@angular/cdk/overlay';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [NavigateButton],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  private overlay = inject(Overlay);
  private router = inject(Router);

  button1 = input<string>('button');
  route1 = input<string>('/xyz');

  button2 = input<string>('');
  route2 = input<string>('');

  button3 = input<string>('');
  route3 = input<string>('');

  button4 = input<string>('');
  route4 = input<string>('');

  button5 = input<string>('');
  route5 = input<string>('');
  openDialog5 = input<boolean>(false);

  button6 = input<string>('');
  route6 = input<string>('');
  openDialog6 = input<boolean>(false);

  button7 = input<string>('');
  route7 = input<string>('');

  sidebarClose = output<void>();

  closeSidebar() {
    this.sidebarClose.emit();
  }

  showButton2 = signal(!!this.button2);
  showButton3 = signal(!!this.button3);
  showButton4 = signal(!!this.button4);
  showButton5 = signal(!!this.button5);
  showButton6 = signal(!!this.button6);
  showButton7 = signal(!!this.button7);

}

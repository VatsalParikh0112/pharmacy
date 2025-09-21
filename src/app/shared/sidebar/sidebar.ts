import { Component, input, output, signal } from '@angular/core';
import { NavigateButton } from '../navigate-button/navigate-button';

@Component({
  selector: 'app-sidebar',
  imports: [NavigateButton],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
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

  button6 = input<string>('');
  route6 = input<string>('');

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

import { Component, input } from '@angular/core';
import { NavigateButton } from '../navigate-button/navigate-button';

@Component({
  selector: 'app-navigation',
  imports: [NavigateButton],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class Navigation {
  button1 = input<string>('button');
  route1 = input<string>('/xyz');

  button2 = input<string>('');
  route2 = input<string>('');

  button3 = input<string>('');
  route3 = input<string>('');

  button4 = input<string>('');
  route4 = input<string>('');
}

import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logo-button',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './logo-button.html',
  styleUrls: ['./logo-button.css'],
})
export class LogoButton {
  position = input<string>('items-center')
  colorClass = input<string>('text-[#29B48B]');
  block = input<string>('block')
}

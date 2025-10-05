import { NgClass } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigate-button',
  imports: [RouterModule, NgClass],
  templateUrl: './navigate-button.html',
  styleUrl: './navigate-button.css',
})
export class NavigateButton {
  router = inject(Router);
  disableActive = input<boolean>(false);
  label = input<string>('Button');
  route = input<string>('/');
  styleType = input<'underline' | 'bg'>('underline');

  isActive(): boolean {
    if (this.disableActive()) return false;
    return this.router.url === this.route();
  }
}

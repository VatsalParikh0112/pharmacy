import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PublicHeader } from '../public-header/public-header';
import { PublicFooter } from '../public-footer/public-footer';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { NgClass } from '@angular/common';
import { ToggleService } from '../../services/toggle-service';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [RouterModule, PublicHeader, PublicFooter, Sidebar, NgClass],
  templateUrl: './public-layout.html',
  styleUrls: ['./public-layout.css'],
})
export class PublicLayout {
  private toggleService = inject(ToggleService);

  isSidebarOpen = this.toggleService.isSidebarOpen;

  closeSidebar() {
    this.toggleService.closeSidebar();
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
}

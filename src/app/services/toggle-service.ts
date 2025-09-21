import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToggleService {
  private _isSidebarOpen = signal(false);

  // expose signal (not value)
  isSidebarOpen = this._isSidebarOpen;

  toggleSidebar() {
    this._isSidebarOpen.update((value) => !value);
  }

  closeSidebar() {
    this._isSidebarOpen.set(false);
  }
}

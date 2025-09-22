import { Component, inject, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-box',
  imports: [],
  templateUrl: './box.html',
  styleUrl: './box.css',
})
export class Box {
  private sanitizer = inject(DomSanitizer);

  title = input<string>('Title');
  para = input<string>('para');
  svgIconContent = input<string | undefined>(undefined);

  get svgIcon(): SafeHtml | undefined {
    return this.svgIconContent()
      ? this.sanitizer.bypassSecurityTrustHtml(this.svgIconContent()!)
      : undefined;
  }
}

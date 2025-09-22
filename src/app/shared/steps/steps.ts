import { Component, inject, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-steps',
  imports: [],
  templateUrl: './steps.html',
  styleUrl: './steps.css',
})
export class Steps {
  private sanitizer = inject(DomSanitizer);

  step = input<string>('');
  stepDetails = input<string>('')
  imgContent = input<string | undefined>(undefined);

  get img(): SafeHtml | undefined {
    return this.imgContent()
      ? this.sanitizer.bypassSecurityTrustHtml(this.imgContent()!)
      : undefined;
  }
}

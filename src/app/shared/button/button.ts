import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrls: ['./button.css'],
})
export class Button {
  private sanitizer= inject(DomSanitizer);
  
  type = input<string>('button');

  // Tailwind classes
  bgColor = input<string>('bg-[#29B48B]');
  textColor = input<string>('text-white');
  hoverTextColor = input<string>('hover:text-white')
  borderColor = input<string>('border border-[#27A37D]');
  hoverBgColor = input<string>('hover:bg-[#27A37D]');
  activeBgColor = input<string>('active:bg-[#23876A]');
  rounded = input<string>('rounded');
  padding = input<string>('px-4 py-3');
  gap = input<string>('gap-2.5');
  height = input<string>('h-12');

  // Label
  label = input<string>('Button');

  // SVG input
  svgIconContent = input<string | undefined>(undefined);

  // Sanitized SVG for innerHTML
  get svgIcon(): SafeHtml | undefined {
    return this.svgIconContent() ? this.sanitizer.bypassSecurityTrustHtml(this.svgIconContent()!) : undefined;
  }
}

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PharmacyHeader } from '../pharmacy-header/pharmacy-header';
import { PharmacyFooter } from '../pharmacy-footer/pharmacy-footer';

@Component({
  selector: 'app-pharmacy-layout',
  standalone: true,
  imports: [RouterModule, PharmacyHeader, PharmacyFooter],
  templateUrl: './pharmacy-layout.html',
  styleUrls: ['./pharmacy-layout.css'],
})
export class PharmacyLayout {}

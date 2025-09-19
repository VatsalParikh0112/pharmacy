import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PublicHeader } from '../public-header/public-header';
import { PublicFooter } from '../public-footer/public-footer';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [RouterModule, PublicHeader, PublicFooter],
  templateUrl: './public-layout.html',
  styleUrls: ['./public-layout.css'],
})
export class PublicLayout {}

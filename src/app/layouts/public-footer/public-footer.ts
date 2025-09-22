import { Component } from '@angular/core';
import { LogoButton } from '../../shared/logo-button/logo-button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-public-footer',
  imports: [LogoButton, RouterModule],
  templateUrl: './public-footer.html',
  styleUrl: './public-footer.css'
})
export class PublicFooter {

}

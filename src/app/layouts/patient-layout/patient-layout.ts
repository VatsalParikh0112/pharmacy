import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PatientHeader } from '../patient-header/patient-header';
import { PatientFooter } from '../patient-footer/patient-footer';

@Component({
  selector: 'app-patient-layout',
  standalone: true,
  imports: [RouterModule, PatientHeader, PatientFooter],
  templateUrl: './patient-layout.html',
  styleUrls: ['./patient-layout.css'],
})
export class PatientLayout {}

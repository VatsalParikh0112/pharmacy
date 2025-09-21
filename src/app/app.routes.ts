import { Routes } from '@angular/router';

// Layouts
import { PublicLayout } from './layouts/public-layout/public-layout';
import { PatientLayout } from './layouts/patient-layout/patient-layout';
import { PharmacyLayout } from './layouts/pharmacy-layout/pharmacy-layout';

// Public pages
import { Home } from './pages/public/home/home';
import { About } from './pages/public/about/about';
import { Contact } from './pages/public/contact/contact';
import { Follow } from './pages/public/follow/follow';

// Patient pages
import { CurrentRequest as PatientCurrentRequest } from './pages/patient/current-request/current-request';
import { PersonalInfo } from './pages/patient/personal-info/personal-info';
import { InsuranceInfo } from './pages/patient/insurance-info/insurance-info';
import { History as PatientHistory } from './pages/patient/history/history';

// Pharmacy pages
import { Dashboard } from './pages/pharmacy/dashboard/dashboard';
import { CurrentRequest as PharmacyCurrentRequest } from './pages/pharmacy/current-request/current-request';
import { NewRequest } from './pages/pharmacy/new-request/new-request';
import { RejectedRequest } from './pages/pharmacy/rejected-request/rejected-request';
import { History as PharmacyHistory } from './pages/pharmacy/history/history';
import { GeneralInquiries } from './pages/pharmacy/general-inquiries/general-inquiries';

// Page Not Found
import { PageNotFound } from './pages/page-not-found/page-not-found';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayout,
    children: [
      { path: '', component: Home },
      { path: 'about', component: About },
      { path: 'contact', component: Contact },
      { path: 'follow', component: Follow },
    ],
  },
  {
    path: 'patient',
    component: PatientLayout,
    children: [
      { path: '', component: PatientCurrentRequest },
      { path: 'personal-info', component: PersonalInfo },
      { path: 'insurance-info', component: InsuranceInfo },
      { path: 'history', component: PatientHistory },
    ],
  },
  {
    path: 'pharmacy',
    component: PharmacyLayout,
    children: [
      { path: '', component: Dashboard },
      { path: 'current-request', component: PharmacyCurrentRequest },
      { path: 'new-request', component: NewRequest },
      { path: 'rejected-request', component: RejectedRequest },
      { path: 'history', component: PharmacyHistory },
      { path: 'general-inquiries', component: GeneralInquiries },
    ],
  },
  {
    path: '**', component:PageNotFound
  }
];

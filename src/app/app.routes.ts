import { Routes } from '@angular/router';
// Layouts
import { PublicLayout } from './layouts/public-layout/public-layout';
import { PatientLayout } from './layouts/patient-layout/patient-layout';
import { PharmacyLayout } from './layouts/pharmacy-layout/pharmacy-layout';

// Page Not Found
import { PageNotFound } from './pages/page-not-found/page-not-found';

export const routes: Routes = [
  // Public routes
  {
    path: '',
    component: PublicLayout,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/public/home/home').then((m) => m.Home),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./pages/public/about/about').then((m) => m.About),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./pages/public/contact/contact').then((m) => m.Contact),
      },
      {
        path: 'follow',
        loadComponent: () =>
          import('./pages/public/follow/follow').then((m) => m.Follow),
      },
    ],
  },

  // Patient routes
  {
    path: 'patient',
    component: PatientLayout,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/patient/current-request/current-request').then(
            (m) => m.CurrentRequest
          ),
      },
      {
        path: 'personal-info',
        loadComponent: () =>
          import('./pages/patient/personal-info/personal-info').then(
            (m) => m.PersonalInfo
          ),
      },
      {
        path: 'insurance-info',
        loadComponent: () =>
          import('./pages/patient/insurance-info/insurance-info').then(
            (m) => m.InsuranceInfo
          ),
      },
      {
        path: 'history',
        loadComponent: () =>
          import('./pages/patient/history/history').then((m) => m.History),
      },
    ],
  },

  // Pharmacy routes
  {
    path: 'pharmacy',
    component: PharmacyLayout,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/pharmacy/dashboard/dashboard').then(
            (m) => m.Dashboard
          ),
      },
      {
        path: 'current-request',
        loadComponent: () =>
          import('./pages/pharmacy/current-request/current-request').then(
            (m) => m.CurrentRequest
          ),
      },
      {
        path: 'new-request',
        loadComponent: () =>
          import('./pages/pharmacy/new-request/new-request').then(
            (m) => m.NewRequest
          ),
      },
      {
        path: 'rejected-request',
        loadComponent: () =>
          import('./pages/pharmacy/rejected-request/rejected-request').then(
            (m) => m.RejectedRequest
          ),
      },
      {
        path: 'history',
        loadComponent: () =>
          import('./pages/pharmacy/history/history').then((m) => m.History),
      },
      {
        path: 'general-inquiries',
        loadComponent: () =>
          import('./pages/pharmacy/general-inquiries/general-inquiries').then(
            (m) => m.GeneralInquiries
          ),
      },
    ],
  },

  // Fallback route
  { path: '**', component: PageNotFound },
];

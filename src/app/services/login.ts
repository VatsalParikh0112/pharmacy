import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Response interface
export interface AuthResponse {
  success: boolean;
  role?: 'pharmacy' | 'patient';
  message?: string;
}

// User type
interface User {
  email: string;
  password: string;
  role: 'pharmacy' | 'patient';
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // Fake users
  private fakeUsers: User[] = [
    { email: 'pooji@mail.com', password: '123456', role: 'pharmacy' },
    { email: 'vatsal@mail.com', password: '123456', role: 'patient' },
  ];

  constructor() {}

  /**
   * Login method
   * @param email
   * @param password
   */
  login(email: string, password: string): Observable<AuthResponse> {
    const user = this.fakeUsers.find(u => u.email === email && u.password === password);

    if (user) {
      return of({ success: true, role: user.role });
    } else {
      return of({ success: false, message: 'Invalid credentials' });
    }
  }

  /**
   * Signup method
   * @param email
   * @param password
   * @param role
   */
  signup(email: string, password: string, role: 'pharmacy' | 'patient'): Observable<AuthResponse> {
    const exists = this.fakeUsers.some(u => u.email === email);

    if (exists) {
      return of({ success: false, message: 'User already exists' });
    } else {
      this.fakeUsers.push({ email, password, role });
      return of({ success: true, role });
    }
  }
}

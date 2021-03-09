import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  authenticated: boolean = false;
  async login(username: string, password: string): Promise<boolean> {
    if (username === 'admin@avl.com' && password === '5525') {
      this.authenticated = true;
    } else {
      this.authenticated = false;
    }
    return this.authenticated;
  }
  signOut() {
    this.authenticated = false;
  }
}

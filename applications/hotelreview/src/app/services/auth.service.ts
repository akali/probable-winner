import { Injectable } from '@angular/core';
import {SignInModel} from "libraries/ui/src/lib/auth/auth/auth.component";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getCurrentUsername(): string {
    return <string>localStorage.getItem('username');
  }

  setCurrentUsername(email: string) {
    localStorage.setItem('username', email);
  }

  signIn(profile: SignInModel) {
    if (profile.email !== undefined && ['akali@g.co', 'zhanel@g.co'].indexOf(profile.email) !== -1) {
      console.log('signed in');
      this.setCurrentUsername(profile.email);
      return true;
    }
    return false;
  }

  public authenticated() {
    return localStorage.getItem('username') !== null;
  }

  logout() {
    localStorage.removeItem('username');
  }
}

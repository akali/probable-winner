import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hotelreview';

  constructor(private _router: Router) {}

  SignIn() {
    const model = {
      name: 'Ilias',
      token: 'asdhajhsdgjhasgdjasgdjhasgdjabsdk',
    };
    sessionStorage.setItem('auth', JSON.stringify(model));
    this._router.navigate(['list']);
  }

  onNavHomeClick() {
    this._router.navigate(['/'])
  }

  onNavJoinClick() {
    this._router.navigate(['/auth'])
  }

  get authenticated(): boolean {
    return false;
  }

  get username(): string {
    return ''
  }

  onNavLogoutClick() {

  }
}

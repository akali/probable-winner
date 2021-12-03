import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'healtcare';

  constructor(private _router: Router) {}

  SignIn() {
    const model = {
      name: 'Ilias',
      token: 'asdhajhsdgjhasgdjasgdjhasgdjabsdk',
    };
    sessionStorage.setItem('auth', JSON.stringify(model));
    this._router.navigate(['list']);
  }
}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SignInModel, SignUpModel} from "libraries/ui/src/lib/auth/auth/auth.component";
import {AuthService} from "applications/hotelreview/src/app/services/auth.service";

@Component({
  selector: 'hr-login',
  templateUrl: './loginRegister.component.html',
  styleUrls: ['./loginRegister.component.scss']
})
export class LoginRegisterComponent implements OnInit {
  mode: 'login' | 'register' = 'login';
  error: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    ) { }

  ngOnInit(): void {
    const mode = this.route.snapshot.data['mode'];
    if (mode === 'register') {
      this.mode = 'register';
    } else {
      this.mode = 'login';
    }
  }

  onSignIn(profile: SignInModel) {
    if (this.authService.signIn(profile)) {
      this.router.navigate(['/']);
    } else {
      this.error = `Can't login`;
    }
  }

  onSignUp(profile: SignUpModel) {
    console.log(profile);
  }
}

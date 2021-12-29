import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

export class SignInModel {
  email?: string;
  password?: string;
}

export class SignUpModel {
  name?: string;
  email?: string;
  password?: string;
}

@Component({
  selector: 'ui-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  @Input() mode: 'login' | 'register' = 'login';
  @Input() error: string = '';
  @Output() onSignIn = new EventEmitter<SignInModel>();
  @Output() onSignUp = new EventEmitter<SignUpModel>();
  signInForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  })
  signUpForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required],
  })
  get registerFormControl() {
    if (this.mode == 'login') {
      return this.signInForm.controls;
    }
    return this.signUpForm.controls;
  }

  constructor(
    private fb: FormBuilder,
  ){}

  ngOnInit(): void {
  }
  onSignInSubmit(): void {
    const emailControl = this.signInForm.get('email')
    if (emailControl == null) return;
    const passwordControl = this.signInForm.get('password');
    if (passwordControl == null) return;
    const profile: SignInModel = {
      email: emailControl.value,
      password: passwordControl.value,
    };
    this.onSignIn.emit(profile);
  }
  onSignUpSubmit(): void {
    const emailControl = this.signUpForm.get('email')
    if (emailControl == null) return;
    const passwordControl = this.signUpForm.get('password');
    if (passwordControl == null) return;
    const nameControl = this.signUpForm.get('name');
    if (nameControl == null) return;
    const profile: SignUpModel = {
      email: emailControl.value,
      password: passwordControl.value,
      name: nameControl.value,
    };
    this.onSignUp.emit(profile);
  }

  changeMode(mode: 'login' | 'register') {
    this.mode = mode;
  }

  flipMode() {
    if (this.mode === 'login') {
      this.mode = 'register';
    } else {
      this.mode = 'login';
    }
  }
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {LayoutComponent} from './layout/layout.component';
import {LoginRegisterComponent} from 'applications/hotelreview/src/app/auth/loginRegister/loginRegister.component';
import {AuthModule as UiAuthModule} from "libraries/ui/src/lib/auth/auth.module";


@NgModule({
  declarations: [
    LayoutComponent,
    LoginRegisterComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    UiAuthModule,
  ]
})
export class AuthModule {
}

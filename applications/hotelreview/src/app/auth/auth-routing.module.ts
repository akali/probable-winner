import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "applications/hotelreview/src/app/auth/layout/layout.component";
import {LoginRegisterComponent} from "applications/hotelreview/src/app/auth/loginRegister/loginRegister.component";

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [{
    path: 'login',
    component: LoginRegisterComponent,
    data: {
      mode: 'login',
    }
  }, {
    path: 'register',
    component: LoginRegisterComponent,
    data: {
      mode: 'register',
    }
  }, {
    path: '',
    redirectTo: 'loginRegister',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

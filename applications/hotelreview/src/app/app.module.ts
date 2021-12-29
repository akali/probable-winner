import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BreadcrumbModule } from 'libraries/ui/src/lib/breadcrumb/breadcrumb.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import { TestInterceptor } from './interceptors/test.interceptor';
import { SharedModule } from './shared/shared.module';
import { LoaderModule } from 'libraries/ui/src/lib/loader/loader.module';
import { NavigationModule } from 'libraries/ui/src/lib/navigation/navigation.module';
import {HotelCardModule} from "libraries/ui/src/lib/hotel-card/hotel-card.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    BreadcrumbModule.forRoot(),
    SharedModule,
    LoaderModule.forRoot(),
    NavigationModule,
    HotelCardModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TestInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

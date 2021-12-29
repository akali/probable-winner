import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NoPermPageComponent } from './shared/no-perm-page/no-perm-page.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import {AboutUsComponent} from "applications/hotelreview/src/app/shared/about-us/about-us.component";

const routes: Routes = [
  {
    path: 'search',
    loadChildren: () =>
      import('./search/search.module').then((mod) => mod.SearchModule),
  },
  {
    path: 'list',
    loadChildren: () =>
      import('./list/list.module').then((mod) => mod.ListModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'hotel',
    loadChildren: () =>
      import('./hotel/hotel.module').then((mod) => mod.HotelModule),
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: '403',
    component: NoPermPageComponent,
  },
  {
    path: '404',
    component: PageNotFoundComponent,
  },
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/404',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

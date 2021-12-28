import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NoPermPageComponent } from './shared/no-perm-page/no-perm-page.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'list',
    loadChildren: () =>
      import('./list/list.module').then((mod) => mod.ListModule),
    canLoad: [AuthGuard],
    data: {
      title: 'Лист',
      hasBreadcrumbs: true,
      breadCrumbTitle: 'Лист',
      id: 0,
      url: '/list',
    },
  },
  {
    path: '403',
    component: NoPermPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

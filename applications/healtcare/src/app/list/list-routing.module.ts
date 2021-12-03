import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { ExitGuard } from '../guards/exit.guard';
import { TestResolver } from '../resolvers/test.resolver';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { DescComponent } from './desc/desc.component';
import { LayoutComponent } from './layout/layout.component';
import { ListComponent } from './list/list.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'page',
        pathMatch: 'full',
      },
      {
        path: 'page',
        component: ListComponent,
        canDeactivate: [ExitGuard],
        resolve: {
          items: TestResolver,
        },
        data: {
          title: 'Страница',
          breadCrumbTitle: 'Страница',
          id: 1,
          url: '/list/page',
        },
      },
      {
        path: 'post',
        component: PostComponent,
        data: {
          title: 'Пост',
          breadCrumbTitle: 'Пост',
          id: 1,
          url: '/list/post',
        },
        children: [
          {
            path: 'desc',
            component: DescComponent,
            data: {
              title: 'Описание',
              breadCrumbTitle: 'Описание',
              id: 1,
              url: '/list/post/desc',
            },
          },
        ],
      },
      {
        path: '**',
        component: PageNotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListRoutingModule {}

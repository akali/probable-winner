import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LayoutComponent} from "applications/hotelreview/src/app/hotel/layout/layout.component";
import {ListComponent} from "applications/hotelreview/src/app/hotel/list/list.component";
import {DetailComponent} from "applications/hotelreview/src/app/hotel/detail/detail.component";
import {PageNotFoundComponent} from "applications/hotelreview/src/app/shared/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'list',
        children: [{
          path: ':query',
          component: ListComponent,
        }],
      },
      {
        path: 'comment',
        loadChildren: () =>
          import('./comment/comment.module').then((mod) => mod.CommentModule),
      },
      {
        path: ':hotel_id',
        component: DetailComponent,
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
export class HotelRoutingModule {}

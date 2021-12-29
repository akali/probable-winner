import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {EditComponent} from "applications/hotelreview/src/app/hotel/comment/edit/edit.component";
import {AuthGuard} from "applications/hotelreview/src/app/guards/auth.guard";

const routes: Routes = [
  {
    path: 'comment/:comment_id',
    component: EditComponent,
    // canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentRoutingModule {}

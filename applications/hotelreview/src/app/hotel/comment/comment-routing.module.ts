import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {EditComponent} from "applications/hotelreview/src/app/hotel/comment/edit/edit.component";

const routes: Routes = [
  {
    path: 'comment/:comment_id',
    component: EditComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import {CommentItemModule} from "libraries/ui/src/lib/comment-item/comment-item.module";
import { EditComponent } from './edit/edit.component';
import {CommentRoutingModule} from "applications/hotelreview/src/app/hotel/comment/comment-routing.module";



@NgModule({
  declarations: [
    ListComponent,
    EditComponent
  ],
  exports: [
    ListComponent
  ],
  imports: [
    CommonModule,
    CommentItemModule,
    CommentRoutingModule,
  ]
})
export class CommentModule { }

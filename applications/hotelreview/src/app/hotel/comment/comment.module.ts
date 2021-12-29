import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import {CommentItemModule} from "libraries/ui/src/lib/comment-item/comment-item.module";



@NgModule({
  declarations: [
    ListComponent
  ],
  exports: [
    ListComponent
  ],
  imports: [
    CommonModule,
    CommentItemModule,
  ]
})
export class CommentModule { }

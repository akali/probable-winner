import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentItemComponent } from './comment-item/comment-item.component';
import { CommentCreateComponent } from './comment-create/comment-create.component';



@NgModule({
  declarations: [
    CommentItemComponent,
    CommentCreateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CommentItemModule { }

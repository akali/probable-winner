import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentItemComponent } from './comment-item/comment-item.component';
import { CommentCreateComponent } from './comment-create/comment-create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StarblockModule} from "libraries/ui/src/lib/starblock/starblock.module";



@NgModule({
  declarations: [
    CommentItemComponent,
    CommentCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StarblockModule,
  ],
  exports: [
    CommentItemComponent,
    CommentCreateComponent,
  ]
})
export class CommentItemModule { }

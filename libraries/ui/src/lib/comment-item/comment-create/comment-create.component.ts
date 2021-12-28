import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'ui-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.scss']
})
export class CommentCreateComponent implements OnInit {
  commentForm = this.fb.group({
    comment: ['', Validators.required],
  })

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  onCommentAddSubmit(): void {

  }
}

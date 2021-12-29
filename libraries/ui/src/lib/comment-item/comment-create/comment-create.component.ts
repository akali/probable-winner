import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'ui-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.scss']
})
export class CommentCreateComponent implements OnInit {
  @Input() mode: 'create' | 'edit' = 'create';
  @Input() content: string = '';
  @Output() onDone = new EventEmitter<string>();
  @Output() onDelete = new EventEmitter<void>();

  commentForm = this.fb.group({
    comment: ['', Validators.required],
  })

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    if (this.mode === 'edit')
      this.commentForm.get('comment')?.setValue(this.content);
  }

  onCommentAddSubmit(): void {
    if (this.commentForm.get('comment')?.valid) {
      this.onDone.emit(this.commentForm.get('comment')?.value);
    }
  }
}

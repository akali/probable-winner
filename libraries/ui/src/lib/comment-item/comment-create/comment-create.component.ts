import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {HotelRating} from "applications/hotelreview/src/app/hotel/services/hotel.service";


@Component({
  selector: 'ui-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.scss']
})
export class CommentCreateComponent implements OnInit {
  @Input() mode: 'create' | 'edit' = 'create';
  @Input() content: string = '';
  @Output() onDone = new EventEmitter<string>();
  @Output() onRatingDone = new EventEmitter<HotelRating>();
  @Output() onDelete = new EventEmitter<void>();

  commentForm = this.fb.group({
    comment: ['', Validators.required],
  })
  rating: HotelRating = 0;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    if (this.mode === 'edit')
      this.commentForm.get('comment')?.setValue(this.content);
  }

  onCommentAddSubmit(): void {
    if (this.commentForm.get('comment')?.valid) {
      this.onDone.emit(this.commentForm.get('comment')?.value);
      console.log(this.rating);
      this.onRatingDone.emit(this.rating);
      this.commentForm.get('comment')?.setValue('');
    }
  }

  onRatingUpdate(newRating: number) {
    this.rating = <HotelRating>newRating;
  }
}
